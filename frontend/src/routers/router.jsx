import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";

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
    ],
  },
]);

export default router;
