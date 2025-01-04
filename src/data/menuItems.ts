import { LuCar } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { PiBookOpenTextThin } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { TfiInfoAlt } from "react-icons/tfi";
import { MdOutlineContactSupport } from "react-icons/md";

export const mainMenu = [
  { name: "Home", link: "/", icon: RiHome2Line },
  { name: "About", link: "/about", icon: TfiInfoAlt },
  { name: "Our Cars", link: "/our-cars", icon: LuCar },
  { name: "Contact Us", link: "/contact-us", icon: MdOutlineContactSupport },
];

export const userPortalMenu = [
  { name: "Bookings", link: "/dashboard/bookings", icon: PiBookOpenTextThin },
  { name: "Settings", link: "/dashboard/settings", icon: BsGear },
];