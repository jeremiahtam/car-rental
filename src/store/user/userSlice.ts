import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'
/** custom action to clear all store data */
export const revertAll = createAction('CLEAR_ALL_DATA')


interface UserStateType {
  user: null | { name: string, email: string, profilePic: string }
}

const initialState: UserStateType = {
  user: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadUser(state, action: PayloadAction) {

    },
    insertUser(state, action) {

    },
    deleteUser(state) {

    },
    updateProfilePic(state) {

    }
  },
  // Create extraReducer, that would wourk on calling the purge after an action
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.user = initialState.user;
    });
    builder.addCase(revertAll, () => {
      return initialState
    })
  }
})

export const { loadUser, insertUser, deleteUser, updateProfilePic } = cartSlice.actions
export default cartSlice.reducer