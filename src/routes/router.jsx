import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddAToy from "../pages/AddAToy";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-toys",
    element: <AllToys />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-toys",
    element: <MyToys />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-a-toy",
    element: <AddAToy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
