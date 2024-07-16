import React from 'react'
import Content from '@/components/Content'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import { BsThreeDots } from "react-icons/bs";
import EditPreference from '@/components/modals/EditPreference';
import { useState } from 'react';

const Dashboard = () =>{
  const [open, setOpenModal] = useState(false)

  const handleToggle = () => {
    if(open){
      setOpenModal(false)
    }
  }

  return (
    <div className='flex flex-col items-center pt-16 min-h-screen bg-gray-100' onClick={handleToggle}>
      <div className='text-center my-8'>
       <p>Hurray Fatima!! Your </p> 
       <p>“For you” feed has successfully been curated </p> 
      </div>
      <div className="flex justify-between p-8 w-10/12  shadow-lg bg-white mb-8 rounded-xl overflow-hidden">
        <LeftSideBar/>
        <div className='border-l border-r'>
          <div className='flex justify-between p-2'>
          <h1 className='text-xl'>Home</h1>
          <BsThreeDots onClick={() =>setOpenModal(true)}/>
          </div>
          <EditPreference isOpen={open}/>

          <Content/>
      </div>
        <RightSideBar/>
      </div>
      <button className='bg-cyan rounded text-white p-2'>Proceed to my feed</button>
    </div>

  )
}

export default Dashboard
