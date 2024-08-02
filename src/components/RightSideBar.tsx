import { CiSearch } from "react-icons/ci";
import SuggestedUser from "./SuggestedUser";
import SuggestedChannel from "./SuggestedChannel";
import Recommendations from "./Recommendations";

const RightSideBar: React.FC = () =>{
  return (
    <div className=' lg:flex flex-col text-sm max-w-6/12 md:pl-4 lg:pt-6 pb-12 hidden'>
      <div>
        <CiSearch className="absolute mt-3 mx-2"/>
        <input type="text" className="border rounded py-2 px-6 w-full" placeholder="Search"/>
      </div>
      <Recommendations 
        titleStyle=" text-xl"
        title={["Top Profile Recommendations “For you”"]} 
        description={"Recommendations are based on your set preferences from the previous step. You can always edit them in your “for you’ feed"}/>

      <SuggestedUser fullname="Fatima Ummi" userhandle="@ummiux"/>
      <SuggestedUser fullname="Amarachi Ugwu" userhandle="@amarachiugwu"/>
      <SuggestedUser fullname="Glory Agatevure" userhandle="@agatevureglory"/>
      
      <Recommendations 
        titleStyle=" text-xl"
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