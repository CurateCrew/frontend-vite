import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { TfiComment } from "react-icons/tfi";
import { LuRefreshCcw } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import RemoveCast from "./modals/RemoveCast";
import { useEffect, useState } from "react";
import ProfileModal from "./modals/ProfileModal";
import { fetchUserFeed, useAppDispatch, useAppSelector } from "@/store";
import { timeAgo } from "@/utils/formatDate";
import Loading from "./shared/Loading";

const ForYou: React.FC = () => {
  const [open, setOpenModal] = useState(false);
  const [openModal, setProfileModal] = useState(false);
  const feeds = useAppSelector((state) => state.allfeed.apifeed.data.casts)
  const dispatch = useAppDispatch()
  const { fid } = useAppSelector((state) => state.auth.user.profile)


  useEffect(() => {
    dispatch(fetchUserFeed(`${fid}`))

  }, [dispatch, fid]);

  const handleToggle = () => {
    if (openModal) {
      setProfileModal(false);
    }
  };

  

  return (
    
    <Loading loading={feeds.length < 1}>
      <RemoveCast isOpen={open} onClose={() => setOpenModal(false)} />
      { feeds.map((feed) => (
       <div key={feed.hash}
       className="border-t border-b lg:p-8 py-2 px-0 text-textLight flex flex-col gap-2 "
       onClick={handleToggle}
       >
          <ProfileModal isOpen={openModal} onClose={() => setProfileModal(false)} />
          
          <div className="flex justify-between">
            <div className="flex justify-between">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={feed.author.pfp_url}
                onClick={() => setProfileModal(true)}
              />
              <div className="flex lg:text-md text-sm">
                <p className="mt-2 ml-2 font-bold">{feed.author.display_name}</p>
                <p className="mt-2 ml-2 hidden sm:block">@{feed.author.username}</p>
                <p className="mt-2 ml-2">{timeAgo(feed.timestamp)} ago</p>
              </div>
            </div>
            <div className="flex lg:mt-0 mt-2">
              <BsThreeDots className="mx-2" />
              <IoMdClose onClick={() => setOpenModal(true)} />
            </div>
          </div>
          <p className="lg:text-md text-sm w-full">
          {feed.text}
          </p>
          {feed.embeds[0]?.url && <img className="mt-2" src={feed.embeds[0]?.url} />}
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
            <p>{feed.replies.count} replies • {feed.reactions.likes_count} likes</p>
          </div>
        </div>
      ))}
    </Loading>
  );
};

export default ForYou;
