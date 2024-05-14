import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";
import HomePages from "../pages/mainpages/HomePages";
import DetailPages from "../pages/mainpages/DetailPages";
import Basketpages from "../pages/mainpages/Basketpages";
import AdminLayout from "../layout/adminlayout/AdminLayout";
import AdminPanel from "../pages/adminpages/AdminPanel";
import Add from "../pages/adminpages/Add";
import Update from "../pages/adminpages/Update";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
        {
            index: true,
            element:<HomePages></HomePages>
        },
        {
            path: "Detail/:id",
            element:<DetailPages></DetailPages>
        },
        {
            path:"Basket",
            element:<Basketpages></Basketpages>
        }
    ]
    },
    {
      path:"/adminpanel",
      element:<AdminLayout></AdminLayout>,
      children:[
        {
            index:true,
            element:<AdminPanel></AdminPanel>
        },
        {
            path:"/adminpanel/Add",
            element:<Add></Add>
        },
        {
            path:"/adminpanel/Update/:id",
            element:<Update></Update>
        }
      ]
    }
])