import HomeImage1 from "../assets/images/Home-Image-1.png";
import { GoCheckCircleFill } from "react-icons/go";

function AboutMoreInfo() {
  return (
    <div className="px-4 lg:px-0 my-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-4 md:gap-24">
        <div className="space-y-5">
          <div className="text-5xl font-bold text-center md:text-left">
            Unlock unforgettable memories on the road
          </div>
          <div className="text-center md:text-left">
            Where every drive feels extraordinary
          </div>
          <div className="grid grid-cols-2 gap-y-4 columns-2">
            <div className="flex flex-row space-x-2">
              <GoCheckCircleFill size={24} className="text-purple-600" />
              <div className="text-gray-700">
                Platea non auctor fermentum sollicitudin.
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <GoCheckCircleFill size={24} className="text-purple-600" />
              <div className="text-gray-700">
                Platea non auctor fermentum sollicitudin.
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <GoCheckCircleFill size={24} className="text-purple-600" />
              <div className="text-gray-700">
                Platea non auctor fermentum sollicitudin.
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <GoCheckCircleFill size={24} className="text-purple-600" />
              <div className="text-gray-700">
                Platea non auctor fermentum sollicitudin.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="" src={HomeImage1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMoreInfo;
