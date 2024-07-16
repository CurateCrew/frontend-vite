import React from 'react'
import Tabs from '@/components/HomeMiddle'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'

const Dashboard = () =>{
  return (
    <div className='flex flex-col items-center pt-24 min-h-screen bg-gray-100'>
      <div className='text-center my-8'>
       <p>Hurray Fatima!! Your </p> 
       <p>“For you” feed has successfully been curated </p> 
      </div>
      <div className="flex justify-between p-16 w-2/3  shadow-lg bg-white mb-8 rounded-xl overflow-hidden">
        <LeftSideBar/>
        <div className=''>
          <Tabs/>
        </div>
        <RightSideBar/>
      </div>
    </div>

  )
}

export default Dashboard
