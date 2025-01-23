import React from 'react'
import NavLogo from '../assets/logNavBarLogo.png'
const NavigationBarTwo = () => {
  return (
    <div className='bg-primary h-28 flex justify-between'>
            <div className='flex items-center justify-center ml-10'>
                <img src={NavLogo} alt="" className='max-h-[69px]' />
            </div>
            <div className='flex justify-center gap-4 mr-20 py-10 items-center'>
                <button className='bg-white py-2 text-primary px-10'>Login</button>
                <button className='border px-9 py-2 text-white'>Sign Up</button>
                <div className='border h-20 '></div>
                <button className=' px-9 text-primary py-2 bg-[#F9CE1F]'>Sign Up</button>
            </div>
        </div>
  )
}

export default NavigationBarTwo