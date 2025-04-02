// import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { createApi } from "@reduxjs/toolkit/query";
// import { baseUrl } from "../../data/apis";

// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseUrl,
//   }),
//   endpoints: (builder) => ({

//     getProducts: builder.query({
//       query: () => ({
//         url: '/products',
//         method: "GET",
//       }),
//       providedTags: ["Product"],
//     }),

//     getProductsById: builder.query({
//       query: (id) => ({
//         url: `/product/${id}`,
//         method: "GET"
//       }),
//       providesTags: ["Product"]
//     }),
//     getTop5: builder.query({
//       query: () => ({
//         url: '/products/top-5-products',
//         method: 'GET'
//       }),
//       providesTags: ['Product']
//     }),

//     addproduct: builder.mutation({
//       query: (q) => ({
//         url: `/products`,
//         method: "POST",
//         body: q.body,
//         headers: {
//           Authorization: q.token
//         }
//       }),
//       invalidatesTags: ["Product"],
//     }),

//     updateProduct: builder.mutation({
//       query: (q) => ({
//         url: `/products/${q.id}`,
//         body: q.body,
//         method: 'PATCH',
//         headers: {
//           Authorization: q.token
//         }
//       }),
//       invalidatesTags: ['Product']
//     }),
//     removeProduct: builder.mutation({
//       query: (q) => ({
//         url: `/products/${q.id}`,
//         method: 'DELETE',
//         headers: {
//           Authorization: q.token
//         }
//       }),
//       invalidatesTags: ['Product']
//     }),



//   })
// });
// export const {
//   useGetProductsQuery,
//   useAddproductMutation,
//   useUpdateProductMutation,
//   useGetProductsByIdQuery,
//   useGetTop5Query,
//   useRemoveProductMutation
// } = productApi;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../data/apis";


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";


export const productApi = createApi({
  reducerPath: "productApi", // Reducer path for the API
  baseQuery: fetchBaseQuery({ baseUrl }), // Base URL for API requests

  endpoints: (builder) => ({
    // Query to fetch all products
    getProducts: builder.query({
      query: (q) => ({
        url: "/products",
        params: {
          search: q, // Adds search query if provided
        },
        method: "GET",
      }),
      providesTags: ["Product"], // Tag for cache invalidation
    }),

    // Query to fetch the top 5 products
    getTop5: builder.query({
      query: () => ({
        url: "/products/top-5-products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // Query to fetch a product by its ID
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // Mutation to add a new product
    addProduct: builder.mutation({
      query: (q) => ({
        url: "/products",
        body: q.body,
        method: "POST",
        headers: {
          Authorization: q.token, // Token for authorization
        },
      }),
      invalidatesTags: ["Product"], // Invalidates cache for products
    }),

    // Mutation to update an existing product
    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        body: q.body,
        method: "PATCH",
        headers: {
          Authorization: q.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    ratingProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        body: q.body,
        method: "PATCH",
        headers: {
          Authorization: q.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),

    // Mutation to remove a product
    removeProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method: "DELETE",
        headers: {
          Authorization: q.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for queries and mutations
export const {
  useGetProductsQuery,
  useGetTop5Query,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
  useRatingProductMutation,
} = productApi;
