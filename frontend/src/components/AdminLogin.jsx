import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import getBaseUrl from '../utils/baseURL';
const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
          localStorage.removeItem('token');
          alert('Token has expired! Please login again');
          navigate("/admin");
        }, 3600 * 1000);
      }

      alert("Admin Login successful!");
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
            <label htmlFor="Username" className="block font-medium text-gray-700">Username</label>
            <input
              {...register("Username", { required: "Username is required" })}
              type="text"
              id="Username"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Username"
            />
            {errors.Username && <p className="text-red-500 text-xs">{errors.Username.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              type="password"
              id="password"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-blue-500"
              placeholder="Enter your Password"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
          {message && <div className="text-red-500 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
export default AdminLogin;
