export type TShopItem = {
  id: number;
  description: string;
  name: string;
  price: number;
  features: string[];
  additionalInformation: {
    [key: string]: string | string[];
  };
  specifications: {
    [key: string]: string | number | string[];
  };
};
