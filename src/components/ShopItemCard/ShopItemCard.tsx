import { FC, memo, useCallback } from "react";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
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

  const handleAddToCart = useCallback(() => {
    addToCart(id);
  }, [id, addToCart]);

  return (
    <div className="flex flex-col justify-between p-4 rounded-lg shadow bg-dark-gray/40">
      <div>
        <Link
          to={`/product/${id}`}
          className="text-lg font-bold truncate text-mint-cream hover:text-pretty-pink hover:cursor-pointer"
        >
          {name}
        </Link>
        <p className="font-semibold truncate text-md text-soft-cyan">
          ${price.toFixed(2)}
        </p>
      </div>
      <div className="mt-4">
        <p className="h-10 text-sm text-mint-cream line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link
          to={`/product/${id}`}
          className="text-md text-mint-cream hover:text-pretty-pink hover:cursor-pointer"
        >
          Read more...
        </Link>
        <button aria-label="Add to cart" onClick={handleAddToCart}>
          <ShoppingCartIcon className="w-6 h-6 text-mint-cream hover:text-pretty-pink" />
        </button>
      </div>
    </div>
  );
};

const MemoizedShopItemCard = memo(ShopItemCard);

export default MemoizedShopItemCard;
