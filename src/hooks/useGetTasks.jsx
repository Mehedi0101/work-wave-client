import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useGetTasks = () => {
    const { currentUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', currentUser?.email],
        queryFn: async () => {
            if (currentUser?.email) {
                const res = await axiosPublic.get(`/tasks?email=${currentUser?.email}`);
                return res.data;
            }
            else {
                return [];
            }
        },
        enabled: !!currentUser?.email
    })
    return { tasks, refetch };
};

export default useGetTasks;