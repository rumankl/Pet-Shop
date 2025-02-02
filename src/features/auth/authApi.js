// authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (query) => ({
        url: "/users/login",
        method: "POST",
        body: query,
      }),
    }),
    userSignUp: builder.mutation({
      query: (query) => ({
        url: "/users/signup",
        method: "POST",
        body: query,
      }),
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});


export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useUserLogOutMutation,
} = authApi;