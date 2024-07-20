import { signOutSuccess, useAppDispatch } from "@/store";
import curateCast from "/images/curatecast.png";
import { GoHome } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const LeftSideBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(signOutSuccess());
    navigate("/");
  };
  return (
    <div className="fixed lg:flex flex-col justify-between flex-grow lg:p-6 md:p-4 pb-12 max-w-6/12 hidden h-full">
      <div>
        <div className="flex">
          <Link to='/home'>
            <img className="" src={curateCast} width={148} height={38} />
          </Link>
        </div>
        <div className="flex bg-gray-100 mt-10 p-2 rounded">
          <GoHome size={24} />
          <p className="ml-2">Home</p>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex">
          <IoIosHelpCircleOutline size={18} />
          <p className="ml-2">Help & Support</p>
        </div>
        <div className="flex mt-8 cursor-pointer" onClick={() => signOut()}>
          <RiLogoutCircleRLine size={18} color="red"className="mt-1"/>
          <p className="text-red-400 ml-2">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
