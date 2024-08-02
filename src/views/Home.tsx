import Content from "@/components/Content";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import EditPreference from "@/components/modals/EditPreference";
import { useState } from "react";
// import { channelList } from '@/components/ChannelList';
import NavDrawer from "@/components/NavDrawer";
import { MdEditNote } from "react-icons/md";
import { useAppSelector } from "@/store";

const Home = () => {
  const [open, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const auth = useAppSelector((state) => state.auth.user);

  return (
    <div
      className="flex flex-col mx-auto w-full lg:justify-center lg:items-center min-h-screen"
      onClick={() => setOpenNav(false)}
    >
      <div className="grid grid-cols-3 justify-between m-2 relative">
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
      {/* <div className='lg:hidden flex  p-4 space-x-4 bg-white shadow-md'>
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
          </div> */}
      <div className="grid grid-cols-12 mx-auto justify-between lg:w-11/12 w-full bg-white rounded-xl ">
        <div className="col-span-2">
          <LeftSideBar />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:border-l lg:border-r">
          <div className="lg:flex justify-between p-4 hidden">
            <h1 className="lg:text-xl md:text-lg">Home</h1>
            <MdEditNote onClick={() => setOpenModal(true)} />
          </div>
          <EditPreference isOpen={open} onClose={() => setOpenModal(false)} />
          <div>
            <Content />
          </div>
        </div>
        <div className="col-span-4 relative">
          <div className="fixed mr-12">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
