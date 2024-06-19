import { createSlice } from '@reduxjs/toolkit'

export const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    url: 'null',
    episodes: [],
  },
  reducers: {
    addInfoCharacter: (state, action) => {
      state.url = action.payload
    },
    addInfoEpisodes: (state, action) => {
      state.episodes = action.payload
    }
  },
})

export const { addInfoCharacter, addInfoEpisodes } = aboutSlice.actions

export default aboutSlice.reducer