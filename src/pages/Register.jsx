import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../components/configs/firebase.config";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import chef from "../assets/taskboard.jpg";

const Register = () => {
    document.title = "REGISTER";
    const { signUpEmailPassword, logout, googleLogin, setLoading, setGoogleLoginAttempt } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [alreadyExistError, setAlreadyExistError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { state } = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        setPasswordError('');
        setAlreadyExistError(false);

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            setPasswordError('password should contain at least 6 characters');
            return;
        }

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setPasswordError('password should contain at least an uppercase character');
            return;
        }

        if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(password)) {
            setPasswordError('password should contain at least a special character');
            return;
        }

        const toastId = toast.loading('Creating account...');

        signUpEmailPassword(email, password)
            .then(() => {
                toast.success('Signed up successfully', { id: toastId });

                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => { })
                    .catch(() => { })

                logout()
                    .then(() => {
                        navigate('/login');
                    })
            })

            .catch(error => {
                toast.error('Sign in failed', { id: toastId });
                error.code === 'auth/email-already-in-use' && setAlreadyExistError(true);
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        const toastId = toast.loading('Signing in...');
        googleLogin()
            .then(() => {
                setGoogleLoginAttempt(true);
                navigate(state || '/');
                toast.success('Signed in successfully', { id: toastId });
            })
            .catch(() => {
                toast.error('Sign in failed', { id: toastId });
                setLoading(false);
                setGoogleLoginAttempt(false);
            })
    }

    return (
        <>
            <div className="min-h-screen lg:pt-40 pt-20 md:px-10 max-w-screen-2xl mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="text-center hidden lg:block w-1/3 ml-auto">
                        <img className="max-h-full max-w-full" src={chef} alt="" />
                    </div>
                    <div className="pt-20 pb-10 font-primary max-w-full mx-auto">
                        <form onSubmit={handleRegister} className="text-dark1 xl:p-14 lg:p-12 md:p-10 p-8 border rounded text-sm md:text-base max-w-[90%] mx-auto">
                            <h2 className="font-bold text-3xl md:text-4xl mb-10 font-secondary">Register</h2>
                            <input className="outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="name" id="name" placeholder="Name" required />
                            <br />
                            <input className="outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="email" name="email" id="email" placeholder="Email" required />
                            {
                                alreadyExistError && <p className="text-red-500 text-xs -mt-8 max-w-full w-[400px]">Email is already in use</p>
                            }
                            <div className="mb-8 relative">
                                <input className="outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                                {
                                    showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" />
                                }
                            </div>
                            {
                                passwordError && <p className="text-red-500 text-xs -mt-8 mb-8 max-w-full w-[400px]">*{passwordError}</p>
                            }
                            <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Register</button>
                            <div className="flex flex-wrap justify-center gap-1 text-sm font-medium">
                                <p className="text-center">Already have an account?</p>
                                <Link className="text-primary underline" to='/login'>Login</Link>
                            </div>
                            <div className="max-w-[90%] w-[400px]">
                                <div className="flex items-center gap-2 my-6">
                                    <hr className="border-[1px] border-[#C5C5C5] w-full" />
                                    <p className="text-black font-medium">Or</p>
                                    <hr className="border-[1px] border-[#C5C5C5] w-full" />
                                </div>
                                <div>
                                    <div onClick={handleGoogle} className='px-5 py-2 text-black active:scale-95 transition-transform w-full font-medium mb-3 flex items-center border border-[#C5C5C5] rounded-full cursor-pointer text-center'><FcGoogle className="text-2xl" /><p className="mx-auto">Continue with Google</p></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;