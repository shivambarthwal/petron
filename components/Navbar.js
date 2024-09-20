"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Themebtn from './Themebtn';
import { useSession , signIn,signOut } from 'next-auth/react';
const Navbar = () => {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [showdropdown , setShowDropdown] = useState(false); 
  const {data :session} = useSession()
  // if(session){
  //   return <div>You are logged in{session.user.email} <br /> 
  //   <button onClick={signOut}>Sign Out</button></div>
  // }

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
          <div className='flex relative'>
            {session &&  <>
<button onClick={()=> setShowDropdown(!showdropdown)} onBlur={()=> {setTimeout(()=>{ 
  setShowDropdown(false)
},100)}}
 id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white mx-4 bg-blue-700
 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Welcome {session.user.email}
  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdownHover" class={`z-10 ${showdropdown?"":"hidden"} absolute left-[15rem] top-[4rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href="/dashboard" class="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="#" class="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
     
      <li>
        <Link href="#" onClick={()=>{signOut()}} class="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>
}

           
          {session && 
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg 
              text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center transition duration-300 ease-in-out"
              onClick={()=>{signOut()}}
              disabled={loading}
            >
              Logout
            </button>
          }
          {/* {!session && 
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
} */}

          {/* SignUp Button */}
          {!session && 
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
            }  
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
