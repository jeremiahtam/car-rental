import { CustomFlowbiteTheme, Drawer } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router";
import { mainMenu } from "../data/menuItems";
import { FaCar } from "react-icons/fa";

interface SidebarNavProps {
  handleSidenav: () => void;
  isSideNavOpen: boolean;
}
const customTheme: CustomFlowbiteTheme["drawer"] = {
  root: {
    backdrop:
      "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80 block md:hidden",
    base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800 transition duration-150 ease-out block md:hidden",
  },
};

export function SidebarNav(props: SidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      open={props.isSideNavOpen}
      onClose={props.handleSidenav}
      theme={customTheme}
      position="left"
      className="justify-between flex flex-col"
    >
      <div>
        <div className="flex flex-row items-center">
          <FaCar size={28} />
          <div className="ml-1">Car Rental</div>
        </div>
        <div className="w-full border-solid border-b-[1px] border-gray-200 my-1"></div>
        <ul className="space-y-4 mt-4">
          {mainMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`${
                    location.pathname === item.link
                      ? "font-bold"
                      : "font-normal"
                  } text-md text-gray-700 hover:text-yellow-400`}
                >
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-3 px-2">
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="w-full text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center ms-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
          <div className="w-full border-solid border-b-[1px] border-gray-200"></div>
          <button
            type="button"
            className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 ms-2 dark:focus:ring-yellow-900"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default SidebarNav;
