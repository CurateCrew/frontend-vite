import { CiSearch } from "react-icons/ci";
import SuggestedUser from "./SuggestedUser";
import SuggestedChannel from "./SuggestedChannel";
import Recommendations from "./Recommendations";

const RightSideBar: React.FC = () =>{
  return (
    <div className='flex flex-col w-8/12 p-4'>
      <div>
        <CiSearch className="absolute mt-3 mx-2"/>
        <input type="text" className="border rounded py-2 px-6 w-full" placeholder="Search"/>
      </div>
      <Recommendations 
        style="mt-16"
        title={["Top Profile Recommendations “For you”"]} 
        description={"Recommendations are based on your set preferences from the previous step. You can always edit them in your “for you’ feed"}/>

      <SuggestedUser fullname="Fatima Ummi" userhandle="@ummiux"/>
      <SuggestedUser fullname="Amarachi Ugwu" userhandle="@amarachiugwu"/>
      <SuggestedUser fullname="Glory Agatevure" userhandle="@agatevureglory"/>
      
      <Recommendations 
        style="mt-16"
        title={["Top Channel", "Recommendations “For you”"]}
        description="Recommendations are based on your set preferences from the previous step. You can always edit them in your “for you’ feed"
      />

      <SuggestedChannel channelName="/dev" channelHandle="/dev"/>
      <SuggestedChannel channelName="/design" channelHandle="/design"/>
      <SuggestedChannel channelName="/founders" channelHandle="/founders"/>

    </div>

  )
}

export default RightSideBar