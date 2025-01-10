import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUser } from '../../api/userApi'

/** custom action to clear all store data */
export const revertAll = createAction('CLEAR_ALL_DATA')

interface UserStateType {
  name: string, email: string, profilePic: string
}

interface UserInfoStateType {
  user: null | UserStateType
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  active: boolean
  errorMessage?: string
}

const initialState: UserInfoStateType = {
  user: null,
  status: 'idle',
  active: false,
  errorMessage: ''
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    /** insert user data to localStorage when logged in */
    saveUserToken(state, action: PayloadAction<UserStateType>) {
      const jsonValue = action.payload// JSON.stringify(data)
      localStorage.setItem('1ux', JSON.stringify(jsonValue))
      state.user = jsonValue
      state.active = true
    },
    deleteUserToken(state) {
      localStorage.removeItem('1ux')
      state.user = null
      state.active = false
    },
    updateProfilePic(state, action: PayloadAction<UserStateType>) {
      if (state.user) {
        state.user.profilePic = action.payload.profilePic
      }
    }
  },
  // Create extraReducer, that would wourk on calling the purge after an action
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => {
      return initialState
    })
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.active = true
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.errorMessage = action.error.message ?? 'Unknown Error'
      })
  }
})

export const { saveUserToken, deleteUserToken } = userInfoSlice.actions
export default userInfoSlice.reducer