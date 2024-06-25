import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import ResponsiveGrid from "./components/ResponsiveGrid/ResponsiveGrid";
import { fetchShopItems } from "./services/shopItemsService";
import { TShopItem } from "./types/shopItem";

function App() {
  const [shopItems, setShopItems] = useState<TShopItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShopItems();
        setShopItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="py-8">
        <ResponsiveGrid items={shopItems} />
      </main>
    </>
  );
}

export default App;
