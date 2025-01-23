import React from 'react'
import HomeImage from '../../assets/homeImage.png'
const Home = () => {
  return (
    <div className='mt-6'>
        <div className='flex'>
            {/* leftsection */}
            <div className='w-1/2 ml-12 flex items-center flex-col justify-center'>
                <p className='text-6xl font-bold'>Power and  <span className='text-[#FFCC33]'>Success
                Inspired </span> Life</p>
                <div className=' pr-24'>
                <p className='mt-5 text-xl font-normal'>Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful.</p>
                <p className='mt-6 text-xl font-normal'>Thank you for choosing us as your gateway to a secure life. </p>
                <p className='mt-4 text-xl font-normal'>Let's travel together, have a better tomorrow.</p>
                </div>
                <div className='flex justify-start w-full gap-5 mt-10'>
                    <button className='bg-primary text-white px-8 py-3'>Online Courses</button>
                    <button className='border border-black px-8 py-3'>Videos</button>
                </div>
            </div>
            {/* rithsection */}
            <div>
                <img src={HomeImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home