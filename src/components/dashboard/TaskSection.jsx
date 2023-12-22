import Proptypes from "prop-types";
import useGetTasks from "../../hooks/useGetTasks";
import { useEffect, useState } from "react";
import Task from "./Task";

const TaskSection = ({ type }) => {
    const { tasks } = useGetTasks();
    const [sectionTasks, setSectionTasks] = useState([]);

    useEffect(() => {
        if (tasks.length > 0) {
            setSectionTasks(tasks.filter(task => task.status === type))
        }
    }, [setSectionTasks, tasks, type])

    return (
        <div className={`${type === 'todo' ? 'border border-[#1d6391]' : ''} ${type === 'ongoing' ? 'border border-[#156e3a]' : ''} ${type === 'completed' ? 'border border-[#2c3e50]' : ''} w-full min-h-[300px] rounded-md bg-[#000000c4]`}>
            <h2 className={`text-center uppercase text-white p-3 mb-2 font-bold ${type === 'todo' ? 'bg-[#1d6391]' : ''} ${type === 'ongoing' ? 'bg-[#156e3a]' : ''} ${type === 'completed' ? 'bg-[#2c3e50]' : ''} rounded-t`}>{type}</h2>
            <div className="">
                {
                    sectionTasks.map((task, idx) => <Task key={task._id} task={task} idx={idx}></Task>)
                }
            </div>
        </div>
    );
};

TaskSection.propTypes = {
    type: Proptypes.string.isRequired
}

export default TaskSection;