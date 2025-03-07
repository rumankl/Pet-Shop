import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { userSlice } from "../features/auth/userSlice";
import { cartSlice } from "../features/cart/cartSlice";
import { orderApi } from "../features/order/orderApi";
import { productApi } from "../features/products/productApi";
import { foodApi } from "../features/food/foodApi";
import { foodcartSlice } from "../foodcart/foodcartSlice";
import { foodorderApi } from "../features/foodOrder/foodorderApi";
import { messageApi } from "../features/message/messageApi";
// import { foodcartSlice } from "../foodcart/foodcartSlice";


export const store = configureStore({
  reducer: {

    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [foodcartSlice.name]: foodcartSlice.reducer,
    [foodorderApi.reducerPath]: foodorderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [foodApi.reducerPath]: foodApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware,
    orderApi.middleware,
    foodApi.middleware,
    foodorderApi.middleware,
    messageApi.middleware
  ])
});