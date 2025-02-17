import { createSlice } from "@reduxjs/toolkit";
import { clearCartsFromLocal, getCartsFromLocal, setCartsToLocal } from "../../hooks/local";




export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },

  reducers: {

    setCarts: (state, action) => {
      const isExist = state.carts.find((cart) => cart.product === action.payload.product);

      if (isExist) {
        state.carts = state.carts.map((cart) => cart.product === action.payload.product ? action.payload : cart);
        setCartsToLocal(state.carts);

      } else {
        state.carts.push(action.payload);
        setCartsToLocal(state.carts);
      }

    },


    removeCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCartsToLocal(state.carts);
    },


    clearCarts: (state, action) => {
      state.carts = [];
      clearCartsFromLocal();
    }


  }
});

export const { setCarts, clearCarts, removeCart } = cartSlice.actions;