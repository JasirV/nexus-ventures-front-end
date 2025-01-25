import React, { useState } from 'react'
import LoginBg from '../../assets/loginBg.png'
import { FaEnvelope, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router';
const Login = () => {
  const naviagete=useNavigate()
  const [value,setValue]=useState('')
  const handleSubmit=()=>{
    if(value){
      naviagete('/admindash')
    }else{
      naviagete("/userdash")
    }
  }
  return (
    <div className=' p-20 '>
        {/* leftsection */}
        <div className='mt-8 flex bg-primary rounded-3xl'>
        <div className=''>
            <img src={LoginBg} alt="" />
        </div>
        {/* rightsection */}
        <div className="flex items-center justify-center flex-grow">
      <div className="w-full  p-8 space-y-6 ">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <p className="text-sm text-center text-white">
          Fill in your credentials and click on the Login button
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              User name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <FaEnvelope className="absolute right-3 top-3 text-[#04009A]" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
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
          <div className="flex justify-end text-sm text-white">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

          <div className="flex items-start justify-between">
            <button
              type="submit"
              className="  py-2 font-normal px-10  bg-white "
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-start text-sm text-white">
          <a href="#" className="hover:underline font-light">
          Don’t have an account? <span className='font-bold'>Sign Up</span> 
          </a>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Login