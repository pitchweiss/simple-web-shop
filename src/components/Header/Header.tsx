import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-palatinate text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <SparklesIcon className="h-8 w-8 text-moderate-pink" />
          <h1 className="text-xl font-bold">Kwik-E-Mart</h1>
        </div>

        <div className="flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
