import { IShopItem } from "../types/shopItem";

export async function fetchShopItems(): Promise<IShopItem[]> {
  try {
    const response = await fetch(
      "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: IShopItem[] = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching shop items failed:", error);
    throw new Error("Failed to fetch shop items.");
  }
}
