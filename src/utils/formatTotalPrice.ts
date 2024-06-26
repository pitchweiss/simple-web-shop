import { ICartItem } from "../context/ShopContext";

export const formatTotalPrice = (items: ICartItem[]): string => {
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);
};
