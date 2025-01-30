import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/carts/cart";

import booksApi from "./features/books/booksapi";
import ordersApi from "./features/orders/ordersApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,

    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(booksApi.middleware),
});
