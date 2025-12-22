import { configureStore } from '@reduxjs/toolkit'

import navReducer from './showslice'
import productSlice from './imageslice'
import filterslice from './apislice'

export const store = configureStore({
  reducer: {
    navdisp : navReducer,
    slideDisp : productSlice,
    products : filterslice
  },
})