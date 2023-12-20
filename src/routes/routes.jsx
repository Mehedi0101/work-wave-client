import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import SupportUs from "../pages/SupportUs";

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
            }
        ]
    }
])

export default routes;