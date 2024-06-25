import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

interface ICardProps {
  name: string;
  description: string;
  price: number;
}

const ShopItemCard: FC<ICardProps> = ({ name, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-gray-500 text-sm truncate">${price.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-sm h-10 line-clamp-2">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-md">Read more...</span>
        <button
          className="text-gray-600 hover:text-gray-900"
          aria-label="Add to cart"
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ShopItemCard;
