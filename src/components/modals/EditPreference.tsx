import React, { useCallback, useEffect, useState } from 'react'
import Recommendations from '../Recommendations'
import { tags } from '../TagItems'
import { suggestedUsers } from '../SuggestedUsers'
import profileImage from "../../../public/images/yele.avif"
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

interface IModal {
  isOpen: boolean
  onClose: () => void
}

const EditPreference: React.FC<IModal> = ({ isOpen, onClose })=> {

  const [selected, setSelected] = useState<boolean>(false)
  const [selectedList, setSelectedList] = useState<string[]>([])

  const handleSelection = useCallback(() => {
    setSelectedList(tags)
  },[])

  useEffect(()=> {
    handleSelection()
  },[handleSelection])

  console.log(selectedList)
  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-50 flex justify-center items-center p-4 lg:mt-60 overflow-y-auto w-full"
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
          >
          <div className="relative w-full max-w-md h-full md:h-auto p-4">
            <div className="relative border bg-white rounded-lg shadow-lg">
              <div className='lg:mt-80 mt-0 flex justify-end p-4 hover:cursor-pointer' onClick={onClose}>
                <IoMdClose/>
              </div>
              <Recommendations
              titleStyle='mt-4 mx-4 text-2xl'
              title={["Edit feed preferences and interests"]} 
              description={"Feed recommendations on your “For you” tab are based on your set preferences and interests"}/>  
              <p className='p-4 mx-4'>Select the cast categories you are interested in seeing on your “For you” tab</p>
              <div className='grid lg:grid-cols-3 grid-cols-2 px-4' >
                {selectedList.map((item, index) => 
                <div>
                  {selected && item ? 
                    <div className='border border-green-500 flex justify-between m-1 rounded-full p-1'>
                      <button className={`{"text-left p-1  font-semibold text-sm text-green-500`}
                        onClick={() => setSelected(true)}
                        key={index}>{item}
                      </button>
                      <FaCheckCircle className='mt-2' color='green'/>
                    </div> :
                      <button className={`text-left p-1 border rounded-full m-1 text-sm text-textLight`}
                        onClick={() => setSelected(true)}
                      key={index}>{item} </button>
                   }
                </div>
              )}
             </div> 
             <p className='p-4 mt-4'>Don’t show casts from these 👇 handles</p>
             <div className='grid lg:grid-cols-2 grid-cols-1 px-2'>
                {suggestedUsers.map((item, index) =>
                  <div className='flex justify-between p-2 border rounded-full m-1 hover:cursor-pointer' key={index} onClick={() =>{}}>
                    <div className='flex'>
                      <img className='rounded-full' src={profileImage} alt="profile image" width={16}/>
                      <p className='ml-2 text-sm'>{item}</p>
                    </div>               
                    <IoIosCloseCircle className='mt-1 mx-2' size={16} color='grey'/>
                  </div>
                 )}
             </div>
             <div className='m-4 pb-8 flex'>
                 <button className='bg-cyan p-2 rounded-lg text-white'>Save changes</button>
                 <p className='text-cyan mt-2 ml-4 hover:cursor-pointer'>Clear interests</p>
             </div>
            </div>
          </div>
        </div>
      )}
    </>
    
  )
}

export default EditPreference