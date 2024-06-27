import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { FC, useEffect, useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { formatPrice } from "../../utils/formatPrice";
import { formatTotalPrice } from "../../utils/formatTotalPrice";

const Header: FC = () => {
  const { cart, addToCart, removeFromCart, removeProductFromCart, cartCount } =
    useShopContext();
  const [showCartItemNumber, setShowCartItemNumber] = useState<boolean>(
    cartCount > 0 ? true : false
  );
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (cartCount === 0) setShowCartItemNumber(false);
    if (cartCount > 0 && !open) setShowCartItemNumber(true);
  }, [cartCount]);

  return (
    <header className="text-mint-cream bg-purple-heart">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link
          to={"/"}
          className="flex items-center space-x-4 hover:cursor-pointer"
        >
          <SparklesIcon className="w-8 h-8 text-pretty-pink" />
          <h1 className="text-xl font-bold">Kwik-E-Mart</h1>
        </Link>

        <Popover>
          <PopoverButton
            className="relative flex items-center hover:text-pretty-pink focus:outline-none focus:border-none"
            onClick={() => {
              setOpen((prevVal) => !prevVal);
              if (cart.length === 0) return;
              setShowCartItemNumber((prevVal) => !prevVal);
            }}
          >
            <ShoppingCartIcon className="w-8 h-8" />
            {showCartItemNumber && (
              <div className="absolute flex flex-row items-center justify-center w-5 h-5 text-sm font-semibold rounded-full -top-2 left-5 bg-pretty-pink text-mint-cream">
                {cartCount}
              </div>
            )}
          </PopoverButton>
          {open && (
            <PopoverPanel
              transition
              anchor="bottom end"
              className="divide-y divide-white/5 rounded-xl bg-smoky-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 p-3 mt-3 min-w-52 text-mint-cream border-2 border-soft-cyan"
            >
              {cart.length === 0 ? (
                <p className="text-center">No items added</p>
              ) : (
                <div className="flex flex-col gap-2">
                  <ul className="flex flex-col gap-3">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-col items-start justify-between w-full gap-2"
                      >
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{item.name}</p>
                          <p>Item price: {formatPrice(item.price)}</p>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full gap-2">
                          <div className="flex flex-row gap-2">
                            <PlusCircleIcon
                              className="w-6 h-6 text-moderate-pink"
                              onClick={() => addToCart(item.id)}
                            />
                            <span className="font-semibold text-md">
                              {item.quantity}
                            </span>
                            <MinusCircleIcon
                              className="w-6 h-6 text-moderate-pink"
                              onClick={() => removeFromCart(item.id)}
                            />
                          </div>
                          <XMarkIcon
                            className="w-6 h-6 text-pretty-pink"
                            onClick={() => removeProductFromCart(item.id)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="h-[2px] bg-soft-cyan w-full mt-2"></div>
                  <div className="flex flex-row justify-between w-full pt-2">
                    <span>Total price:</span>
                    <span className="font-semibold text-md">
                      {formatTotalPrice(cart)}
                    </span>
                  </div>
                </div>
              )}
            </PopoverPanel>
          )}
        </Popover>
      </div>
    </header>
  );
};

export default Header;
