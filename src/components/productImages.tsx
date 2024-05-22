import React from "react";

interface ProductImagesProps {
  imageUrls: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ imageUrls }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Product image ${index + 1}`}
          className="rounded-lg bg-gray-100"
        />
      ))}
    </div>
  );
};

export default ProductImages;
