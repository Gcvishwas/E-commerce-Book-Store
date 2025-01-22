import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png"

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" }
]
const Navbar = () => {
    const currentUser = true;

    const [isDropdownOpen, setIsdropdownOpen] = useState(false)

    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-4 bg-purple-600 max-h-fit'>
            <nav className='flex justify-between items-center'>
                {/* Left side with logo and search */}
                <div className="flex items-center md:gap-8 gap-4">

                    {/* Logo */}

                    <Link to="/" className="flex items-center text-white text-2xl font-semibold">
                        Read<span className="text-yellow-300">It</span>
                    </Link>

                    {/* Search input */}

                    <div className='relative sm:w-64 w-40'>


                        <GiArchiveResearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-2xl' />

                        <input
                            type='text'
                            placeholder='Search for book'
                            className='bg-[#EAEAEA] w-full py-2 pl-3 pr-4 rounded-lg focus:outline-none text-md'

                        />
                    </div>
                </div>

                {/* right side */}

                <div className='relative flex items-center md:space-x-3 space-x-2'>

                    {/* Shopping Cart */}

                    <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md hover:bg-yellow-200 transition duration-75'>
                        <FaShoppingCart className='text-lg ' />
                        <span className='ml-1'>0</span>
                    </Link>

                    {/* Favorite */}
                    <button className='hidden sm:block p-2 rounded-full hover:bg-red-500 transition duration-300'>
                        <GrFavorite className='text-white text-xl' />
                    </button>

                    {/* User Login and Menu */}
                    <div className='relative'>
                        {
                            currentUser ? (
                                <>
                                    <button onClick={() => setIsdropdownOpen(!isDropdownOpen)} className='relative'>
                                        <img src={avatarImg} alt="Avatar" className={`h-7 w-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                                    </button>

                                    {/* Dropdown */}
                                    {
                                        isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                                <ul className="py-2">
                                                    {
                                                        navigation.map((item) => (
                                                            <li key={item.name} onClick={() => setIsdropdownOpen(false)}>
                                                                <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </>
                            ) : (
                                <Link to="/login">
                                    <FaUserGraduate className='h-6 w-6' />
                                </Link>
                            )
                        }
                    </div>

                    <></>
                </div>
            </nav>
        </header >
    )
}

export default Navbar
