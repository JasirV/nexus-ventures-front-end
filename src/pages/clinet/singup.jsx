import React from 'react'
import SingUpBg from '../../assets/singupbg.png'
import { FaUser, FaPhone, FaWhatsapp, FaEnvelope, FaEye, FaGlobe } from "react-icons/fa";

const Singup = () => {
  return (
    <div className='p-12 pt-16 flex justify-center'>
        <div className=' bg-primary rounded-3xl w-5/6 flex'>
            {/* rightsection */}
            <div>
                <img src={SingUpBg} alt="" />
            </div>
            {/* leftsection */}
            <div className='flex-grow p-8'>
                <div>
                <h1 className="text-3xl font-bold text-center text-white mt-5 mb-3">Sign up</h1>
        <p className="text-sm text-center font-light text-white">
          FFill in your credentials and click on the the Sign up button
        </p>
                <form className="space-y-4 mt-12">
      {/* First Name and Last Name */}
      <div className="flex space-x-4">
        <div className="w-1/2 flex flex-col gap-3">
          <label htmlFor="firstName" className="block text-sm font-normal text-white">
            First Name
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <FaUser className="absolute right-3 top-3 text-[#04009A]" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <label htmlFor="lastName" className="block text-sm font-normal text-white">
            Last Name
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <FaUser className="absolute right-3 top-3 text-[#04009A]" />
          </div>
        </div>
      </div>

      {/* Contact Number */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="contactNo" className="block text-sm font-normal text-white">
          Contact Number
        </label>
        <div className="relative mt-1">
          <input
            type="tel"
            id="contactNo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaPhone className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* WhatsApp Number */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="whatsappNo" className="block text-sm font-normal text-white">
          WhatsApp Number
        </label>
        <div className="relative mt-1">
          <input
            type="tel"
            id="whatsappNo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaWhatsapp className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* Email Address */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="email" className="block text-sm font-normal text-white">
          Email Address
        </label>
        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaEnvelope className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* State */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="state" className="block text-sm font-normal text-white">
          State
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            id="state"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaGlobe className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* Referral Code */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="referralCode" className="block text-sm font-normal text-white">
          Referral Code (Optional)
        </label>
        <input
          type="text"
          id="referralCode"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Password */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="password" className="block text-sm font-normal text-white">
          Password
        </label>
        <div className="relative mt-1">
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaEye className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* Confirm Password */}
      <div className='flex flex-col gap-3'>
        <label htmlFor="confirmPassword" className="block text-sm font-normal text-white">
          Confirm Password
        </label>
        <div className="relative mt-1">
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <FaEye className="absolute right-3 top-3 text-[#04009A]" />
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="agree"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="agree" className="text-sm font-light text-white">
        I agree to the <span className='font-semibold'>Terms and Conditions</span>  and <span className='font-semibold'>Privacy Policy.</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start gap-10 pt-6">
        <button
          type="submit"
          className="py-2  w-1/2 border border-white  text-white bg-black font-semibold "
        >
          Register
        </button>
        <button
          type="submit"
          className="py-2 w-1/2 font-semibold border border-white text-white "
        >
          Login
        </button>
      </div>
    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Singup