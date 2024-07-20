import Content from "@/components/Content";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { BsThreeDots } from "react-icons/bs";
import EditPreference from "@/components/modals/EditPreference";
import { useState } from "react";
import profileImage from "/images/yele.avif";
import { channelList } from "@/components/ChannelList";
import NavDrawer from "@/components/NavDrawer";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import { MdEditNote } from "react-icons/md";

const Ready = () => {
  const [open, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.user)

  return (
    <div
      className="flex flex-col lg:justify-center lg:items-center lg:pt-16 pt-8 min-h-screen mx-4"
      onClick={() => setOpenNav(false)}
    >
      <div className="text-center lg:my-8 my-4 lg:block hidden">
        <p> { ` Hurray ${auth.profile.username } !! Your`} </p>
        <p>
          {" "}
          <strong>“For you”</strong>feed has successfully been curated{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 justify-between">
        <img
          className="rounded-full lg:hidden md:block"
          src={profileImage}
          alt="yele"
          width={36}
          onClick={() => setOpenNav(true)}
        />
        <h1 className="text-xl lg:hidden md:block text-center font-semibold">
          Home
        </h1>
      </div>
      <NavDrawer show={openNav} />
      <div className="flex justify-start items-left lg:hidden md:block overflow-x-auto scroll-m-0">
        {channelList.map((item, index) => (
          <div
            className="p-2 flex flex-col justify-center items-center"
            key={index}
          >
            <img
              className="rounded-full"
              src={item.profileImage}
              alt="yele"
              width={60}
            />
            <p className="text-lg">{item.channelName}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between lg:p-8 md:p-2 lg:w-full w-full shadow-lg bg-white mb-8 rounded-xl h-[500px] overflow-hidden">
        <LeftSideBar />
        <div className="border-l border-r">
          <div className="lg:flex justify-between p-4 hidden">
            <h1 className="lg:text-xl md:text-lg">Home</h1>
            <MdEditNote onClick={() => setOpenModal(true)} />
          </div>
          <EditPreference isOpen={open} onClose={() => setOpenModal(false)} />
          <div>
            <Content />
          </div>
        </div>
        <RightSideBar />
      </div>
      <button
        className="bg-cyan rounded text-white p-2 mb-4"
        onClick={() => navigate("/home")}
      >
        Proceed to my feed
      </button>
    </div>
  );
};

export default Ready;
