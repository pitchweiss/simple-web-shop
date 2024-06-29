import { FC, memo } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface IDetailList {
  items: [string, string][];
  isSpecifications?: boolean;
}

const DetailList: FC<IDetailList> = memo(
  ({ items, isSpecifications = false }) => (
    <ul className="gap-2 pl-4 text-mint-cream">
      {items.map(([key, value], index) => (
        <li
          key={`${key}-${index}`}
          className="flex flex-row gap-4 text-xs md:text-base"
        >
          {isSpecifications && (
            <span className="text-[#e09db7] font-semibold">{key}:</span>
          )}
          {!isSpecifications && (
            <ChevronRightIcon className="w-4 h-4 text-mint-cream" />
          )}
          <span>{Array.isArray(value) ? value.join(", ") : value}</span>
        </li>
      ))}
    </ul>
  )
);

export default DetailList;
