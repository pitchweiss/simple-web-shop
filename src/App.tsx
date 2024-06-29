import "./App.css";

import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import { ShopProvider } from "./context/ShopContext";

const ResponsiveGrid = lazy(
  () => import("./components/ResponsiveGrid/ResponsiveGrid")
);
const ShopItemDetails = lazy(
  () => import("./components/ShopItemDetails/ShopItemDetails")
);

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />
        <main className="py-8">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ResponsiveGrid />} />
              <Route path="/product/:id" element={<ShopItemDetails />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
