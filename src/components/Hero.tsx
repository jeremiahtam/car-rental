import GenericCar3 from "../assets/images/GenericCar3.png";

function Hero() {
  return (
    <div className="px-4 lg:px-0">
      <div className="container mx-auto flex flex-row rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 p-16 space-x-11">
        <div className="md:w-3/5 my-10">
          <div className="text-white text-6xl mb-2 bg-[url('assets/images/SkeedMarks.png')] bg-no-repeat">
            Experience the road like never before
          </div>
          <div className="text-gray-200 text-xl my-8">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </div>
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            View Our Cars
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${GenericCar3})` }}
          className={`md:w-2/5 bg-no-repeat bg-contain bg-center`}
        >
          {/* <div className="bg-white rounded-2xl px-3 py-5 my-5">
          <div className="font-medium text-lg text-center">Book your car</div>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            >
              <option>Lexus</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 w-full dark:focus:ring-yellow-900"
            >
              View Our Cars
            </button>
          </form>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
