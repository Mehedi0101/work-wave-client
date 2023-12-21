import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Drawer from "../components/dashboard/Drawer";

const Dashboard = () => {
    return (
        <div className="max-w-screen-2xl mx-auto flex">
            <div className="w-1/6 md:min-w-fit hidden md:block">
                <Sidebar></Sidebar>
            </div>
            <div className="block md:hidden">
                <Drawer></Drawer>
            </div>
            <div className="w-full md:w-5/6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;