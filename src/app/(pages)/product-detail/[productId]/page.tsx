"use server";

import { Product } from "@/app/lib/definitions";
import ProductEditForm from "@/components/ProductEditForm";
import ProductSpecifics from "@/components/ProductSpecifics";
import getSingleProduct from "@/components/getSingleProduct";

const ProductDetail = async ({ params }: any) => {
  let product: Product | null = null;
  const productId = params.productId;

  try {
    // product = await getSingleProduct(productId);
    product = await getSingleProduct();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
      {product ? (
        <>
          <ProductSpecifics productData={product} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
