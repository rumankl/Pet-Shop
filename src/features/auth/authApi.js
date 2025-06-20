// authApi.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../data/apis";

import { appapi } from "../../app/appApi";

// export const authApi = createApi({
// reducerPath: "authApi",
// baseQuery: fetchBaseQuery({
//   baseUrl: baseUrl,
// }),
export const authApi = appapi.injectEndpoints({
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

    userProfile: builder.query({
      query: (token) => ({
        url: '/users/profile',
        // headers: {
        //   Authorization: token
        // }, //we dont need this because we use cookies
        method: 'GET'
      }),
      providesTags: ['User']
    }),
    updateUserProfile: builder.mutation({
      query: (q) => ({
        url: '/users/update',
        body: q.body,
        headers: {
          Authorization: q.token
        },// so this is for localstorage for token hit so we dont nedds beacuse we use cookies it give  token. so remove//
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    }),
    userLogOut: builder.mutation({
      query: (q) => ({
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
  useUserProfileQuery,
  useUpdateUserProfileMutation,
  useUserLogOutMutation
} = authApi;