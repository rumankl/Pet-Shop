import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data/apis";


export const appapi = createApi({
  reducerPath: "appapi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    method: ["POST", "GET", "PUT", "DELETE"],
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  }),
  endpoints: (builder) => ({}),
})