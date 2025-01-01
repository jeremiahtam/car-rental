import { FaQuoteLeft } from "react-icons/fa";
import Customer from "../assets/images/Customer.png";

function Reviews() {
  return (
    <div className="px-4 my-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-4 md:gap-24">
        <div className="flex flex-col items-center w-full rounded-3xl overflow-hidden">
          <div className="flex flex-col py-16 px-10 w-full bg-slate-100">
            <FaQuoteLeft className="text-purple-600 mb-4" size={40} />
            <div className="text-center">
              Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In
              gravida neque
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-500 w-full px-10 pt-8 pb-5 relative">
            <img src={Customer} alt="" className="w-10 h-10 -top-3 absolute" />
            <div className="text-gray-200 text-sm">HAAG LLC</div>
            <div className="text-white">Mariam Tuna</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full rounded-3xl overflow-hidden">
          <div className="flex flex-col py-16 px-10 w-full bg-slate-100">
            <FaQuoteLeft className="text-purple-600 mb-4" size={40} />
            <div className="text-center">
              Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In
              gravida neque
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-500 w-full px-10 pt-8 pb-5 relative">
            <img src={Customer} alt="" className="w-10 h-10 -top-3 absolute" />
            <div className="text-gray-200 text-sm">HAAG LLC</div>
            <div className="text-white">Mariam Tuna</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full rounded-3xl overflow-hidden">
          <div className="flex flex-col py-16 px-10 w-full bg-slate-100">
            <FaQuoteLeft className="text-purple-600 mb-4" size={40} />
            <div className="text-center">
              Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In
              gravida neque
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-500 w-full px-10 pt-8 pb-5 relative">
            <img src={Customer} alt="" className="w-10 h-10 -top-3 absolute" />
            <div className="text-gray-200 text-sm">HAAG LLC</div>
            <div className="text-white">Mariam Tuna</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
