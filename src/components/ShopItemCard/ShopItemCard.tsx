import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";

interface ICardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ShopItemCard: FC<ICardProps> = ({ id, name, description, price }) => {
  const { addToCart } = useShopContext();
  return (
    <div className="flex flex-col justify-between p-4 rounded-lg shadow bg-dark-purple/40">
      <div>
        <Link
          to={`/product/${id}`}
          className="text-lg font-bold truncate text-mint-cream hover:text-lime-green hover:cursor-pointer"
        >
          {name}
        </Link>
        <p className="text-sm text-gray-500 truncate">${price.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <p className="h-10 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link
          to={`/product/${id}`}
          className="text-md text-mint-cream hover:text-lime-green hover:cursor-pointer"
        >
          Read more...
        </Link>
        <button aria-label="Add to cart" onClick={() => addToCart(id)}>
          <ShoppingCartIcon className="w-6 h-6 text-mint-cream hover:text-lime-green" />
        </button>
      </div>
    </div>
  );
};

export default ShopItemCard;
