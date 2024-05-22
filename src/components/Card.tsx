import Link from "next/link";
import React from "react";

const Card = ({ cardData }: any) => {
  return (
    <Link
      key={cardData.name}
      href={`/product-list/${cardData.name.toLocaleLowerCase()}`}
    >
      <div className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            src={cardData.imageSrc}
            alt={cardData.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className=" text-base font-semibold text-indigo-600">
          <span className="absolute inset-0" />
          {cardData.name}
        </h3>
        <p className="mt-2 mb-4 text-sm text-gray-900">
          {cardData.description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
