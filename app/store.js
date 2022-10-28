import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '../features/counter/pageSlice'

export default configureStore({
  reducer: {
    page: pageReducer
  }
})