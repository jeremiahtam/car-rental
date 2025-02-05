import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import userInfoReducer from './user/userSlice'
import adminInfoReducer from './admin/adminSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/** persistor configuration: save reducer in localStorage*/
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart']/** persist only the cart reducer */
}
/** rootReducer containing all reducers */
const rootReducer = combineReducers({
  cart: cartReducer,
  userInfo: userInfoReducer,
  adminInfo: adminInfoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch