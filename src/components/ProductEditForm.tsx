"use client";
import React, { useState } from "react";
import { Product } from "@/app/lib/definitions";

interface ProductEditFormProps {
  product: Product;
}

const ProductEditForm: React.FC<ProductEditFormProps> = ({ product }) => {
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the edited product data
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      data: {
        ...prevProduct.data,
        [name]: value,
      },
    }));
  };

  const dynamicFeatures = Object.entries(editedProduct.data);

  return (
    <form onSubmit={handleSubmit}>
      {dynamicFeatures.map(([name, description]) => (
        <div key={name}>
          <label htmlFor={name}>{name}</label>
          <input
            type="text"
            id={name}
            name={name}
            value={description}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProductEditForm;
