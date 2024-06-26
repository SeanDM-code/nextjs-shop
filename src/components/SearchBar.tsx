"use client";

import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm"></span>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="bg-white block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
