import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CarProps } from '../../types/car-types'
import { PURGE } from 'redux-persist'
/** custom action to clear all store data */
export const revertAll = createAction('CLEAR_ALL_DATA')

export type CarInCartProps = CarProps & {
  pickupLocation: string
  dropOffLocation: string
  pickupDate: string
  roundTrip: boolean
  returnTripDate: string | null
  totalCost: number
}

interface CartStateType {
  items: CarInCartProps[]
  totalAmount: number
}

const initialState: CartStateType = {
  items: [],
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<CarInCartProps>) {
      const findCar = state.items.find((car) => car.id === action.payload.id)
      if (!findCar) {
        state.items.push(action.payload)
      }
      cartSlice.caseReducers.handleTotalCost(state)
    },
    removeCar(state, action) {
      const newCars = state.items.filter((car) => car.id !== action.payload)
      state.items = newCars
      cartSlice.caseReducers.handleTotalCost(state)
    },
    handleTotalCost(state) {
      let total = 0;
      for (var i = 0; i < state.items.length; i++) {
        const carFare = state.items[i].totalCost;
        total = total + carFare
      }
      state.totalAmount = total
    }
  },
  extraReducers: (builder) => {
    // Create extraReducer, that would wourk on calling the purge after an action
    builder.addCase(PURGE, (state) => {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
    });
    builder.addCase(revertAll, () => {
      return initialState
    })
  }
})

export const { addCar, removeCar, handleTotalCost } = cartSlice.actions
export default cartSlice.reducer