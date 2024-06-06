import { Product } from "@/app/lib/definitions";
import React from "react";

// const getSingleProduct = async () => {
//   const response = await fetch(
//     `https://mocki.io/v1/a634f75a-f04a-4d08-8a53-e53dee0c6182`
//   );
const getSingleProduct = async (productId: string) => {
  const response = await fetch(
    `https://api.restful-api.dev/objects/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const item = await response.json();

  const modifiedData: Product = {
    ...item,
    imageSrc:
      "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RvbmljJTIwcHJvZHVjdHN8fDB8fDB8fHww",
    data: {
      ...item.data,
      price:
        item.data && (item.data.price || item.data.Price)
          ? item.data.price
          : "100.00 $",
      Description:
        item.data && item.data.Description
          ? item.data.Description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  };
  return modifiedData;
};
export default getSingleProduct;
