import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const { currentUser } = useContext(AuthContext);

    const onSubmit = async (data) => {

        const toastId = toast.loading('Adding task...');

        const newTask = {
            user: currentUser?.email,
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            details: data.details
        }

        const addRecipeResponse = await axiosPublic.post('/tasks', newTask);
        if (addRecipeResponse?.data?.insertedId) {
            toast.success('Task added', { id: toastId });
            reset();
        }
        else {
            toast.error('Try again', { id: toastId });
        }
    };

    return (
        <form className="pl-14 pr-10" onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`md:text-4xl text-3xl font-bold text-center mb-10 text-black pt-10`}>Add Task</h2>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="mb-5">
                <label htmlFor="title" className="text-[#444] font-semibold ml-1">Title*</label><br />
                <input {...register("title", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="title" id="title" placeholder="Task Title" />
                <br />
                {errors.title && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
            </div>

            <div className="mb-5">
                <label htmlFor="deadline" className="text-[#444] font-semibold ml-1">Deadline*</label><br />
                <input {...register("deadline", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="date" name="deadline" id="deadline" />
                <br />
                {errors.deadline && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
            </div>

            <div className="mb-5">
                <label htmlFor="priority" className="text-[#444] font-semibold ml-1">Priority*</label><br />
                <select {...register("priority")} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" defaultValue="" name="priority" id="priority" required>
                    <option value="" disabled>Select Priority</option>
                    <option value="high">High</option>
                    <option value="moderate">Moderate</option>
                    <option value="low">Low</option>
                </select>
                <br />
                {errors.priority && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
            </div>

            <div className="mb-5">
                <label htmlFor="details" className="text-[#444] font-semibold ml-1">Details</label><br />
                <textarea {...register("details")} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg resize-none" cols="30" rows="10" type="text" name="details" id="details" placeholder="Task Details" />
            </div>

            <button className="text-white font-bold bg-primary px-5 py-3 mb-4 cursor-pointer w-full text-center rounded-lg active:scale-95 transition-transform">Add Task</button>
        </form>
    );
};

export default AddTask;