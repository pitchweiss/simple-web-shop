import { FC } from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopItemCard from "../ShopItemCard/ShopItemCard";
import Spinner from "../Spinner/Spinner";

const ResponsiveGrid: FC = () => {
  const { shopItems, loading, error } = useShopContext();

  if (loading) {
    return (
      <div className="container flex flex-row justify-center w-full">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shopItems.map((item) => (
          <ShopItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
