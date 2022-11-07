import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '../features/counter/pageSlice'
import dataReducer from '../features/counter/dataSlice'
import themeReducer from '../features/counter/themeSlice'

export default configureStore({
  reducer: {
    page: pageReducer,
    data: dataReducer,
    theme: themeReducer
  }
})