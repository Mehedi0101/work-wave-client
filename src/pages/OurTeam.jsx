import teammate1 from "../assets/member1.jpg";
import teammate2 from "../assets/member2.jpg";
import teammate3 from "../assets/member3.jpg";

const OurTeam = () => {
    return (
        <div className='grid items-center grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-center font-primary pt-36 md:px-10 px-5 select-none max-w-screen-2xl mx-auto'>
            <div className="">
                <img className="w-full" src={teammate1} alt="" />
                <h3 className="tracking-widest text-sm text-dark2 mt-5">Project Manager</h3>
                <h2 className="lg:text-3xl md:text-2xl text-xl">Nathan Cole</h2>
            </div>
            <div className="">
                <img className="w-full" src={teammate3} alt="" />
                <h3 className="tracking-widest text-sm text-dark2 mt-5">Team Lead</h3>
                <h2 className="lg:text-3xl md:text-2xl text-xl">Liam Parker</h2>
            </div>
            <div className="">
                <img className="w-full" src={teammate2} alt="" />
                <h3 className="tracking-widest text-sm text-dark2 mt-5">Developer</h3>
                <h2 className="lg:text-3xl md:text-2xl text-xl">Mason Hayes</h2>
            </div>
        </div>
    );
};

export default OurTeam;