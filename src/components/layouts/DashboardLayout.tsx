// import React from 'react'

// import Views from '@/views'
// import Header from '../modules/Header'
// import LeftNav from '../modules/LeftNav'
// import RightNav from '../modules/RightNav'

// const HeaderActionsStart = () => {
//     return (
//         <>
//             {/* <MobileNav />
//             <SideNavToggle /> */}
//         </>
//     )
// }

// const HeaderActionsEnd = () => {
//     return (
//         <>
//             {/* <SidePanel />
//             <UserDropdown hoverable={false} /> */}
//         </>
//     )
// }

// export default function DashboardLayout() {

//     return (
//         <div className="app-layout-classic flex flex-auto flex-col text-[#63676B]">
//             <div className="flex flex-auto min-w-0">
//                 <LeftNav />
//                 <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
//                     <Header
//                         className="shadow dark:shadow-2xl"
//                         headerStart={<HeaderActionsStart />}
//                         headerEnd={<HeaderActionsEnd />}
//                     />
//                     <div className="h-full flex flex-auto flex-col">
//                         <Views />
//                     </div>
//                 </div>
//                 <RightNav/>
//             </div>
//         </div>
//     )
// }

import React from "react";
import Content from "@/components/Content";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import EditPreference from "@/components/modals/EditPreference";
import { useState } from "react";
import profileImage from "/images/yele.avif";
import { channelList } from "@/components/ChannelList";
import NavDrawer from "@/components/NavDrawer";
import { useAppSelector } from "@/store";
import { MdEditNote } from "react-icons/md";


const DashboardLayout = () => {
  const [open, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const auth = useAppSelector((state) => state.auth.user)

  return (
    <div
      className="flex flex-col w-full lg:justify-center lg:items-center lg:pt-16 pt-8 min-h-screen mx-4"
      onClick={() => setOpenNav(false)}
    >
      <div className="text-center lg:my-8 my-4 lg:block hidden">
        <p> { `Hurray ${auth.profile.username}!! Your` }</p>
        <p>
          {" "}
          <strong>“For you”</strong>feed has successfully been curated{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 justify-between">
        <img
          className="rounded-full lg:hidden md:block"
          src={auth.profile.pfp_url}
          alt={auth.profile.username}
          width={36}
          onClick={() => setOpenNav(true)}
        />
        <h1 className="text-xl lg:hidden md:block text-center font-semibold">
          Home
        </h1>
      </div>
      <NavDrawer show={openNav} />
      <div className='lg:hidden flex overflow-x-auto p-4 space-x-4 bg-white shadow-md'>
          {channelList.map((item, index) => (
            <div
              className='flex flex-col items-center min-w-[80px] max-w-[80px] w-1/4'
              key={index}
            >
              <img
                className='rounded-full object-cover w-full h-[60px] max-w-[60px]'
                src={item.profileImage}
                alt="Channel"
                width={60}
              />
              <p className='text-sm text-center mt-2 truncate'>{item.channelName}</p>
            </div>
          ))}
        </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 mx-auto justify-between lg:p-8 md:p-2 lg:w-10/12 w-full shadow-lg bg-white mb-8 rounded-xl overflow-hidden">
        <div className="col-span-2">
         <LeftSideBar />
        </div>
        <div className="col-span-6 border-l border-r">
          <div className="lg:flex justify-between p-4 hidden">
            <h1 className="lg:text-xl md:text-lg">Home</h1>
            <MdEditNote onClick={() => setOpenModal(true)} />
          </div>
          <EditPreference isOpen={open} onClose={() => setOpenModal(false)} />
          <div>
            <Content />
          </div>
        </div>
        <div className="col-span-4">
          <RightSideBar />
        </div>
      </div>
      <button className="bg-cyan rounded text-white p-2 mb-4">
        Proceed to my feed
      </button>
    </div>
  );
};

export default DashboardLayout;
