import Proptypes from "prop-types";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useGetTasks from "../../hooks/useGetTasks";

const Task = ({ task, idx }) => {
    const { refetch } = useGetTasks();
    const axiosPublic = useAxiosPublic();
    const { _id, title, priority, deadline } = task;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleDelete = id => {
        const toastId = toast.loading('Deleting task...');
        axiosPublic.delete(`tasks/delete/${id}`)
            .then(res => {
                if (res?.data?.deletedCount > 0) {
                    toast.success('Task deleted', { id: toastId });
                    refetch();
                }
            })
            .catch(() => {
                toast.error('Something went wrong', { id: toastId });
            })
    }

    return (
        <div ref={drag} className={`py-1 mb-2 text-white bg-[#0000004f] cursor-grab ${isDragging ? 'opacity-50 cursor-grabbing' : 'opacity-100'} transition-all`}>
            <div className="px-2 font-medium flex flex-wrap gap-x-3 gap-y-1 items-center">
                <div>{idx + 1}.</div>
                <div>{title}</div>
                <div>{deadline}</div>
                <div className={`px-2 py-1 text-xs font-bold ${priority === 'high' ? 'bg-red-400' : ''} ${priority === 'moderate' ? 'bg-orange-400' : ''} ${priority === 'low' ? 'bg-green-400' : ''}`}>{priority}</div>
                <div className="cursor-pointer"><FaRegPenToSquare className="text-sm" /></div>
                <div className="cursor-pointer" onClick={() => handleDelete(_id)}><FaTrashAlt className="text-sm" /></div>
            </div>
        </div>
    );
};

Task.propTypes = {
    task: Proptypes.object.isRequired,
    idx: Proptypes.number.isRequired
}

export default Task;