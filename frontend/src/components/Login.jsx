import React from 'react'

const Login = () => {
    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className='w-full max-w-md mx-auto bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 shadow-xl rounded-md px-10 pt-8 pb-10 mb-4'>
                <h2 className='text-xl font-bold mb-4 text-gray-700'>Please Login</h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block  font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block  font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                </form>
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">Or continue with</p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Sign in with Google" className="h-6" />
                        </button>
                        <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                            <img src="https://img.icons8.com/ios-glyphs/30/github.png" alt="Sign in with GitHub" className="h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
