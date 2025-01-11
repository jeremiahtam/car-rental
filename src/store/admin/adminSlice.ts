import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAdmin } from '../../api/adminApi'

/** custom action to clear all store data */
export const revertAll = createAction('CLEAR_ALL_DATA')

interface AdminStateType {
  name: string, email: string, profilePic: string
}

interface AdminInfoStateType {
  admin: null | AdminStateType
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  active: boolean
  errorMessage?: string
}

const initialState: AdminInfoStateType = {
  admin: null,
  status: 'idle',
  active: false,
  errorMessage: ''
}

const adminInfoSlice = createSlice({
  name: 'adminInfo',
  initialState,
  reducers: {
    /** insert admin data to localStorage when logged in */
    saveAdminToken(state, action) {
      const jsonValue = action.payload// JSON.stringify(data)
      localStorage.setItem('2ax', jsonValue)
    },
    deleteAdminToken(state) {
      localStorage.removeItem('2ax')
      state.admin = null
      state.active = false
    },
    updateAdminActiveAccount(state, action: PayloadAction<typeof initialState.active>) {
      state.active = action.payload
    },
    updateProfilePic(state, action: PayloadAction<AdminStateType>) {
      if (state.admin) {
        state.admin.profilePic = action.payload.profilePic
      }
    }
  },
  // Create extraReducer, that would wourk on calling the purge after an action
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => {
      return initialState
    })
      .addCase(fetchAdmin.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.active = true
        state.admin = action.payload
      })
      .addCase(fetchAdmin.rejected, (state, action) => {
        state.status = 'failed'
        state.errorMessage = action.error.message ?? 'Unknown Error'
      })
  }
})

export const { saveAdminToken, deleteAdminToken, updateAdminActiveAccount, updateProfilePic } = adminInfoSlice.actions
export default adminInfoSlice.reducer