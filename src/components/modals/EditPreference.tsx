import React from 'react'
import Recommendations from '../Recommendations'
import { tags } from '../TagItems'
import { suggestedUsers } from '../SuggestedUsers'
import profileImage from "../../../public/images/yele.avif"
import { IoIosCloseCircle } from "react-icons/io";

interface IModal {
  isOpen: boolean
}

const EditPreference: React.FC<IModal> = ({ isOpen })=> {
  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-50 overflow-y-auto flex justify-center items-center p-4 mt-60"
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-md h-full md:h-auto p-4">
            <div className="relative bg-white rounded-lg shadow">
              <Recommendations
              style='mt-4'
              title={["Edit feed preferences and interests"]} 
              description={"Feed recommendations on your “For you” tab are based on your set preferences and interests"}/>  
              <p className='p-4'>Select the cast categories you are interested in seeing on your “For you” tab</p>
              <div className='grid grid-cols-3' >
                {tags.map((item, index) => 
                  <button className='text-left p-2 border rounded-full m-1 text-sm text-textLight' key={index}>{item}</button>
              )}
             </div> 
             <p className='p-2 mt-4'>Don’t show casts from these 👇 handles</p>
             <div className='grid grid-cols-2'>
                {suggestedUsers.map((item, index) =>
                  <div className='flex justify-left p-2 border rounded-full m-1 hover:cursor' key={index} onClick={() =>{}}>
                    <img className='rounded-full' src={profileImage} alt="profile image" width={16}/>
                    <p className='ml-2 text-sm'>{item}</p>
                    <IoIosCloseCircle className='mt-1 mx-2' size={16} color='grey'/>
                  </div>
                 )}
             </div>
             <div className='m-4 flex'>
                 <button className='bg-cyan p-2 rounded-lg text-white'>Save changes</button>
                 <p className='text-cyan mt-2 pb-2 ml-4'>Clear interests</p>
             </div>
            </div>
          </div>
        </div>
      )}
    </>
    
  )
}

export default EditPreference