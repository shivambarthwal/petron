'use client';

import { useState } from 'react';

const DashboardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    profilePic: null,
    coverPic: null,
    razorpayKey: '',
    razorpaySecret: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call to save data)
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mt-5 mx-auto p-6 bg-gray-900 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-white">Dashboard Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-400">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Profile Pic */}
        <div>
          <label className="block text-gray-400">Profile Pic</label>
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-gray-400"
          />
        </div>

        {/* Cover Pic */}
        <div>
          <label className="block text-gray-400">Cover Pic</label>
          <input
            type="file"
            name="coverPic"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-gray-400"
          />
        </div>

        {/* Razorpay Key */}
        <div>
          <label className="block text-gray-400">Razorpay Key</label>
          <input
            type="text"
            name="razorpayKey"
            value={formData.razorpayKey}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Razorpay Key"
          />
        </div>

        {/* Razorpay Secret */}
        <div>
          <label className="block text-gray-400">Razorpay Secret</label>
          <input
            type="text"
            name="razorpaySecret"
            value={formData.razorpaySecret}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Razorpay Secret"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;
