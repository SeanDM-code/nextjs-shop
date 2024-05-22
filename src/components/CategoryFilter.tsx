"use client";

import React from "react";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: any) => {
  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="relative mt-2 ml-4 rounded-md shadow-sm">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="bg-white block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="all">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="earphones">Earphones</option>
        <option value="smartwatches">Smartwatches</option>
        <option value="tablets">Tablets</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
