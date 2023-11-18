import {
    createBrowserRouter,
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";
import Additems from "../Pages/Dashboard/Additems/Additems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        },
        {
          path:'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element:<PrivetRoute>
             <Secret></Secret>
          </PrivetRoute>
        }
      ]
    }, 
    {
      path: "dashboard",
      element: <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>,
      children:[
        {
          path:'cart',
          element: <Cart></Cart>
        },

        // admin routes
        {
          path:'addItem',
          element: <AdminRoutes>
            <Additems></Additems>
          </AdminRoutes>
        },
        {
          path:'manageItems',
          element: <AdminRoutes>
            <ManageItem></ManageItem>
          </AdminRoutes>,
        },
        {
          path:'alluser',
          element: <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        }
      ]
    }
  ]);