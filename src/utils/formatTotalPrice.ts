import { ICartItem } from "../context/ShopContext";
import { usdFormatter } from "./usFormatter";

export const formatTotalPrice = (items: ICartItem[]): string => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return usdFormatter.format(total);
};
