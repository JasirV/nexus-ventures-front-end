import React from 'react'
import NavLogo from '../assets/navLogo.png'

const NavigationBar = () => {
  return (
    <div className='bg-primary h-28 flex justify-between'>
        <div className='flex items-center justify-center ml-10'>
            <img src={NavLogo} alt="" className='max-h-[69px]' />
        </div>
        <div className='flex justify-center gap-4 mr-20 py-10'>
            <button className='bg-white text-primary px-10'>Login</button>
            <button className='border px-9 text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavigationBar