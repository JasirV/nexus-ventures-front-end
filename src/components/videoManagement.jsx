import React from 'react'
import LoogUploading from '../assets/upladingLogo.png'

const VideoManagement = () => {
  return (
    <main className="flex-1 p-6 bg-white rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">01 - 25 March, 2020</p>
          {/* Chart Placeholder */}
          <div className="mt-4 h-24 bg-gray-100 rounded-md shadow-sm flex items-center justify-center">
            <span className="text-gray-400">Chart Placeholder</span>
          </div>
        </div>
        <div>
            <p className='text-4xl font-semibold mt-5 '>Video Management</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-2'>

        <div className='flex justify-center'>
            <img src={LoogUploading} alt="" className='mt-10' />
        </div>
            <p className='font-semibold text-4xl mt-4'>Upload Video</p>
            <button className='bg-primary rounded-lg px-12 py-2 mt-2 text-white'>Upload Video</button>
        </div>
        <div>
            <p className='mt-5 font-semibold text-4xl'>Manage Uploaded Videos</p>
        </div>
        <div>
        <table className="min-w-full bg-gray-100 mt-6 ">
          <thead>
            <tr className=" text-black">
              <th className="py-3 px-4 text-left border-b">Thumbnail</th>
              <th className="py-3 px-4 text-left border-b">Title</th>
              <th className="py-3 px-4 text-left border-b">Description</th>
              <th className="py-3 px-4 text-left border-b">Logo</th>
              <th className="py-3 px-4 text-left border-b"></th>
            </tr>
          </thead>
          </table>
        </div>
        </main>
  )
}

export default VideoManagement