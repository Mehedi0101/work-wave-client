import Proptypes from "prop-types";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const Task = ({ task, idx }) => {
    const { _id, title, priority, deadline } = task;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleDelete = id => {

    }

    return (
        <div ref={drag} className={`py-1 mb-2 text-white bg-[#0000004f] cursor-grab ${isDragging ? 'opacity-50 cursor-grabbing' : 'opacity-100'} transition-all`}>
            <div className="px-2 font-medium flex flex-wrap gap-x-3 items-center">
                <div>{idx + 1}.</div>
                <div>{title}</div>
                <div>{deadline}</div>
                <div className={`px-2 py-1 text-xs font-bold ${priority === 'high' ? 'bg-red-400' : ''} ${priority === 'moderate' ? 'bg-orange-400' : ''} ${priority === 'low' ? 'bg-green-400' : ''}`}>{priority}</div>
                <div><FaRegPenToSquare className="text-sm" /></div>
                <div onClick={() => handleDelete(_id)}><FaTrashAlt className="text-sm" /></div>
            </div>
        </div>
    );
};

Task.propTypes = {
    task: Proptypes.object.isRequired,
    idx: Proptypes.number.isRequired
}

export default Task;