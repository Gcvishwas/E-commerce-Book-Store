import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Login from "../components/Login";
import Register from "../components/Register";

import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import OrderPage from "../pages/books/Orderpage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashhboardLayout from "../pages/dashboard/DashhboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";

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
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />{" "}
          </PrivateRoute>
        ),
      },
      { path: "/books/:id", element: <SingleBook /> },
      {
        path: "/admin",
        element: <AdminLogin />
      },
      {
        path: "/dashboard",
        element: <AdminRoute>
          <DashhboardLayout />
        </AdminRoute>,
        children: [
          {
            path: "",
            element: <AdminRoute><Dashboard />
            </AdminRoute>
          },
          {
            path: "add-new-book",
            element: <AdminRoute><AddBook />
            </AdminRoute>
          },
          {
            path: "edit-book/:id",
            element: <AdminRoute><UpdateBook />
            </AdminRoute>
          },
          {
            path: "manage-books",
            element: <AdminRoute><ManageBooks />
            </AdminRoute>
          },

        ]
      }
    ],
  },
]);

export default router;
