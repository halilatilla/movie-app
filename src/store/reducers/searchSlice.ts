import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm: 'pokemon',
  type: 'movie',
  year: '',
  randomTerm: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
    setYear: (state, action) => {
      state.year = action.payload
    },
    setRandomTerm: (state, action) => {
      state.randomTerm = action.payload
    },
  },
})

export default searchSlice.reducer
export const { setSearchTerm, setType, setYear, setRandomTerm } = searchSlice.actions
