import { createSlice } from "@reduxjs/toolkit";
import { clearFoodCartsFromLocal, getFoodCartsFromLocal, setFoodCartsToLocal } from "../hooks/local";


export const foodcartSlice = createSlice({
  name: 'foodcartSlice',
  initialState: {
    foodcarts: getFoodCartsFromLocal()
  },

  reducers: {

    setFoodCarts: (state, action) => {
      const isExist = state.foodcarts.find((foodcart) => foodcart.food === action.payload.food);

      if (isExist) {
        state.foodcarts = state.foodcarts.map((foodcart) => foodcart.food === action.payload.food ? action.payload : foodcart);
        setFoodCartsToLocal(state.foodcarts);

      } else {
        state.foodcarts.push(action.payload);
        setFoodCartsToLocal(state.foodcarts);
      }

    },


    removeFoodCart: (state, action) => {
      state.foodcarts.splice(action.payload, 1);
      setFoodCartsToLocal(state.foodcarts);
    },


    clearFoodCarts: (state, action) => {
      state.foodcarts = [];
      clearFoodCartsFromLocal();
    }


  }
});

export const { setFoodCarts, clearFoodCarts, removeFoodCart } = foodcartSlice.actions;