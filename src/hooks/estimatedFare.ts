import moment from 'moment'

export const estimatedFare = (distance: number, rate: number) => {
  const costPerMetre: number = rate
  const fare = costPerMetre * distance
  return fare
}

export const amountPerWaitingDay = (pickupDate: Date, returningDate: null | Date, waitAmountPerHour: number): number => {
  const startDate = moment(pickupDate);
  let endDate;
  if (returningDate == null) {
    endDate = startDate
  } else {
    endDate = moment(returningDate);
  }
  const numberOfHours = endDate.diff(startDate, 'hours')
  const waitingPrice = numberOfHours * waitAmountPerHour
  return waitingPrice
}
