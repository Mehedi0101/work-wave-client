import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import SupportUs from "../pages/SupportUs";
import Register from "../pages/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/our-team',
                element: <OurTeam></OurTeam>
            },
            {
                path: '/support-us',
                element: <SupportUs></SupportUs>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;