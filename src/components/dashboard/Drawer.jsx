import { Link, NavLink } from "react-router-dom";
import { FaClipboardList, FaFileSignature } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/workwave-logo-white.png";

const Drawer = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="">
            <AiOutlineMenuUnfold onClick={() => { setShowMenu(!showMenu); }} className={`text-2xl cursor-pointer ${showMenu ? 'text-white' : 'text-[#2b487c]'} z-20 m-5 absolute`} />
            <div className={`${showMenu ? 'flex' : 'hidden'} bg-[#2b487c] min-h-screen py-10 px-5 w-full top-0 flex flex-col items-center justify-center gap-5 absolute z-10`}>

                {/* logo */}
                <Link to="/"
                    className=""
                >
                    <img className="w-32 max-w-full" src={logo} alt="" />
                </Link>

                {/* profile */}
                <NavLink to="/dashboard/my-profile" onClick={() => { setShowMenu(false); }}
                    className={({ isActive }) =>
                        isActive ? "text-primary font-medium flex items-center border border-primary rounded-md max-w-full" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors max-w-full"
                    }
                >
                    <FaUserCircle className="text-white text-5xl h-fit p-3 bg-primary rounded-md" />
                    <div className="text-sm font-medium pl-4 w-32 min-w-fit py-3 bg-[#2b487c] rounded-r-md">MY PROFILE</div>
                </NavLink>

                {/* task list */}
                <NavLink to="/dashboard/task-list" onClick={() => { setShowMenu(false); }}
                    className={({ isActive }) =>
                        isActive ? "text-primary font-medium flex items-center border border-primary rounded-md max-w-full" : "text-white font-medium flex items-center border border-primary rounded-md transition-colors max-w-full"
                    }
                >
                    <FaClipboardList className="text-white text-5xl h-fit p-3 bg-primary rounded-md" />
                    <div className="text-sm font-medium pl-4 w-32 min-w-fit py-3 bg-[#2b487c] rounded-r-md">TASK LIST</div>
                </NavLink>

                {/* add task */}
                <NavLink to="/dashboard/add-task" onClick={() => { setShowMenu(false); }}
                    className={({ isActive }) =>
                        isActive ? "text-primary text-sm font-medium flex items-center border border-primary rounded-md max-w-full" : "text-white text-sm font-medium flex items-center border border-primary rounded-md transition-colors max-w-full"
                    }
                >
                    <FaFileSignature className="text-white text-5xl h-fit p-3 bg-primary rounded-md" />
                    <div className="text-sm font-medium pl-4 w-32 min-w-fit py-3 bg-[#2b487c] rounded-r-md">ADD TASK</div>
                </NavLink>

                {/* logout */}
                <NavLink to="/" onClick={() => { setShowMenu(false); }}
                    className={({ isActive }) =>
                        isActive ? "text-primary text-sm font-medium flex items-center border border-primary rounded-md max-w-full" : "text-white text-sm font-medium flex items-center border border-primary rounded-md transition-colors max-w-full"
                    }
                >
                    <FaBriefcase className="text-white text-5xl h-fit p-3 bg-primary rounded-md" />
                    <div className="text-sm font-medium pl-4 w-32 min-w-fit py-3 bg-[#2b487c] rounded-r-md">LOGOUT</div>
                </NavLink>
            </div>
        </div>
    );
};

export default Drawer;