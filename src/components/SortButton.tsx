import React from "react";

interface SortButtonProps {
  sortType: "asc" | "desc";
  currentSortOrder: string;
  onSortChange: (order: "asc" | "desc") => void;
}

const SortButton = ({
  sortType,
  currentSortOrder,
  onSortChange,
}: SortButtonProps) => {
  return (
    <button
      className={`bg-white block w-auto rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
        currentSortOrder === sortType ? "font-bold" : ""
      }`}
      onClick={() => onSortChange(sortType)}
    >
      {sortType === "asc"
        ? "Sort Price: Lowest to Highest"
        : "Sort Price: Highest to Lowest"}
    </button>
  );
};

export default SortButton;
