import { useEffect, useState } from "react";
import BottomFooter from "../components/BottomFooter";
import MiddleFooter from "../components/MiddleFooter";
import TopFooter from "../components/TopFooter";
import Header from "../components/Header";
import { useParams } from "react-router";
import PageSubHeadingWithLink from "../components/PageSubHeadingWithLink";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import SidebarNav from "../components/SidebarNav";
import { CarProps } from "../types/car-types";
import { TbAirConditioning, TbAutomaticGearbox } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { PiSeatThin } from "react-icons/pi";
import { GiCarSeat } from "react-icons/gi";
import { BookCarForm } from "../components/BookCarForm";

function CarDetails() {
  let { carId } = useParams();

  /** sidebar control */
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  /** Get car info using carId */
  const [carInfo, setCarInfo] = useState<CarProps | null>(null);

  /** car picture cgallery */
  const [picToView, setPicToView] = useState(carInfo?.images[0]);

  useEffect(() => {
    const getCarHandler = () => {
      const myPromise = new Promise((resolve, reject) => {
        const car = cars.find((item) => item.id === Number(carId));
        resolve(car);
      });
      myPromise.then((carVal: any) => {
        setCarInfo(carVal);
      });
    };
    getCarHandler();
  }, [carId]);

  useEffect(() => {
    if (carInfo?.images.length !== 0) {
      setPicToView(carInfo?.images[0]);
    }
  }, [carInfo]);

  return (
    <div>
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <div className="container px-4 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 space-x-4 my-8">
        <div className="mb-20">
          {carInfo && (
            <div className="font-extrabold text-3xl">{carInfo?.brand}</div>
          )}
          <div className="flex flex-row items-center">
            {carInfo && (
              <span className="text-purple-600 font-bold text-3xl">
                &#8358;{carInfo.costPerMeter}
              </span>
            )}
            {carInfo && <span className="">/meter</span>}
          </div>
          <div className="flex items-center mb-4 p-4">
            {carInfo && <img src={picToView} alt="" className="w-full h-96" />}
          </div>
          <div className="flex flex-row columns-3 space-x-3">
            {carInfo?.images &&
              carInfo.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`p-2 w-24 h-20 ${
                      item === picToView
                        ? "ring-2 ring-purple-700"
                        : "hover:ring-2 hover:ring-gray-300"
                    } rounded-md justify-center align-middle flex hover:bg-slate-100 `}
                  >
                    <img
                      src={item}
                      alt=""
                      onClick={() => setPicToView(item)}
                      key={index}
                      className={`rounded-md`}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-2xl mb-6">
            Technical Specification
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {carInfo && (
              <>
                <div className="bg-slate-100 hover:bg-slate-200 rounded-md p-6">
                  <TbAutomaticGearbox size={24} className="text-pink-500" />
                  <div className="font-semibold">Gear Type</div>
                  <div className="text-gray-700">{carInfo?.gearType}</div>
                </div>
                <div className="bg-slate-100 hover:bg-slate-200 rounded-md p-6">
                  <LuFuel size={24} className="text-pink-500" />
                  <div className="font-semibold">Fuel Type</div>
                  <div className="text-gray-700">{carInfo?.fuelType}</div>
                </div>
                <div className="bg-slate-100 hover:bg-slate-200 rounded-md p-6">
                  <PiSeatThin size={24} className="text-pink-500" />
                  <div className="font-semibold">Number of seats</div>
                  <div className="text-gray-700 text-wrap">
                    {carInfo?.seats}
                  </div>
                </div>
                <div className="bg-slate-100 hover:bg-slate-200 rounded-md p-6">
                  <TbAirConditioning size={24} className="text-pink-500" />
                  <div className="font-semibold">Airconditioner</div>
                  <div className="text-gray-700">
                    {carInfo?.airCondition ? "Available" : "Not vailable"}
                  </div>
                </div>
                <div className="bg-slate-100 hover:bg-slate-200 rounded-md p-6">
                  <GiCarSeat size={24} className="text-pink-500" />
                  <div className="font-semibold">Air Bags</div>
                  <div className="text-gray-700">{carInfo?.airbags}</div>
                </div>
              </>
            )}
          </div>
          <div className="mt-6">
            {carInfo && <BookCarForm carInfo={carInfo} />}
          </div>
        </div>
      </div>
      <PageSubHeadingWithLink
        titlLink="see more"
        titlLinkURL="/"
        title="More Cars"
      />
      <div className="container px-4 lg:px-0 mx-auto grid md:justify-between my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cars
          .filter((item) => item.id !== Number(carId))
          .map((item, index) => {
            return (
              <CarCard
                key={index}
                id={item.id}
                model={item.model}
                slug={item.slug}
                airCondition={item.airCondition}
                airbags={item.airbags}
                fuelType={item.fuelType}
                gearType={item.gearType}
                seats={item.seats}
                brand={item.brand}
                costPerMeter={item.costPerMeter}
                waitAmountPerHour={item.waitAmountPerHour}
                images={item.images}
                bookedDates={item.bookedDates}
              />
            );
          })}
      </div>
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default CarDetails;
