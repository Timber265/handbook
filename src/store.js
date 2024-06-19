import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rickApi } from './services/rickApi'
import aboutReducer from './services/aboutSlice'
export const store = configureStore({
  reducer: {
    [rickApi.reducerPath]: rickApi.reducer,
    about: aboutReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickApi.middleware),
})

setupListeners(store.dispatch)