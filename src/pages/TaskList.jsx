import TaskSection from "../components/dashboard/TaskSection";

const TaskList = () => {
    const types = ['todo', 'ongoing', 'completed'];

    return (
        <div className="pl-14 pr-10 flex flex-col justify-center min-h-screen pb-10">
            <h2 className={`md:text-4xl text-3xl font-bold text-center mb-10 text-black pt-10`}>Task List</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    types.map((type, idx) => <TaskSection key={idx} type={type}></TaskSection>)
                }
            </div>
        </div>
    );
};

export default TaskList;