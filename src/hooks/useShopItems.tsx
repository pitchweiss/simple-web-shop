import { useEffect, useState } from "react";

import { fetchShopItems } from "../services/shopItemsService";
import { IShopItem } from "../types/shopItem";

const useShopItems = () => {
  const [items, setItems] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchShopItems();

        setItems(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};

export default useShopItems;
