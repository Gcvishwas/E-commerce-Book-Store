import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Login from "../components/Login";
import Register from "../components/Register";

import { CartPage } from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckOutPage";
import { SingleBook } from "../pages/books/SingleBook";
import OrderPage from "../pages/books/Orderpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <OrderPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/books/:id", element: <SingleBook /> },
    ],
  },
]);

export default router;
