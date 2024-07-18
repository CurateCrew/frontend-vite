import { signOutSuccess, useAppDispatch } from "@/store";
import curateCast from "../../public/images/curate.svg";
import { GoHome } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LeftSideBar: React.FC = () =>{
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const signOut = () => {
    dispatch(signOutSuccess())
    navigate('/')
}
  return (
    <div className='lg:flex flex-col justify-between p-4 p-6 pb-12 w-6/12 hidden'>
      <div>
        <div className="flex">
          <img className="" src={curateCast} width={36} height={36} />
          <h3 className="mt-2 ml-2 font-bold">Curatecast</h3>
        </div>
        <div className="flex bg-gray-100 mt-10 p-2 rounded">
          <GoHome size={24}/>
          <p className="ml-2">Home</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <IoIosHelpCircleOutline size={18}/>
          <p className="ml-2">Help & Support</p>
        </div>
        <div className="flex mt-8 cursor-pointer" onClick={() => signOut()}>
          <RiLogoutCircleRLine size={18} color="red"/>
          <p className="text-red-400 ml-2">Log out</p>
        </div>
      </div>

    </div>

  )
}

export default LeftSideBar