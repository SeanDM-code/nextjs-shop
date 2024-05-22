import Link from "next/link";
import React from "react";
import CurrencyFormatter from "@/utils/CurrencyFormatter";

const productCard = ({ cardData }: any) => {
  return (
    <Link key={cardData.id} href={`/product-detail/${cardData.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={cardData.imageSrc}
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              {cardData.name}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">
            <CurrencyFormatter
              value={
                cardData.data.price ? cardData.data.price : cardData.data.Price
              }
            />
          </p>
        </div>
        <p className="text-sm font-small text-gray-900 italic">
          {cardData.data.description}
        </p>
      </div>
    </Link>
  );
};

export default productCard;
