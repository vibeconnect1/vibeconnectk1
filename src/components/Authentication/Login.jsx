import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import wave from "/wave.png";
import axios from "axios";

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
      return;
    }

    setLoading(true);
    try {
      // console.log(formData)
      // const response = await axios.post("http://3.6.98.113/login", {
      //   email: formData.email,
      //   password: formData.password,
      // });
      // const token = response.data.token;
      // localStorage.setItem("token", token);
      // toast.loading("Processing your data please wait...");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };
  const togglePassword = () => {
    showPassword(!password);
  };

  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <div className=" rounded-md  ">
        <h1 className="text-3xl text-white  p-2 px-10 font-semibold jersey-15-regular ">
          VIBE CONNECT
        </h1>
      </div>
      <div className=" flex justify-center  h-[90vh] items-center">
        <div className="bg-white border-2 border-white w-[30rem] rounded-xl max-h-full p-5 shadow-2xl">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form onSubmit={onSubmit} className="m-2 flex flex-col gap-4 w-full ">
            <div className="flex flex-col gap-2 mx-5">
              <label htmlFor="email" className="font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" rounded-sm p-1 px-2 border border-black"
                placeholder="example@company.com"
                onChange={onChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col gap-2 relative mx-5">
              <label htmlFor="password" className="font-medium">
                Password:
              </label>
              <input
                name="password"
                id="password"
                className="rounded-sm p-1 px-2 border border-black"
                placeholder="********"
                type={password ? "text" : "password"}
                onChange={onChange}
                value={formData.password}
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
              <label htmlFor="" className="">
                Remember Me
              </label>
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="w-20 my-2 bg-black text-white p-1 rounded-md text-xl font-bold hover:bg-gray-300 "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
