import { motion } from 'framer-motion';
import banner from '../../assets/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60 bg-[#1C1C1C]"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <motion.h5 animate={{ y: [-50, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0, repeat: Infinity, repeatDelay: 3 }} className='lg:text-xs text-[10px] tracking-widest font-light mb-2'>SAIL SMOOTHLY THROUGH TASKS</motion.h5>
                    <motion.h1 animate={{ y: [-50, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }} className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Welcome to WorkWave!</motion.h1>
                    <motion.p animate={{ y: [-50, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 3 }} className="mb-5 lg:text-base text-sm text-lightDark">Streamline tasks, boost collaboration, and conquer deadlines effortlessly with our intuitive task management platform. Elevate your productivity journey now!</motion.p>
                    <Link to="/dashboard/my-profile">
                        <button className="px-5 py-3 font-semibold md:text-sm text-xs bg-primary text-white active:scale-95 transition-all">LET&apos;S EXPLORE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;