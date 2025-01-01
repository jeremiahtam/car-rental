import { Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { cars } from "../data/cars";
import CarCard from "./CarCard";

function CarsFilter() {
  const [activeCarFilter, setActiveCarFilter] = useState("all");
  const [allCars, setAllCars] = useState(cars);
  const [displayCars, setDisplayCars] = useState(allCars);

  useEffect(() => {
    const handleFilterCar = () => {
      if (activeCarFilter !== "all") {
        console.log(activeCarFilter);
        const filteredCars = allCars.filter((newVal) => {
          return newVal.slug === activeCarFilter;
        });
        return setDisplayCars(filteredCars);
      }
      return setDisplayCars(cars);
    };
    handleFilterCar();
  }, [activeCarFilter, allCars]);

  return (
    <div className="px-4 my-12">
      <div className="container mx-auto flex flex-col md:flex-row mt-8 gap-6">
        <div className="md:basis-1/4">
          <div className="bg-white rounded-2xl px-3">
            <form className="max-w-sm mx-auto space-y-4">
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4">Choose your favorite country</legend>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <Label
                    htmlFor="united-state"
                    className="font-thin text-gray-700"
                  >
                    United States
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="germany" className="font-thin text-gray-700">
                    Germany
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="spain" className="font-thin text-gray-700">
                    Spain
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="uk" className="font-thin text-gray-700">
                    United Kingdom
                  </Label>
                </div>
              </fieldset>
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4">Cost</legend>
                <div className="relative mb-6">
                  <label htmlFor="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    value="1000"
                    min="100"
                    max="1500"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    Min ($100)
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    Max ($1500)
                  </span>
                </div>
              </fieldset>
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4">Seats</legend>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <Label
                    htmlFor="united-state"
                    className="font-thin text-gray-700"
                  >
                    3 seats
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="germany" className="font-thin text-gray-700">
                    5 seats
                  </Label>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="md:basis-3/4 md:justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayCars.map((item, index) => {
            return (
              <CarCard
                key={index}
                id={item.id}
                model={item.model}
                slug={item.slug}
                carSpecifications={item.carSpecifications}
                brand={item.brand}
                costPerMeter={item.costPerMeter}
                waitAmountPerHour={item.waitAmountPerHour}
                images={item.images}
                bookedDates={item.bookedDates}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarsFilter;
