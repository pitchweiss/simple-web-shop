import { usdFormatter } from "./usFormatter";

export const formatPrice = (price: number): string => {
  return usdFormatter.format(price);
};
