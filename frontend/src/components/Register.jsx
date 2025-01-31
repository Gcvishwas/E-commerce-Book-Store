import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const [message, setMessage] = useState('');
    const { registerUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Register user with email and password
    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password);
            alert('User registered successfully!');
            navigate('/'); // Redirect to home after registration
        } catch (error) {
            setMessage('Error during registration');
            console.error(error);

            // Check for specific Firebase errors
            if (error.code === 'auth/email-already-in-use') {
                setMessage('This email is already in use. Please use a different email.');
            } else if (error.code === 'auth/weak-password') {
                setMessage('Password should be at least 6 characters long.');
            }
        }
    };

    // Google sign-in handler
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert('Google registration successful!');
            navigate('/'); // Redirect after Google registration
        } catch (error) {
            alert('Google sign-in failed!');
            console.error('Google SignIn Error: ', error.message);
        }
    };

    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 shadow-xl rounded-md px-10 pt-8 pb-10 mb-4">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Please Register</h2>

                {/* Registration Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            id="email"
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                            type="password"
                            id="password"
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
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
                        Register
                    </button>

                    <p>
                        Already have an account?
                        <span>
                            <Link to="/login" className="text-sm text-gray-700 hover:underline cursor-pointer">
                                Login
                            </Link>
                        </span>
                    </p>
                </form>

                {/* Google Sign-In */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">Or continue with</p>
                    <div className="relative flex justify-center mt-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center bg-gray-100 px-4 py-3 w-auto space-x-3 rounded-lg hover:bg-gray-200 transition-all shadow-md"
                        >
                            <FaGoogle className="h-6 text-gray-800" />
                            <span className="text-gray-800 font-medium">Sign up with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
