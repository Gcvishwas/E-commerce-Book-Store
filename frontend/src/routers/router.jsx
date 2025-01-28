import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Login from "../components/Login";
import Recommended from "../pages/Home/Recommended";
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
        element: <h1>Orders</h1>,
      },
      {
        path: "/register",
        element: <h1>Register</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
