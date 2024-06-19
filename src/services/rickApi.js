import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getRickApi: builder.query({
      query: (name) => name,
    }),
  }),
})

export const { useGetRickApiQuery } = rickApi