import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '../features/counter/pageSlice'
import dataReducer from '../features/counter/dataSlice'

export default configureStore({
  reducer: {
    page: pageReducer,
    data: dataReducer
  }
})