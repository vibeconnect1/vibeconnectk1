import axios from "axios";
import { getItemInLocalStorage } from "../utils/localStorage";

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request.use(
  (authenticate) => {
    const token = getItemInLocalStorage("TOKEN");
    if (token) {
      authenticate.headers["Authorization"] = `Bearer ${token}`;
    }
    return authenticate;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
