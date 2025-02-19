import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
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

    getFoodsById: builder.query({
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
        headers: {
          Authorization: q.token,
        },
      }),
      invalidatesTags: ["food"],
    }),

  }),
});

export const {
  useGetAllFoodsQuery,
  useAddFoodsMutation,
  useGetFoodsByIdQuery,

} = foodApi;
