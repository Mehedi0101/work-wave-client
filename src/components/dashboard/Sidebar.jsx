import { Link, NavLink } from "react-router-dom";
import { FaClipboardList, FaFileSignature } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/workwave-logo-white.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Sidebar = () => {
    const { logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        const toastId = toast.loading('Signing out...');
        logoutUser()
            .then(() => {
                toast.success('Signed out successfully', { id: toastId });
            })
            .catch(() => {
                toast.error('Something went wrong', { id: toastId });
            })
    }

    return (
        <div className="bg-[#2b487c] min-h-screen fixed top-0 px-5 xl:max-w-[240px] max-w-[190px] w-full flex flex-col items-center justify-center gap-5">

            {/* logo */}
            <Link to="/"
                className=""
            >
                <img className="w-32 max-w-full" src={logo} alt="" />
            </Link>

            {/* profile */}
            <NavLink to="/dashboard/my-profile"
                className={({ isActive }) =>
                    isActive ? "text-primary font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaUserCircle className="text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md text-white" />
                <div className="text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">MY PROFILE</div>
            </NavLink>

            {/* task list */}
            <NavLink to="/dashboard/task-list"
                className={({ isActive }) =>
                    isActive ? "text-primary font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaClipboardList className="text-white text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">TASK LIST</div>
            </NavLink>

            {/* add task */}
            <NavLink to="/dashboard/add-task"
                className={({ isActive }) =>
                    isActive ? "text-primary text-sm font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaFileSignature className="text-white text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">ADD TASK</div>
            </NavLink>

            {/* logout */}
            <NavLink to="/" onClick={handleLogout}
                className={({ isActive }) =>
                    isActive ? "text-primary font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaBriefcase className="text-white text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">LOGOUT</div>
            </NavLink>
        </div>
    );
};

export default Sidebar;