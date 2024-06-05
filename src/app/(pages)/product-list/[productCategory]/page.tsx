import ProductListView from "@/views/ProductListView";
import ProductsAPI from "@/components/ProductsAPI";
import { Product } from "@/app/lib/definitions";

const ProductList = async ({ params }: any) => {
  let productsDataFromAPI: Product[] = [];
  const categoryParam = params.productCategory || "all";

  try {
    productsDataFromAPI = await ProductsAPI();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Our Products
        </h2>
        <ProductListView
          productsData={productsDataFromAPI}
          initialCategory={categoryParam}
        />
      </div>
    </div>
  );
};

export default ProductList;
