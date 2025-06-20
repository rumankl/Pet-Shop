import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data/apis";


// export const appapi = createApi({
//   reducerPath: "appapi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseUrl,
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   }),
//   endpoints: (builder) => ({}),
// })
export const appapi = createApi({
  reducerPath: "appapi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",  // This is crucial for sending cookies
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userSlice?.user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  endpoints: (builder) => ({}),
});

