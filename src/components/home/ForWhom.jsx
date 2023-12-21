import { FaBriefcase, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const ForWhom = () => {
    return (
        <div className="md:px-10 px-5 mt-20 select-none max-w-screen-2xl mx-auto">
            <h2 className={`md:text-4xl text-3xl font-bold text-center mb-10 text-black`}>For Whom?</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between`}>
                <div className="py-5 rounded-lg flex flex-col justify-between">
                    {/* <img className="w-28 mx-auto" src={quality} alt="" /> */}
                    <FaBriefcase className="mx-auto text-5xl text-primary" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Project Managers</h3>
                    <p className={`text-center mt-3 text-dark2`}>Empower project managers to efficiently organize tasks, track progress, and ensure seamless collaboration within their teams, leading to successful project completion.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <FaLaptopCode className="mx-auto text-6xl text-primary" />
                    {/* <img className="w-28 mx-auto" src={flavor} alt="" /> */}
                    <h3 className="text-center text-2xl mt-5 font-semibold">Developers</h3>
                    <p className={`text-center mt-3 text-dark2`}>Assist developers in managing coding tasks, project timelines, and collaborative efforts, enhancing their ability to deliver high-quality software on schedule.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    {/* <img className="w-28 mx-auto" src={satisfaction} alt="" /> */}
                    <FaLightbulb className="mx-auto text-6xl text-primary" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Entrepreneurs</h3>
                    <p className={`text-center mt-3 text-dark2`}>Support entrepreneurs in organizing and prioritizing business tasks, facilitating smooth operations and strategic planning for their ventures success.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    {/* <img className="w-28 mx-auto" src={luxury} alt="" /> */}
                    <FaGraduationCap className="mx-auto text-6xl text-primary" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Students</h3>
                    <p className={`text-center mt-3 text-dark2`}>Aid students in managing assignments and deadlines, fostering efficient study schedules, and promoting collaboration on group projects for academic success.</p>
                </div>
            </div>
        </div>
    );
};

export default ForWhom;