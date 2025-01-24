import React, { useState } from 'react'
import { IoIosLogOut } from 'react-icons/io'
import Logo from '../../assets/adminSideLogo.png'
import { Link } from 'react-router'
import UserList from '../../components/userList'
import TransactionList from '../../components/transactionList'
import VideoManagement from '../../components/videoManagement'
import TopReceiversList from '../../components/topReceiversList'

const UserDashbord = () => {
    const [item,setItem]=useState("userlist")

    const onchange=(value)=>{
        setItem(value)
    }
  return (
    <div className="flex h-screen  bg-primary pr-5 pt-5 pb-5 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-1/4 bg-primary text-white">
        <div className="p-6 font-bold text-xl pl-5">
        <img src={Logo} alt="" />
        </div>
        <nav className="mt-10">
          <ul>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg  ${item==="dashboard"?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('userlist')}}>User List</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('transactionlist')}}>Transaction List</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('videomanagement')}} >Video Management</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('topreceiverslist')}}>Top Receivers List</li>
            </div>
            <div className='border-t  pt-1 pb-1'>
              <Link to='/'>
            <li className="px-6 py-3 flex hover:bg-white hover:text-primary font-bold text-lg text-white gap-2"><IoIosLogOut size={30} />Logout</li>
              </Link>
            </div>
          </ul>
        </nav>
      </aside>
      {item==="userlist"&&<UserList/>}
      {item==="transactionlist"&&<TransactionList/>}
      {item==="videomanagement"&&<VideoManagement/>}
      {item==="topreceiverslist"&&<TopReceiversList/>}
      </div>
  )
}

export default UserDashbord