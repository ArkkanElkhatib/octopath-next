import { configureStore } from '@reduxjs/toolkit'
import travelersReducer from './travelers'

export const store = configureStore({
  reducer: {
    travelers: travelersReducer
  }
})

export type IRootState = ReturnType<typeof store.getState>
