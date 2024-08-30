import { configureStore } from '@reduxjs/toolkit'
import foodTrucksReducer from './foodTrucksSlice'

export const store = configureStore({
  reducer: {
    foodTrucks: foodTrucksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
