"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Themebtn from './Themebtn';

const Navbar = () => {
  const [loading, setLoading] = useState(false); // Manage loading state

  // Function to handle login or signup click
  const handleClick = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will disappear after 2 seconds
  };

  return (
    <>
      {loading && <Loader />} {/* Show loader if loading is true */}

      <nav className="bg-gray-900 text-white flex justify-between items-center h-16 px-6 shadow-lg">
        {/* Logo */}
        <Link href={"/"}>
          <div className="logo font-bold text-2xl cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">PETRON</div>
        </Link>
        
        {/* Navigation Links */}
        <div className='flex space-x-6 items-center'>
          <Link href={"/"}>
            <span className="cursor-pointer hover:text-yellow-500 font-semibold transition duration-300 ease-in-out">Home</span>
          </Link>

          <Link href={"/about"}>
            <span className="cursor-pointer hover:text-yellow-500 font-semibold transition duration-300 ease-in-out">About Us</span>
          </Link>

          <Link href={"/contact"}>
            <span className="cursor-pointer hover:text-yellow-500 font-semibold transition duration-300 ease-in-out">Contact</span>
          </Link>

          {/* Theme button */}
          <div className='p-4'>
            <Themebtn />
          </div>

          {/* Login Button */}
          <div className='flex'>
          <Link href={"/login"}>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg 
              text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center transition duration-300 ease-in-out"
              onClick={handleClick}
              disabled={loading}
            >
              Login
            </button>
          </Link>

          {/* SignUp Button */}
          <Link href={"/signup"}>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold 
              rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center
               transition duration-300 ease-in-out"
              onClick={handleClick}
              disabled={loading}
            >
              SignUp
            </button>
          </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

// Stylish Loader component
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="loader rounded-full border-4 border-t-4 border-t-transparent border-yellow-500 w-16 h-16 animate-spin"></div>
    </div>
  );
}

export default Navbar;
