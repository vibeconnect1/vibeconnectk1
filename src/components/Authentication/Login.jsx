import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [password, showPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return
    }
    setLoading(true);
    const loadingToast = toast.loading("Processing your data please wait...");
    try {
      // api
      navigate("/dashboard")
    } finally {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };
  const togglePassword = () => {
    showPassword(!password);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen ">
      <div className="bg-black w-[30rem] rounded-md shadow-2xl">
        <h1 className="text-2xl text-white text-center p-2 font-semibold">
          VIBE CONNECT
        </h1>
      </div>
      <div className="bg-black w-[30rem] rounded-md max-h-full p-4 shadow-2xl">
        <h1 className="text-2xl text-white text-center">Login</h1>
        <form onSubmit={onSubmit} className="m-2 flex flex-col gap-4 w-full ">
          <div className="flex flex-col gap-2 mx-5">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" rounded-sm p-1 px-2"
              placeholder="example@company.com"
              onChange={onChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2 relative mx-5">
            <label htmlFor="password" className="text-white">
              Password:
            </label>
            <input
              name="password"
              id="password"
              className=" rounded-sm p-1 px-2"
              placeholder="********"
              type={password ? "text" : "password"}
              onChange={onChange}
            />
            <div className="p-1 rounded-full  absolute top-12 right-2 transform -translate-y-1/2 cursor-pointer font">
              {password ? (
                <AiFillEye onClick={togglePassword} />
              ) : (
                <AiFillEyeInvisible onClick={togglePassword} />
              )}
            </div>
          </div>
          <div className="mx-5 flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className="text-white">Remember Me</label>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="w-20 my-2 bg-white p-1 rounded-md text-xl font-bold hover:bg-gray-300 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
