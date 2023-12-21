import { Link, NavLink } from "react-router-dom";
import { FaClipboardList, FaFileSignature } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import logo from "../../assets/workwave-logo-white.png";

const Sidebar = () => {
    return (
        <div className="bg-[#2b487c] min-h-screen fixed top-0 px-5 xl:max-w-[240px] max-w-[190px] w-full flex flex-col items-center justify-center gap-5">

            {/* logo */}
            <Link to="/"
                className=""
            >
                <img className="w-32 max-w-full" src={logo} alt="" />
            </Link>

            {/* task list */}
            <NavLink to="/task-list"
                className={({ isActive }) =>
                    isActive ? "text-[#55e6a5] font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaClipboardList className="text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-white text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">TASK LIST</div>
            </NavLink>

            {/* add task */}
            <NavLink to="/add-task"
                className={({ isActive }) =>
                    isActive ? "text-[#55e6a5] text-sm font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaFileSignature className="text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-white text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">ADD TASK</div>
            </NavLink>

            {/* logout */}
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? "text-[#55e6a5] font-medium flex items-center border border-primary rounded-md" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors"
                }
            >
                <FaBriefcase className="text-4xl xl:text-5xl h-fit p-2 xl:p-3 bg-primary rounded-md" />
                <div className="text-white text-xs xl:text-sm font-medium pl-2 xl:pl-4 w-20 xl:w-32 min-w-fit xl:py-3 py-2 bg-[#2b487c] rounded-r-md">LOGOUT</div>
            </NavLink>
        </div>
    );
};

export default Sidebar;