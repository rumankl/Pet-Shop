import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data/apis";


export const appapi = createApi({
  reducerPath: "appapi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
    method: ["POST", "GET", "PUT", "DELETE"],
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }),
  endpoints: (builder) => ({}),
})