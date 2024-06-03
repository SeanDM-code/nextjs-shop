"use client";
import ProductCard from "@/components/productCard";
import SearchAndFilterView from "@/views/SearchAndFilterView";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/lib/definitions";

const ProductList = ({ params }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const categoryParam = params.productCategory || "all";

  useEffect(() => {
    if (categoryParam !== "all") {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  //Filtering logic for search query and category later sorted for price in ascending order by default
  const filteredProducts: Product[] = products
    .filter((product) => {
      const matchesSearchQuery = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSelectedCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearchQuery && matchesSelectedCategory;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.data.price - b.data.price
        : b.data.price - a.data.price
    );

  useEffect(() => {
    fetch("https://mocki.io/v1/e383bff8-3cf7-4141-8e75-e2b9547d9f25")
      .then((res) => res.json())
      .then((product) => {
        const modifiedData: Product[] = product.map((item: any) => {
          const categoryMapping: { [key: string]: string } = {
            ipad: "tablets",
            watch: "smartwatches",
            iphone: "smartphones",
            pixel: "smartphones",
            galaxy: "smartphones",
            air: "earphones",
            beats: "earphones",
            book: "laptops",
          };

          const imageMapping: { [key: string]: string } = {
            tablets:
              "https://plus.unsplash.com/premium_photo-1680371834158-35037f8e55d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHx0YWJsZXR8ZW58MHx8MHx8fDA%3D",
            smartwatches:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnR3YXRjaGVzfGVufDB8fDB8fHww",
            smartphones:
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnRwaG9uZXN8ZW58MHx8MHx8fHw%3D",
            earphones:
              "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
            laptops:
              "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wc3xlbnwwfHwwfHw%3D",
            Other:
              "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pYyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
          };

          const findCategory = (itemName: string) => {
            for (const keyword in categoryMapping) {
              if (itemName.toLowerCase().includes(keyword)) {
                return categoryMapping[keyword];
              }
            }
            return "Other";
          };

          const category = findCategory(item.name);

          return {
            ...item,
            category: category,
            imageSrc: imageMapping[category],
            data: {
              ...item.data,
              price:
                item.data &&
                (parseFloat(item.data.price) || parseFloat(item.data.Price))
                  ? item.data.price || item.data.Price
                  : 100,
              description:
                item.data && item.data.Description
                  ? item.data.Description
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          };
        });

        setProducts(modifiedData);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Our Products
        </h2>
        <SearchAndFilterView
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          currentSortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard cardData={product} key={product.id}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
