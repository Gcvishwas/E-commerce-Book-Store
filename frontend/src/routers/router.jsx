import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
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
        element: <DashhboardLayout />,
        children: [
          {
            path: "",
            element: <AdminRoute><div>Dashboard Home</div>
            </AdminRoute>
          },
          {
            path: "add-new-book",
            element: <AdminRoute><div>Add New Book</div>
            </AdminRoute>
          },
          {
            path: "edit-book/:id",
            element: <AdminRoute><div>Edit Book</div>
            </AdminRoute>
          },
          {
            path: "manage-books",
            element: <AdminRoute><div>Manage Books</div>
            </AdminRoute>
          },

        ]
      }
    ],
  },
]);

export default router;
