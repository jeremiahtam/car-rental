import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const PaginationComponent = () => {
  return (
    <div className="flex my-2">
      <a
        href="/#"
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <BsArrowLeftShort />
        Previous
      </a>
      <a
        href="/#"
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
        <BsArrowRightShort />
      </a>
    </div>
  );
};
