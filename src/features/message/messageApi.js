// authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({

    createMessage: builder.mutation({
      query: (query) => ({
        url: "/messages/message",
        method: "POST",
        body: query,
      }),
    }),
    getAllMessages: builder.query({
      query: (q) => ({
        url: "/messages/message",
        params: {
          search: q, // Adds search query if provided
        },
        method: "GET",
      }),
      providesTags: ["Message"], // Tag for cache invalidation
    }),

    getMessageDetail: builder.query({
      query: (q) => ({
        url: `/messages/${q.id}`,

        method: 'GET'
      }),
      providesTags: ['Message']
    }),
    removeMessage: builder.mutation({
      query: (q) => ({
        url: `/messages/${q.id}`,
        method: 'DELETE',
        // headers: {
        //   Authorization: q.token
        // }
      }),
      invalidatesTags: ['Message']
    }),



  }),
});

export const {
  useCreateMessageMutation,
  useGetAllMessagesQuery,
  useGetMessageDetailQuery,
  useRemoveMessageMutation
} = messageApi;
