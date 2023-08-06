import { Navigate, createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "./component/layout/layoutadmin";
import UpdateProduct from "./page/update";
import AddProduct from "./page/add";
import Home from "./page/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      {
          path: "dashboard",
          element: <Home />,
      },
      
      {
          path: "add",
          element: <AddProduct />,
      },
      {
          path: "update/:id",
          element: <UpdateProduct />,
      },
  ],
  }
]);
