import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddAToy from "../pages/AddAToy";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/all-toys",
    element: <AllToys />,
  },
  {
    path: "/my-toys",
    element: (
      <PrivateRoute>
        <MyToys />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-a-toy",
    element: (
      <PrivateRoute>
        <AddAToy />
      </PrivateRoute>
    ),
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
export default Routes;
