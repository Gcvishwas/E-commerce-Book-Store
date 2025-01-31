import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiArchiveResearch } from "react-icons/gi";
import { FaUserGraduate, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import avatarImg from "../assets/avatar.png";

import { useAuth } from "../context/AuthContext";

import { useSelector } from "react-redux";


const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {


  const [isDropdownOpen, setIsdropdownOpen] = useState(false)


  const { currentUser, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const cartItems = useSelector((state) => state.cart.cartItems);



  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-500">
      <nav className="flex justify-between items-center">
        {/* Left side with logo and search */}
        <div className="flex items-center md:gap-8 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-white text-3xl font-bold tracking-wide"
          >
            Read<span className="text-yellow-300">It</span>
          </Link>

          {/* Search input */}
          <div className="relative sm:w-64 w-40">
            <GiArchiveResearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl" />
            <input
              type="text"
              placeholder="Search for books"
              className="bg-gray-100 w-full py-2 pl-4 pr-10 rounded-full focus:ring-2 focus:ring-purple-400 transition-shadow shadow-md text-sm"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart */}
          <Link
            to="/cart"
            className="flex items-center px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-all shadow-md text-white font-medium"
          >
            <FaShoppingCart className="text-lg" />
            {cartItems.length > 0 ? (
              <span className="ml-2">{cartItems.length}</span>
            ) : (
              <span className="ml-2">0</span>
            )}
          </Link>

          {/* Favorite */}
          <button className="hidden sm:block p-2.5 rounded-full w-10 h-10 hover:bg-red-500 transition duration-300">
            <GrFavorite className="text-white text-xl" />
          </button>

          {/* User Login and Menu */}
          <div className="relative">
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsdropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={avatarImg}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full border-2 border-white shadow-md"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg z-50">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsdropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              >
                <FaUserGraduate className="text-xl" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
