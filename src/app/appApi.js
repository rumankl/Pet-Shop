import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data/apis";


export const appapi = createApi({
  reducerPath: "appapi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  }),
  endpoints: (builder) => ({}),
})