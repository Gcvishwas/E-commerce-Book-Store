import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import getBaseUrl from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate;
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has expired!Please login again");
          navigate("/admin");
        }, 3600 * 1000);
      }

      alert("Admin Login successfull!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid Username and password");
      console.error(error);
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 shadow-xl rounded-md px-10 pt-8 pb-10 mb-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="Username"
              className="block  font-medium text-gray-700"
            >
              Username
            </label>
            <input
              {...register("Username", { required: true })}
              type="text"
              id="Username"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block  font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-blue-500"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-700 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
