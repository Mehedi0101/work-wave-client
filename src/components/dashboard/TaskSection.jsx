import Proptypes from "prop-types";
import useGetTasks from "../../hooks/useGetTasks";
import { useEffect, useState } from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const TaskSection = ({ type }) => {
    const { tasks, refetch } = useGetTasks();
    const axiosPublic = useAxiosPublic();
    const [sectionTasks, setSectionTasks] = useState([]);

    useEffect(() => {
        if (tasks.length > 0) {
            setSectionTasks(tasks.filter(task => task.status === type))
        }
        else {
            setSectionTasks([]);
        }
    }, [setSectionTasks, tasks, type])

    const addToThisSection = id => {
        const toastId = toast.loading('Updating list...');
        axiosPublic.patch(`/tasks/status/${id}`, { status: type })
            .then(res => {
                if (res?.data?.modifiedCount >= 0) {
                    toast.success('List updated', { id: toastId });
                    refetch();
                }
            })
            .catch(() => {
                toast.error('Something went wrong', { id: toastId });
            })
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addToThisSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    return (
        <div ref={drop} className={`${type === 'todo' ? 'border border-[#1d6391]' : ''} ${type === 'ongoing' ? 'border border-[#156e3a]' : ''} ${type === 'completed' ? 'border border-[#2c3e50]' : ''} w-full min-h-[300px] rounded-md ${isOver ? 'bg-[#000000dc]' : 'bg-[#000000c4]'} transition-colors`}>
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