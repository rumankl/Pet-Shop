import { createSlice } from "@reduxjs/toolkit";
import { clearUser, getUserFromLocal, setUserToLocal } from "../../hooks/local";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: getUserFromLocal()
  },
  reducers: {
    userAdd: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    },
    userLogOut: (state, action) => {
      state.user = null;
      clearUser();
    }
  }
})
export const { userAdd, userLogOut } = userSlice.actions;