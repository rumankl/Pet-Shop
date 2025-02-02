import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/auth/userSlice";
import { authApi } from "../features/auth/authApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.name]: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware])
});