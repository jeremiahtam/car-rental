export interface CarProps {
  id: number;
  images: string[];
  brand: string;
  model: string;
  slug: string;
  costPerMeter: number;
  waitAmountPerHour: number,
  // carSpecifications: {
  airCondition: boolean,
  gearType: string,
  seats: number,
  fuelType: string
  airbags: number
  // }
  bookedDates: string[]
}
