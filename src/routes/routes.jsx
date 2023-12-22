import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import SupportUs from "../pages/SupportUs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import TaskList from "../pages/TaskList";
import AddTask from "../pages/AddTask";
import UpdateTask from "../pages/UpdateTask";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard/',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/task-list',
                element: <TaskList></TaskList>
            },
            {
                path: '/dashboard/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/dashboard/update-task/:id',
                element: <UpdateTask></UpdateTask>
            }
        ]
    }
])

export default routes;