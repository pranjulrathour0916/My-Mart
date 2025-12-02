import { configureStore } from '@reduxjs/toolkit'

import navReducer from './showslice'

export const store = configureStore({
  reducer: {
    navdisp : navReducer,
  },
})