"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: (values,{ resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className={`w-full p-2 border rounded-md ${
                formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm mt-2">{formik.errors.username}</div>
            ) : null}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full p-2 border rounded-md ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className={`w-full p-2 border rounded-md ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-2">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mt-6">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="text-gray-500 text-sm mx-2">OR</span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        {/* Social Signup Options */}
        <div className="mt-6 flex justify-between">
          <button
            className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors duration-200 mr-2"
          >
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="w-full flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mr-2"
          >
            <FaFacebookF className="mr-2" /> Sign up with Facebook
          </button>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="w-full flex items-center justify-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition-colors duration-200"
          >
            <FaGithub className="mr-2" /> Sign up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
