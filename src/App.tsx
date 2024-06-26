import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import ResponsiveGrid from "./components/ResponsiveGrid/ResponsiveGrid";
import ShopItemDetails from "./components/ShopItemDetails/ShopItemDetails";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<ResponsiveGrid />} />
            <Route path="/product/:id" element={<ShopItemDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
