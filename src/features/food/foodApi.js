// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../data/apis";

import { appapi } from "../../app/appApi";

// export const foodApi = createApi({
//   reducerPath: "foodApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
export const foodApi = appapi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: (q) => ({
        url: "/foods",
        params: {
          search: q, // Adds search query if provided
        },
        method: "GET",
      }),
      providesTags: ["Food"], // Tag for cache invalidation
    }),

    getFoodById: builder.query({
      query: (id) => ({
        url: `/foods/${id}`,
        method: "GET",
      }),
      providesTags: ["food"],
    }),

    // Mutation to add a new product
    addFoods: builder.mutation({
      query: (q) => ({
        url: "/foods",
        body: q.body,
        method: "POST",
        // headers: {
        //   Authorization: q.token,
        // },
      }),
      invalidatesTags: ["food"],
    }),
    updateFood: builder.mutation({
      query: (q) => ({
        url: `/foods/${q.id}`,
        body: q.body,
        method: "PATCH",
        // headers: {
        //   Authorization: q.token,
        // },
      }),
      invalidatesTags: ["Food"],
    }),

    // Mutation to remove a product
    removeFood: builder.mutation({
      query: (q) => ({
        url: `/foods/${q.id}`,
        method: "DELETE",
        // headers: {
        //   Authorization: q.token,
        // },
      }),
      invalidatesTags: ["Product"],
    }),

  }),
});

export const {
  useGetAllFoodsQuery,
  useAddFoodsMutation,
  useGetFoodByIdQuery,
  useUpdateFoodMutation,
  useRemoveFoodMutation

} = foodApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../data/apis"; // Ensure baseUrl is defined

// export const foodApi = createApi({
//   reducerPath: "foodApi",
//   baseQuery: fetchBaseQuery({ baseUrl }), // Ensure baseUrl is correct
//   endpoints: (builder) => ({
//     getAllFoods: builder.query({
//       query: (q) => ({
//         url: "/foods",
//         params: {
//           search: q, // Adds search query if provided
//         },
//         method: "GET",
//       }),
//       providesTags: ["Food"], // Corrected tag for cache invalidation
//     }),

//     getFoodById: builder.query({
//       query: (id) => ({
//         url: `/foods/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["Food"],  // Corrected tag
//     }),

//     // Mutation to add a new product
//     addFoods: builder.mutation({
//       query: (q) => ({
//         url: "/foods",
//         body: q.body,
//         method: "POST",
//         headers: {
//           Authorization: q.token,
//         },
//       }),
//       invalidatesTags: ["Food"], // Corrected tag
//     }),

//     updateFood: builder.mutation({
//       query: (q) => ({
//         url: `/food/${q.id}`,  // Corrected URL for PATCH request
//         body: q.body,
//         method: "PATCH",
//         headers: {
//           Authorization: q.token,
//         },
//       }),
//       invalidatesTags: ["Food"], // Corrected tag
//     }),

//     // Mutation to remove a product
//     removeFood: builder.mutation({
//       query: (q) => ({
//         url: `/foods/${q.id}`,  // Corrected URL to remove food item
//         method: "DELETE",
//         headers: {
//           Authorization: q.token,
//         },
//       }),
//       invalidatesTags: ["Food"], // Corrected tag
//     }),

//   }),
// });

// export const {
//   useGetAllFoodsQuery,
//   useAddFoodsMutation,
//   useGetFoodByIdQuery,
//   useUpdateFoodMutation,
//   useRemoveFoodMutation
// } = foodApi;

