import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import './styles/Navbar.css';
import { useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import defaultUser from "../../assets/logo/default-user.png";
import logo from "../../assets/workwave-logo.png";
import navbarBg from "../../assets/navbar-background.jpg";
// import toast from "react-hot-toast";

const Navbar = () => {
    // const { currentUser, logoutUser } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    // const handleLogout = () => {
    //     const toastId = toast.loading('Signing out...');
    //     logoutUser()
    //         .then(() => {
    //             toast.success('Signed out successfully', { id: toastId });
    //         })
    //         .catch(() => {
    //             toast.error('Something went wrong', { id: toastId });
    //         })
    // }


    const links = <>
        <NavLink className={({ isActive }) => isActive ? "text-lightDark font-bold" : "text-white font-bold"} onClick={() => { setShowMenu(false) }} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lightDark font-bold" : "text-white font-bold"} onClick={() => { setShowMenu(false) }} to='/our-team'>OUR TEAM</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lightDark font-bold" : "text-white font-bold"} onClick={() => { setShowMenu(false) }} to='/support-us'>SUPPORT US</NavLink>
    </>

    const navbg = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${navbarBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <>
            {/* large device */}
            <div className="hidden absolute lg:block justify-between items-center text-white px-10 py-2 text-sm font-semibold z-10 w-full" style={(location.pathname) !== '/' ? navbg : {}}>
                <div className="flex justify-between items-center max-w-[1516px] mx-auto">
                    <div className="flex-[1] text-left">
                        <Link to='/'><img className="w-40 max-w-[33%]" src={logo} alt="" /></Link>
                    </div>

                    <div className="flex-[1] flex gap-10 justify-end list-none">
                        {
                            links
                        }
                    </div>
                </div>
            </div>

            {/* small device */}
            <div className={`absolute z-10 flex gap-2 items-center justify-between lg:hidden md:px-10 px-5 py-2 text-white w-full`} style={(location.pathname) !== '/' ? navbg : {}}>
                <div className="flex sm:gap-5 gap-2 items-center">
                    <FiMenu onClick={() => { setShowMenu(!showMenu); }} className="text-2xl cursor-pointer" />
                    <Link to='/'><img className="h-14 max-w-full cursor-pointer" src={logo} alt="" /></Link>
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-16 w-fit bg-[#000000BB] px-8 py-5 rounded space-y-3 z-10 text-white list-none text-sm`}>
                    {
                        links
                    }
                </div>
            </div >
        </>
    );
};

export default Navbar;