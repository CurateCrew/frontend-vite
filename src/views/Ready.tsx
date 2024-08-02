import Content from "@/components/Content";
import RightSideBar from "@/components/RightSideBar";
import EditPreference from "@/components/modals/EditPreference";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import { MdEditNote } from "react-icons/md";
import curate from "/images/curate.svg";
import { GoHome } from "react-icons/go";

const Ready = () => {
  const [open, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col ">
      <div className="flex gap-2 px-6 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8">
        <img src={curate} width={36} height={36} alt="curate logo" />
        <h3 className="text-xl font-bold mt-1 text-[#24292E]">curatecast</h3>
      </div>
      <div className="text-center px-2 my-8 text-[#63676B] ">
        <p> {` Hurray ${auth.profile.username} !! Your`} </p>
        <p>
          {" "}
          <strong>“For you”</strong>feed has successfully been curated{" "}
        </p>
      </div>
      
      <div className="w-full rounded-lg xl:w-[80%] mx-auto  xl:flex xl:pt-20 xl:bg-[#F0F2F5] xl:border xl:border-[#ccc]">
        <div className="grid  grid-cols-12 justify-between xl:p-8 md:p-2 w-[90%] sm:w-[85%] mx-auto shadow-equal-lg bg-white rounded-t-xl h-[500px] overflow-hidden">
          
          <div className="col-span-2">
            <div className="hidden xl:flex gap-2 items-center mt-4">
              <img src={curate} width={24} height={24} alt="curate logo" />
              <h3 className="text-xl font-bold mt-1 text-[#24292E]">curatecast</h3>
            </div>

            <div className="hidden xl:flex w-[90%] cursor-pointer bg-gray-100 mt-10 p-2 rounded">
              <GoHome size={24} />
              <p className="ml-2">Home</p>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-6 xl:border-l xl:border-r">
            <div className="xl:flex justify-between p-4 hidden">
              <h1 className="xl:text-lg md:text-md font-bold">Home</h1>
              <MdEditNote onClick={() => setOpenModal(true)} />
            </div>
            <EditPreference isOpen={open} onClose={() => setOpenModal(false)} />
            <div className="">
              <Content />
            </div>
          </div>

          <div className="col-span-4">
            <RightSideBar />
          </div>
        </div>
      </div>

      <div className="w-full mt-6 flex justify-center">
        <button
          className="bg-cyan rounded-lg text-white p-2 px-4 mb-4 "
          onClick={() => navigate("/home")}
        >
          Proceed to my feed
        </button>
      </div>
    </div>
  );
};

export default Ready;
