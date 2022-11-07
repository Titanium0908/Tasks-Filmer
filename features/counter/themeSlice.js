import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDark: false
    },
    reducers: {
        setTheme: state => {
          state.isDark = !state.isDark
          alert(state.isDark)
        },
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer