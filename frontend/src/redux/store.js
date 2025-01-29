import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/carts/cart"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi,reducerPath]:booksApi.reducer,
    [ordersApi,reducerPath]:orderApi.reducer,
  },
});
