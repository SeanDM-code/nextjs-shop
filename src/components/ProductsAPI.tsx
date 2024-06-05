import React from "react";

const ProductsAPI = async () => {
  try {
    // Disable SSL validation (for local development only)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const res = await fetch(
      `https://mocki.io/v1/e383bff8-3cf7-4141-8e75-e2b9547d9f25`
    );
    const data = await res.json();
    console.log(data);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default ProductsAPI;
