import React from "react";
import { CiMenuFries } from "react-icons/ci";

interface PortalHeaderProps {
  handleSidenav: () => void;
  isSideNavOpen: boolean;
}

export const PortalHeader = (props: PortalHeaderProps) => {
  return (
    <div className="px-4 lg:px-0">
      <div className="container mx-auto flex justify-between py-2 ">
        <div className="flex flex-row items-center">
        </div>
        <div>
          <div className="flex flex-row items-center">
            <button
              type="button"
              className="md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => props.handleSidenav()}
            >
              <CiMenuFries />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
