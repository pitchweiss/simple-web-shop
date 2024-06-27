import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { fetchShopItems } from "../services/shopItemsService";
import { IShopItem } from "../types/shopItem";

interface IShopContextType {
  shopItems: IShopItem[];
  seIShopItems: (items: IShopItem[]) => void;
  cart: ICartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeProductFromCart: (id: number) => void;
  loading: boolean;
  error: string | null;
  fetchProduct: (id: string) => IShopItem | undefined;
  cartCount: number;
}

const ShopContext = createContext<IShopContextType | undefined>(undefined);

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};

export interface ICartItem extends IShopItem {
  quantity: number;
}

export const ShopProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shopItems, seIShopItems] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const product = shopItems.find((item) => item.id === id);
      if (product) {
        setCart([...cart, { ...product, quantity: 1, id: product.id }]);
      }
    }
  };

  const removeFromCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCart(cart.filter((item) => item.id !== id));
      } else {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    }
  };

  const removeProductFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchShopItems();

        seIShopItems(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const fetchProduct = (id: string): IShopItem | undefined =>
    shopItems.find((item) => item.id === Number(id));

  return (
    <ShopContext.Provider
      value={{
        shopItems,
        seIShopItems,
        loading,
        error,
        fetchProduct,
        cart,
        addToCart,
        removeFromCart,
        removeProductFromCart,
        cartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
