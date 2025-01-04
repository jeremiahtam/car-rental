import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";
import { mainMenu, userPortalMenu } from "../data/menuItems";
import { UserProfileDropDownMenu } from "./UserProfileDropDownMenu";

interface PortalHeaderProps {
  handleSidenav: () => void;
  isSideNavOpen: boolean;
}

export const PortalHeader = (props: PortalHeaderProps) => {
  return (
    <div className="px-4 border-b-[1px] border-gray-200 dark:border-gray-700 top-0 left-0 md:left-64 right-0 bg-white fixed">
      <div className="container mx-auto flex justify-between py-2">
        <div className="flex flex-row items-center"></div>
        <div>
          <div className="flex flex-row items-center">
            <UserProfileDropDownMenu/>
            <button
              type="button"
              className="md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ms-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
