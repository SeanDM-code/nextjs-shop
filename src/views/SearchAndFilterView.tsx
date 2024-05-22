import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import SortButton from "@/components/SortButton";
import React from "react";

const SearchAndFilterView = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  currentSortOrder,
  onSortChange,
}: any) => {
  return (
    <div className="flex justify-center w-auto">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="relative mt-2 ml-4 rounded-md shadow-sm flex gap-4">
        <SortButton
          currentSortOrder={currentSortOrder}
          onSortChange={onSortChange}
          sortType="asc"
        ></SortButton>
        <SortButton
          currentSortOrder={currentSortOrder}
          onSortChange={onSortChange}
          sortType="desc"
        ></SortButton>
      </div>
    </div>
  );
};

export default SearchAndFilterView;
