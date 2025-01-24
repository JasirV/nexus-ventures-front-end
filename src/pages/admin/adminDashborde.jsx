import React, { useState } from 'react'
import Logo from '../../assets/adminSideLogo.png'
import { IoIosLogOut } from "react-icons/io";
import Dashbordadmin from '../../components/dashbordadmin';
import BusinessPartners from '../../components/businessPartners';
import BusinessPromoters from '../../components/businessPromoters';
import NewRequests from '../../components/newRequests';
import Invoice from '../../components/invoice';
import Renewal from '../../components/renewal';
import { Link } from 'react-router-dom';
const AdminDashborde = () => {
    const [item,setItem]=useState("dashboard")

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
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg  ${item==="dashboard"?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('dashboard')}}>Dashboard</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('business-partners')}}>Business partners</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('business-promoters')}} >Business promoters</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('new-requests')}}>New requests</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('invoice')}}>Invoice</li>
            </div>
            <div className='border-t border-b pt-1 pb-1'>
            <li className={`px-6 py-3 hover:bg-white hover:text-primary font-bold text-lg ${item===""?'bg-white text-primary':'bg-none text-white'}`} onClick={()=>{onchange('renewal')}}>Renewal</li>
            </div>
            <div className='border-t  pt-1 pb-1'>
              <Link to='/'>
            <li className="px-6 py-3 flex hover:bg-white hover:text-primary font-bold text-lg text-white gap-2"><IoIosLogOut size={30} />Logout</li>
              </Link>
            </div>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      {item==="dashboard"&&<Dashbordadmin/>}
      {item==="business-partners"&&<BusinessPartners/>}
      {item==="business-promoters"&&<BusinessPromoters/>}
      {item==="new-requests"&&<NewRequests/>}
      {item==="invoice"&&<Invoice/>}
      {item==="renewal"&&<Renewal/>}

    </div>
  )
}

export default AdminDashborde