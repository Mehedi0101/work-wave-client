import Proptypes from "prop-types";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useGetTasks from "../../hooks/useGetTasks";
import { Link } from "react-router-dom";

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
        // <div ref={drag} className={`py-1 mb-2 text-white bg-[#0000004f] cursor-grab ${isDragging ? 'opacity-50 cursor-grabbing' : 'opacity-100'} transition-all`}>
        //     <div className="px-2 py-1 font-medium flex flex-col gap-y-1">
        //         <div>
        //             <div>{idx + 1}. {title}</div>
        //         </div>
        //         <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
        //             <div className={`px-2 py-1 text-xs font-bold ${priority === 'high' ? 'bg-red-400' : ''} ${priority === 'moderate' ? 'bg-orange-400' : ''} ${priority === 'low' ? 'bg-green-400' : ''}`}>{priority}</div>
        //             <div>{deadline}</div>
        //             <Link to={`/dashboard/update-task/${_id}`}><div className="cursor-pointer"><FaRegPenToSquare className="text-sm" /></div></Link>
        //             <div className="cursor-pointer" onClick={() => handleDelete(_id)}><FaTrashAlt className="text-sm" /></div>
        //         </div>
        //     </div>
        // </div>
        <div
            ref={drag}
            className={`relative group mb-3 p-3 rounded-xl border backdrop-blur-sm
      transition-all duration-300 ease-in-out cursor-grab
      ${isDragging ? "opacity-70 scale-[0.97] cursor-grabbing" : "opacity-100"}
      ${priority === "high"
                    ? "border-red-500/40 bg-red-500/10 hover:bg-red-500/20"
                    : priority === "moderate"
                        ? "border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-500/20"
                        : "border-green-500/40 bg-green-500/10 hover:bg-green-500/20"}
      shadow-[0_4px_10px_rgba(0,0,0,0.3)]
  `}
        >
            {/* Subtle glow line on left */}
            <div
                className={`absolute left-0 top-0 h-full w-[3px] rounded-l-xl ${priority === "high"
                        ? "bg-red-400"
                        : priority === "moderate"
                            ? "bg-yellow-400"
                            : "bg-green-400"
                    }`}
            ></div>

            {/* Task content */}
            <div className="flex flex-col gap-y-2 pl-3">
                {/* Title */}
                <div className="text-[15px] font-semibold text-slate-800 tracking-wide">
                    {idx + 1}. {title}
                </div>

                {/* Info row */}
                <div className="flex items-center flex-wrap gap-3 text-sm text-gray-200/90">
                    {/* Priority label */}
                    <span
                        className={`px-2 py-[2px] rounded-md text-[11px] font-semibold uppercase tracking-wide shadow-sm
          ${priority === "high"
                                ? "bg-red-200 text-red-600"
                                : priority === "moderate"
                                    ? "bg-yellow-200 text-yellow-600"
                                    : "bg-green-200 text-green-600"}
        `}
                    >
                        {priority}
                    </span>

                    {/* Deadline */}
                    <span className="text-slate-600 flex items-center gap-1">
                        <i className="text-xs">⏰</i> {deadline}
                    </span>

                    {/* Action buttons */}
                    <div className="flex gap-3 ml-auto">
                        <Link
                            to={`/dashboard/update-task/${_id}`}
                            className="text-cyan-400"
                        >
                            <FaRegPenToSquare className="text-[15px]" />
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="text-rose-400 transition-colors"
                        >
                            <FaTrashAlt className="text-[15px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Task.propTypes = {
    task: Proptypes.object.isRequired,
    idx: Proptypes.number.isRequired
}

export default Task;