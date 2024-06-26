import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { MinusCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { formatTotalPrice } from "../../utils/formatTotalPrice";

const Header: FC = () => {
  const { cart, addToCart, removeFromCart } = useShopContext();
  return (
    <header className="text-mint-cream bg-palatinate">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link
          to={"/"}
          className="flex items-center space-x-4 hover:cursor-pointer"
        >
          <SparklesIcon className="w-8 h-8 text-moderate-pink" />
          <h1 className="text-xl font-bold">Kwik-E-Mart</h1>
        </Link>

        <Popover>
          <PopoverButton className="flex items-center hover:text-lime-green">
            <ShoppingCartIcon className="w-6 h-6" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom end"
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 p-3 mt-3 bg-dark-purple"
          >
            {cart.length === 0 ? (
              <p>No items</p>
            ) : (
              <div className="flex flex-col gap-2">
                <ul className="flex flex-col">
                  {cart.map((item) => (
                    <li key={item.id} className="flex flex-col gap-2">
                      <p>{item.name}</p>
                      <div className="flex flex-row items-center justify-center w-full gap-2">
                        <PlusCircleIcon
                          className="w-4 h-4 text-moderate-pink"
                          onClick={() => addToCart(item.id)}
                        />
                        {item.quantity}
                        <MinusCircleIcon
                          className="w-4 h-4 text-moderate-pink"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="h-[1px] bg-black w-full"></div>
                <div className="flex flex-row">
                  Total price: {formatTotalPrice(cart)}
                </div>
              </div>
            )}
          </PopoverPanel>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
