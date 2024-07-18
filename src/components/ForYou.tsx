import profileImage from "/images/yele.avif";
import eventImage from "/images/event.png";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { TfiComment } from "react-icons/tfi";
import { LuRefreshCcw } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import RemoveCast from "./modals/RemoveCast";
import { useState } from "react";
import ProfileModal from "./modals/ProfileModal";

const ForYou: React.FC = () => {
  const [open, setOpenModal] = useState(false);
  const [openModal, setProfileModal] = useState(false);

  const handleToggle = () => {
    if (openModal) {
      setProfileModal(false);
    }
  };
  return (
    <div
      className="border-t border-b lg:p-8 py-2 px-0 text-textLight"
      onClick={handleToggle}
    >
      <RemoveCast isOpen={open} onClose={() => setOpenModal(false)} />
      <ProfileModal isOpen={openModal} onClose={() => setProfileModal(false)} />
      <div className="flex justify-between">
        <div className="flex justify-between">
          <img
            className="rounded-full lg:w-12 w-12"
            src={profileImage}
            // width={48} height={48}
            onClick={() => setProfileModal(true)}
          />
          <div className="flex lg:text-md text-sm">
            <p className="mt-2 ml-2">Yele Badamosi</p>
            <p className="mt-2 ml-2">@yele</p>
            <p className="mt-2 ml-2">. 15min</p>
          </div>
        </div>
        <div className="flex lg:mt-0 mt-2">
          <BsThreeDots className="mx-2" />
          <IoMdClose onClick={() => setOpenModal(true)} />
        </div>
      </div>
      <p className="lg:ml-12 ml-12 lg:text-md text-sm">
        @wbnns is currently speaking to our OnHack fellows - starting by sharing
        his onchain story and how he got involved with the @base ecosystem.
      </p>
      <img className="mt-2" src={eventImage} />
      <div className="flex justify-between">
        <div className="flex my-4">
          <TfiComment />
          <LuRefreshCcw className="mx-2" />
          <CiHeart />
        </div>
        <div className="flex my-4">
          <CiGrid41 />
          <CiBookmark className="mx-2" />
          <GoShare />
        </div>
      </div>
      <div className="flex lg:text-md text-sm">
        <p>77 replies</p>
        <p>• 6 likes</p>
      </div>
    </div>
  );
};

export default ForYou;
