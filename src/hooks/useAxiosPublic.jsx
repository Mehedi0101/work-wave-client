import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://work-wave-server-psi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;