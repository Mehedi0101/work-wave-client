import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import './styles/Navbar.css';
import { useState } from "react";
import logo from "../../assets/workwave-logo.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    const links = <>
        <NavLink className={({ isActive }) => isActive ? `font-bold ${(location.pathname) !== '/' ? 'text-[#6494edd2]' : 'text-lightDark'}` : `${(location.pathname) !== '/' ? 'text-primary' : 'text-white'} font-bold`} onClick={() => { setShowMenu(false) }} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? `font-bold ${(location.pathname) !== '/' ? 'text-[#6494edd2]' : 'text-lightDark'}` : `${(location.pathname) !== '/' ? 'text-primary' : 'text-white'} font-bold`} onClick={() => { setShowMenu(false) }} to='/our-team'>OUR TEAM</NavLink>
        <NavLink className={({ isActive }) => isActive ? `font-bold ${(location.pathname) !== '/' ? 'text-[#6494edd2]' : 'text-lightDark'}` : `${(location.pathname) !== '/' ? 'text-primary' : 'text-white'} font-bold`} onClick={() => { setShowMenu(false) }} to='/support-us'>SUPPORT US</NavLink>
    </>

    return (
        <>
            {/* large device */}
            <div className={`hidden absolute lg:block justify-between items-center text-white px-10 py-2 text-sm font-semibold z-10 w-full`}>
                <div className="flex justify-between items-center max-w-[1516px] mx-auto">
                    <div className="flex-[1] text-left">
                        <Link to='/'><img className="w-40 max-w-[33%]" src={logo} alt="" /></Link>
                    </div>

                    <div className={`flex-[1] flex gap-10 justify-end list-none ${(location.pathname) !== '/' ? 'text-primary' : ''}`}>
                        {
                            links
                        }
                    </div>
                </div>
            </div>

            {/* small device */}
            <div className={`absolute z-10 flex gap-2 items-center justify-between lg:hidden md:px-10 px-5 py-2 text-white w-full`}>
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