"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "./productImages";
import ProductEditModal from "./ProductEditModal";

const ProductSpecifics = ({ productData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(productData);

  const imageUrls = [
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
  ];

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Opening modal", isModalOpen); // Add this line
  };

  const saveChanges = (updatedProduct: any) => {
    setProduct(updatedProduct);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const dynamicFeatures = [];
  for (const key in product.data) {
    dynamicFeatures.push({ name: key, description: product.data[key] });
  }

  return (
    <div className="bg-white p-2">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 last:gap-y-1 gap-y-16 px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-500">
            {product.data.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {dynamicFeatures.map((feature, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  {feature.name.charAt(0).toUpperCase() + feature.name.slice(1)}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ProductImages imageUrls={imageUrls} />
        <div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Edit Product
          </button>
          {isModalOpen && (
            <ProductEditModal
              productData={productData}
              closeModal={() => setIsModalOpen(false)}
              open={isModalOpen}
              saveChanges={saveChanges}
            />
          )}
        </div>
      </div>
      {/* {isEditing && <ProductEditForm product={product} />} */}
    </div>
  );
};

export default ProductSpecifics;
