import { FC } from "react";
import { TShopItem } from "../../types/shopItem";
import ShopItemCard from "../ShopItemCard/ShopItemCard";

interface IResponsiveGridProps {
  items: TShopItem[];
}

const ResponsiveGrid: FC<IResponsiveGridProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ShopItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
