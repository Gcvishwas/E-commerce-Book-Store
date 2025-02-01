import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { loginUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      alert("Google sign in failed !");
      console.error(error);
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 shadow-xl rounded-md px-10 pt-8 pb-10 mb-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block  font-medium text-gray-700">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
          <p>
            Don&apos;t have an account?
            <span>
              <Link
                to="/register"
                className="text-sm text-gray-700 hover:underline cursor-pointer"
              >
                Register
              </Link>
            </span>
          </p>
        </form>
        <div className="text-center mt-8">
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">Or continue with</p>
            <div className="relative flex justify-center mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center bg-gray-100 px-4 py-3 w-auto space-x-3 rounded-lg hover:bg-gray-200 transition-all shadow-md"
              >
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Sign in with Google"
                  className="h-6"
                />
                <span className="text-gray-800 font-medium">
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
