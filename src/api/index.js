import axiosInstance from "./axiosInstance";

export const login = async (data) => axiosInstance.post('http://3.6.98.113/login', data);