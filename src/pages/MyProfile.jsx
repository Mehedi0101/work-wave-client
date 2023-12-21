import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import defaultUser from "../assets/default-user.png";


const MyProfile = () => {
    document.title = "MY PROFILE";
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="p-10 md:px-10 px-5 min-h-screen flex flex-col justify-center">
            <h2 className={`md:text-4xl text-3xl font-bold text-center mb-20 text-black`}>My Profile</h2>
            <div className="flex flex-col justify-center items-center gap-5">
                <img className="w-28 h-28 object-cover rounded-full" src={currentUser?.photoURL || defaultUser} alt="" />
                <div className="">
                    <span className="font-extrabold">User Name: </span>
                    <span>{currentUser.displayName}</span>
                </div>
                <div className="">
                    <span className="font-extrabold">Email: </span>
                    <span>{currentUser.email}</span>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;