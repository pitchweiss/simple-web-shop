import { IShopItem } from "../types/shopItem";

export async function fetchShopItems(): Promise<IShopItem[]> {
  const response = await fetch(
    "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/"
  );
  const data = await response.json();

  return data;
}
