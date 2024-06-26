// src/components/ProductDetail.tsx
import { FC, useEffect, useState } from "react";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { IShopItem } from "../../types/shopItem";

const ShopItemDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchProduct, addToCart } = useShopContext();
  const [product, setProduct] = useState<IShopItem | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(id!);
        setProduct(data ?? undefined);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    getProduct();
  }, [id, fetchProduct]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-bold text-md sm:text-lg md:text-2xl text-mint-cream">
            {product.name}
          </h1>
          <button
            className="flex flex-row items-center justify-center gap-2 p-2 rounded-lg bg-palatinate hover:bg-dark-purple text-mint-cream hover:text-lime-green md:gap-4 min-w-32 ld:min-w-36"
            onClick={() => addToCart(product.id)}
          >
            <ShoppingCartIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm md:text-base">Add to cart</span>
          </button>
        </div>
        <div className="flex flex-row gap-8 font-semibold text-md md:text-xl text-lime-green">
          <h2>Price:</h2>
          <span> ${product.price}</span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold md:text-lg text-moderate-pink">
            Description:
          </h3>
          <p className="text-xs md:text-base text-mint-cream">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold md:text-lg text-moderate-pink">
            Features
          </h3>
          <ul className="gap-2 pl-4 text-xs text-mint-cream md:text-base">
            {product.features.map((feature, index) => (
              <li key={index} className="flex flex-row gap-4">
                <ChevronRightIcon className="w-4 h-4 text-mint-cream" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold md:text-lg text-moderate-pink">
            Specifications
          </h3>
          <ul className="gap-2 pl-4 text-mint-cream">
            {Object.entries(product.specifications).map(
              ([key, value], index) => (
                <li
                  key={index}
                  className="flex flex-row gap-4 text-xs md:text-base"
                >
                  <span className="text-[#e09db7] font-semibold">{key}:</span>
                  {Array.isArray(value) ? value.join(", ") : value}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold md:text-lg text-moderate-pink">
            Additional Information
          </h3>
          <ul className="gap-2 pl-4 text-mint-cream">
            {Object.entries(product.additionalInformation).map(
              ([key, value], index) => (
                <li
                  key={index}
                  className="flex flex-row gap-4 text-xs md:text-base"
                >
                  <span className="text-[#e09db7] font-semibold">{key}:</span>
                  {Array.isArray(value) ? value.join(", ") : value}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopItemDetails;
