import React from "react";
import { GiGearStickPattern } from "react-icons/gi";
import { PiSnowflakeThin } from "react-icons/pi";
import { useNavigate } from "react-router";
import { CarProps } from "../types/car-types";

interface CarCardProps extends CarProps {}

function CarCard(props: CarCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100 rounded-lg p-4">
      <div className="">
        <img className="h-full w-full" src={props.images[0]} alt="" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="font-bold text-lg">{props.brand}</div>
        <div className="font-bold text-lg text-blue-700">
          &#8358;{props.costPerMeter}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-10">
        <div className="text-sm text-gray-600">{props.model}</div>
        <div className="text-sm text-gray-600">Per meter</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row content-center items-center space-x-1">
          <GiGearStickPattern className="text-gray-600" size={16} />
          <div className="text-sm text-gray-600">
            {props.gearType}
          </div>
        </div>
        <div className="flex flex-row content-center items-center space-x-1">
          <PiSnowflakeThin className="text-gray-600" size={16} />
          <div className="text-sm text-gray-600">
            {props.airCondition
              ? "Air Conditioner"
              : "No Air Conditioner"}
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(`/our-cars/${props.id}`)}
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 mt-8 w-full dark:focus:ring-yellow-900"
      >
        View Details
      </button>
    </div>
  );
}

export default CarCard;
