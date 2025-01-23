import React from 'react'
import LogoFooter from '../assets/logofooter.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-primary '>
  <div className=' flex mx-12  '>
    {/* Red Section */}
    <div className=' p-3 max-w-lg text-white'>
      <img src={LogoFooter} alt="" />
      <p className='text-lg font-light'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
      </p>
    </div>
    
    {/* Green Section */}
    <div className=' flex flex-col gap-3 mx-12 p-10 text-white'>
  <p className='font-semibold text-xl mb-4 whitespace-nowrap'>Important Links</p>
  <div className='flex flex-col gap-2'>
    <p className='font-light whitespace-nowrap'>Contact Us</p>
    <p className='font-light whitespace-nowrap'>Privacy Policy</p>
  </div>
</div>
    
    {/* Yellow Section */}
    <div className=' p-8 text-white'>
      <p className='font-semibold text-lg'>Terms & Conditions</p>
      <p className='font-light mt-2 text-base'>Contact Support</p>
      <div className='flex gap-3 mt-10'>
        {/* Red Boxes */}
        <div className='h-10 w-10 border flex justify-center items-center'><FaFacebookF  size={20}/></div>
        <div className='h-10 w-10 border flex justify-center items-center'><FaInstagram size={20}/></div>
        <div className='h-10 w-10 border flex justify-center items-center'><FaLinkedinIn size={20}/></div>
        <div className='h-10 w-10 border flex justify-center items-center'><FaSkype size={20}/></div>
      </div>
    </div>
  </div>
  <div className='px-14 mt-2'>
  <hr className='border-2'/>
  </div>
  <div className=' flex justify-center items-center p-3 text-white'>
    <p className='font-extralight'>Copyright © 2025. All rights reserved.</p>
  </div>
</div>

  )
}

export default Footer