import { FaCar } from "react-icons/fa";
import { Link } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { mainMenu, userPortalMenu } from "../data/menuItems";

interface PortalSidebarNavProps {
  // handleSidenav: () => void;
  // isSideNavOpen: boolean;
}

export const PortalSidebarNav = (props: PortalSidebarNavProps) => {
  return (
    <aside
      id="default-sidebar"
      className={`md:w-64 hidden md:block fixed bottom-0 top-0 left-0`}
      aria-label="Sidebar"
    >
      <div className="h-full py-3 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
        <div className="overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li className="border-b-[1px] border-gray-200 dark:border-gray-700 ">
              <Link
                to={""}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaCar size={28} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li className="px-3 my-3 text-sm text-gray-400">Menu</li>
            {userPortalMenu.map((item, index) => {
              const Icon = item.icon;
              return (
                <li className="px-3" key={index}>
                  <Link
                    to={item.link}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Icon size={18} className="" />
                    <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="px-3 my-3 text-sm text-gray-400">Main Menu</li>
            {mainMenu
              .filter((item) => item.name !== "Home")
              .map((item, index) => {
                const Icon = item.icon;
                return (
                  <li className="px-3" key={index}>
                    <Link
                      to={item.link}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <Icon size={18} className="" />
                      <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="bottom-0 left-0 border-t-[1px] border-gray-100 border-solid p-2 w-full">
          <Link
            to={""}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="flex-1 ms-3 whitespace-nowrap text-sm">
              Logout
            </span>
            <IoIosLogOut size={18} className="" />
          </Link>
        </div>
      </div>
    </aside>
  );
};
