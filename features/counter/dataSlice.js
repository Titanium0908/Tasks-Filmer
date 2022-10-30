import { createSlice } from '@reduxjs/toolkit'
import data from '../../temp/data.json'

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
      films: data
    },
    reducers: {
    }
})
export default dataSlice.reducer