import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import CardDetails from "../pages/home/services/CardDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
// import MyBooking from "../pages/myBooking/MyBooking";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader: async ()=> fetch("./eventData.json") 
            },
            {
                path:"card/:cardId",
                element:<PrivateRoute><CardDetails/></PrivateRoute>,
                loader: async ()=> fetch("./eventData.json") 
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            // {
            //     path:"/my-booking",
            //     element:<MyBooking/>
            // },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },

        ]
    }
])

export default router