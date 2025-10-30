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
        setSectionTasks(tasks.filter(task => task.status === type));
    }, [tasks, type])

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
        // <div ref={drop} className={`${type === 'todo' ? 'border border-[#1d6391]' : ''} ${type === 'ongoing' ? 'border border-[#156e3a]' : ''} ${type === 'completed' ? 'border border-[#2c3e50]' : ''} w-full min-h-[300px] rounded-md ${isOver ? 'bg-[#000000dc]' : 'bg-[#000000c4]'} transition-colors`}>
        //     <h2 className={`text-center uppercase text-white p-3 mb-2 font-bold ${type === 'todo' ? 'bg-[#1d6391]' : ''} ${type === 'ongoing' ? 'bg-[#156e3a]' : ''} ${type === 'completed' ? 'bg-[#2c3e50]' : ''} rounded-t`}>{type}</h2>
        //     <div className="">
        //         {
        //             sectionTasks.map((task, idx) => <Task key={task._id} task={task} idx={idx}></Task>)
        //         }
        //     </div>
        // </div>
        <div
            ref={drop}
            className={`
                        w-full min-h-[350px] rounded-2xl p-4 
                        transition-all duration-300 ease-in-out 
                        backdrop-blur-md bg-white/10 border border-white/20 
                        shadow-md hover:shadow-lg 
                        ${isOver ? 'scale-[1.02] bg-white/20' : ''}
            `}
        >
            <h2
                className={`
      text-center uppercase text-white tracking-wider font-semibold py-3 rounded-xl mb-4
      ${type === 'todo' ? 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80' : ''}
      ${type === 'ongoing' ? 'bg-gradient-to-r from-green-500/80 to-lime-500/80' : ''}
      ${type === 'completed' ? 'bg-gradient-to-r from-slate-600/80 to-gray-800/80' : ''}
      shadow-sm
    `}
            >
                {type}
            </h2>

            <div
                className="space-y-3 px-1 pb-2 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
            >
                {sectionTasks.length > 0 ? (
                    sectionTasks.map((task, idx) => (
                        <Task key={task._id} task={task} idx={idx} />
                    ))
                ) : (
                    <p className="text-center text-gray-300 italic py-5">
                        No tasks here yet
                    </p>
                )}
            </div>
        </div>

    );
};

TaskSection.propTypes = {
    type: Proptypes.string.isRequired
}

export default TaskSection;