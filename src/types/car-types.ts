export interface CarProps {
  sn?: number
  id: number
  images: string[]
  brand: string
  model: string
  slug: string
  costPerMeter: number
  waitAmountPerHour: number
  airCondition: boolean
  gearType: string
  fuelType: string
  seats: number
  airbags: number
  bookedDates: string[]
  date?: Date
  time?: Date
}
