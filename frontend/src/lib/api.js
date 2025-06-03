import { axiosInstance } from "./axios.js";

const signup = async (signupData) => {
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
}

export default signup;