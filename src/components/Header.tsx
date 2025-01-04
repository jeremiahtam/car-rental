import { CiMenuFries } from "react-icons/ci";
import { FaCar, FaOpencart } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { Link, useLocation } from "react-router";
import { useAppSelector } from "../hooks/reduxHook";
import { mainMenu } from "../data/menuItems";
import { UserProfileDropDownMenu } from "./UserProfileDropDownMenu";

interface HeaderProps {
  handleSidenav: () => void;
  isSideNavOpen: boolean;
}

function Header(props: HeaderProps) {
  const carsInCart = useAppSelector((state) => state.cart.items);
  const location = useLocation();

  return (
    <div className="px-4 lg:px-0">
      <div className="container mx-auto flex justify-between py-4">
        <div className="flex flex-row items-center">
          <FaCar size={28} />
          <div className="ml-1">Car Rental</div>
        </div>
        <div className="md:flex flex-row items-center space-x-4 hidden md:visible">
          {mainMenu.map(
            (item: { name: string; link: string }, index: number) => {
              return (
                <Link
                  to={item.link}
                  className={`${
                    location.pathname === item.link
                      ? "font-bold"
                      : "font-normal"
                  } text-md text-gray-700 hover:text-yellow-400`}
                  key={index}
                >
                  {item.name}
                </Link>
              );
            }
          )}
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <Link to={""} className="text-sm font-semibold hover:underline">
              Signup
            </Link>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 ms-2 dark:focus:ring-yellow-900"
            >
              Login
            </button>
          </div>
          <div className="p-4 relative">
            <Link to={"/checkout"}>
              <FaOpencart size={22} className="text-teal-700" />
              {carsInCart.length > 0 && (
                <div className="bg-yellow-400 opacity-80 absolute left-1 top-2 w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-center text-xs">
                    {carsInCart.length}
                  </span>
                </div>
              )}
            </Link>
          </div>
          <div className="md:flex flex-row items-center hidden md:visible">
            <PiPhoneCallLight size={30} className="text-yellow-400" />
            <div className="ml-2">
              <div className="text-gray-600 font-thin text-sm">Need Help?</div>
              <Link to={"tel:+21687879736"} className="font-bold text-xs">
                +21687879736
              </Link>
            </div>
          </div>
          <UserProfileDropDownMenu />
          <div className="flex flex-row visible md:hidden ms-2 items-center">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => props.handleSidenav()}
            >
              <CiMenuFries size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
