import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";


export const foodorderApi = createApi({
  reducerPath: 'foodorderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({

    getAllFoodOrders: builder.query({
      query: (token) => ({
        url: '/foodorders',
        headers: {
          Authorization: token
        },
        method: 'GET'
      }),
      providesTags: ['FoodOrder']
    }),

    getUserFoodOrders: builder.query({
      query: (token) => ({
        url: '/foodorders/users',
        headers: {
          Authorization: token
        },
        method: 'GET'
      }),
      providesTags: ['FoodOrder']
    }),


    getFoodOrderDetail: builder.query({
      query: (q) => ({
        url: `/foodorders/users/${q.id}`,
        headers: {
          Authorization: q.token
        },
        method: 'GET'
      }),
      providesTags: ['FoodOrder']
    }),

    addFoodOrder: builder.mutation({
      query: (q) => ({
        url: '/foodorders',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['FoodOrder']
    }),





  })

});
export const
  {
    useGetAllFoodOrdersQuery,
    useGetUserFoodOrdersQuery, ///yo
    useGetFoodOrderDetailQuery,
    useAddFoodOrderMutation
  } = foodorderApi

