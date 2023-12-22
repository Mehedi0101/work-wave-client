import Proptypes from "prop-types";

const Task = ({ task, idx }) => {
    const { title, priority, deadline } = task;
    console.log(title, deadline);
    return (
        <div className={`py-1 mb-2 text-white bg-[#0000004f]`}>
            <p className="px-2 font-medium">
                {idx + 1}. {title} - {deadline} - <span className={`px-2 py-1 text-xs font-bold ${priority === 'high' ? 'bg-red-400' : ''} ${priority === 'moderate' ? 'bg-orange-400' : ''} ${priority === 'low' ? 'bg-green-400' : ''}`}>{priority}</span>
            </p>
        </div>
    );
};

Task.propTypes = {
    task: Proptypes.object.isRequired,
    idx: Proptypes.number.isRequired
}

export default Task;