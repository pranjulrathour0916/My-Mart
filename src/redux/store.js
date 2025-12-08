import { configureStore } from '@reduxjs/toolkit'

import navReducer from './showslice'
import productSlice from './imageslice'

export const store = configureStore({
  reducer: {
    navdisp : navReducer,
    slideDisp : productSlice
  },
})