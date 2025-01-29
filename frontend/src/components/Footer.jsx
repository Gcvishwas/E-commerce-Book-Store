import React from 'react'
import footerLogo from "../assets/footer-logo.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-6">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Left Side */}
                <div className="md:w-1/2 w-full">
                    <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
                    <ul className="flex flex-wrap gap-4 text-gray-400">
                        <li>
                            <a href="#home" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 w-full">
                    <p className="mb-4 text-gray-400">
                        Subscribe to our newsletter to receive the latest updates, news, and
                        offers!
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                        />
                        <button className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-r-md text-white transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6 text-gray-400">
                <ul className="flex gap-6 mb-4 md:mb-0">
                    <li>
                        <a href="#privacy" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#terms" className="hover:text-white transition">
                            Terms of Service
                        </a>
                    </li>
                </ul>
                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer