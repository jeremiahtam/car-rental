import { FaCar } from "react-icons/fa";
import { Link } from "react-router";
import { PiPhoneCallLight, PiMailboxLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

function TopFooter() {
  return (
    <div className="px-4 lg:px-0">
      <div className="container mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-row items-center mb-4">
          <FaCar size={34} />
          <div className="ml-1">Car Rental</div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <CiLocationOn size={34} className="text-yellow-500" />
          <div className="ml-2">
            <div className="text-gray-600 font-thin text-sm">Address</div>
            <Link to={"#"} className="font-bold text-xs">
              Oxford Ave. Cary, NC 27511
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <PiMailboxLight size={34} className="text-yellow-500" />
          <div className="ml-2">
            <div className="text-gray-600 font-thin text-sm">Email</div>
            <Link to={"mailto:nwiger@yahoo.com"} className="font-bold text-xs">
              nwiger@yahoo.com
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <PiPhoneCallLight size={34} className="text-yellow-500" />
          <div className="ml-2">
            <div className="text-gray-600 font-thin text-sm">Need Help?</div>
            <Link to={"tel:+21687879736"} className="font-bold text-xs">
              +21687879736
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
