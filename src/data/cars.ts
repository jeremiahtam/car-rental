import { SiFord, SiJeep, SiMercedes } from "react-icons/si";
import GenericCar from "../assets/images/GenericCar.png";
import GenericCar2 from "../assets/images/GenericCar2.png";
import GenericCar3 from "../assets/images/GenericCar3.png";
import { FaCar } from "react-icons/fa";
import { CarProps } from "../types/car-types";

export const cars: CarProps[] = [
  {
    id: 1,
    brand: "Mercedes",
    model: "Sedan",
    slug: "mercedes",
    images: [GenericCar, GenericCar2],
    costPerMeter: 0.76,
    waitAmountPerHour: 1200,
    carSpecifications: {
      airCondition: true,
      gearType: "Automatic",
      seats: 4,
      fuelType: "Diesel",
      airbags: 2
    },
    bookedDates: []
  },
  {
    id: 2,
    brand: "Jeep",
    model: "Sedan",
    slug: "jeep",
    images: [GenericCar, GenericCar3],
    costPerMeter: 0.8,
    waitAmountPerHour: 1500,
    carSpecifications: {
      airCondition: true,
      gearType: "Automatic",
      seats: 4,
      fuelType: "Diesel",
      airbags: 2
    },
    bookedDates: []
  },
  {
    id: 3,
    brand: "Ford",
    model: "Sedan",
    slug: "ford",
    images: [GenericCar, GenericCar2, GenericCar3],
    costPerMeter: 0.78,
    waitAmountPerHour: 800,
    carSpecifications: {
      airCondition: true,
      gearType: "Automatic",
      seats: 4,
      fuelType: "Diesel",
      airbags: 2
    },
    bookedDates: []
  },
];

export const carBrandFilterList = [
  {
    name: "All",
    slug: "all",
    icon: FaCar,
  },
  {
    name: "Jeep",
    slug: "jeep",
    icon: SiJeep,
  },
  {
    name: "Ford",
    slug: "ford",
    icon: SiFord,
  },
  {
    name: "Mercedes",
    slug: "mercedes",
    icon: SiMercedes,
  },
];