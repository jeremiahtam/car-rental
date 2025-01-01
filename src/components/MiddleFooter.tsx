import { RiTwitterXFill } from "react-icons/ri";
import { TfiInstagram } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router";

function MiddleFooter() {
  return (
    <div className="px-4 lg:px-0 mb-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <p>
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem turpis euismod. Purus at quisque integer
            sit.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 font-bold text-sm">Useful Links</p>
          <div>
            <Link to={"#"} className="text-sm">
              Home
            </Link>
          </div>
          <div>
            <Link to={"#"} className="text-sm">
              About Us
            </Link>
          </div>
          <div>
            <Link to={"#"} className="text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 font-bold text-sm">Address</p>
          <Link to={"#"} className="text-sm">
            Oxford Ave. Cary, NC 27511
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 font-bold text-sm">Socials</p>
          <div className="flex flex-row items-center space-x-3">
            <Link to={"#"} className="">
              <RiTwitterXFill size={20} className="text-black" />
            </Link>
            <Link to={"#"} className="">
              <FiFacebook size={20} className="text-black" />
            </Link>
            <Link to={"#"} className="">
              <SlSocialLinkedin size={20} className="text-black" />
            </Link>
            <Link to={"#"} className="">
              <TfiInstagram size={20} className="text-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleFooter;
