
import Content from '@/components/Content'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import { BsThreeDots } from "react-icons/bs";
import EditPreference from '@/components/modals/EditPreference';
import { useState } from 'react';
import profileImage from "/images/yele.avif"
import { channelList } from '@/components/ChannelList';
import NavDrawer from '@/components/NavDrawer';

const Home = () =>{
  const [open, setOpenModal] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  return (
    <div className='flex flex-col w-full lg:justify-center lg:items-center min-h-screen' onClick={() => setOpenNav(false)}>
     
      <div className='grid grid-cols-3 justify-between'>
        <img className='rounded-full lg:hidden md:block' src={profileImage} alt="yele" width={36} onClick={() => setOpenNav(true)} />
        <h1 className='text-xl lg:hidden md:block text-center font-semibold'>Home</h1>
      </div>
      <NavDrawer show={openNav}/>
      <div className='flex justify-start items-left lg:hidden md:block overflow-x-auto scroll-m-0'>
          {channelList.map((item, index) => 
            <div className='p-2 flex flex-col justify-center items-center' key={index}>
              <img className='rounded-full' src={item.profileImage} alt="yele" width={60} /> 
              <p className='text-lg'>{item.channelName}</p>
            </div>
          )}
      </div>
        <div className="flex justify-between lg:w-11/12 w-full bg-white rounded-xl overflow-hidden">
            <LeftSideBar/>
            <div className='border-l border-r pt-6 pb-12'>
                <div className='lg:flex justify-between p-4 hidden'>
                    <h1 className='lg:text-xl md:text-lg'>Home</h1>
                    <BsThreeDots onClick={() =>setOpenModal(true)}/>
                </div>
                <EditPreference isOpen={open} onClose={() =>setOpenModal(false)}/>
                <div className=''>
                    <Content/>
                </div>
            </div>
            <RightSideBar/>
        </div>
    </div>

  )
}

export default Home
