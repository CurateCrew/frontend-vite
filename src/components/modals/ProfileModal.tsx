import React from 'react';
import profileImage from "../../../public/images/yele.avif"

interface IModal {
  isOpen: boolean
  onClose: () => void
}
const ProfileModal: React.FC<IModal> = ({ isOpen }) => {

  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-50 overflow-y-auto flex justify-center items-center mt-48"
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-md h-full md:h-auto p-4">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between p-4">
                <img className="rounded-full" 
                  src={profileImage} 
                  width={48}
                  />
                  <button className='border rounded-xl p-2'>Unfollow</button>
              </div>
              <div className='p-4'>
                <p>Yele Bademosi🟡🌐</p>
                <p>@yele</p>
                <p className='mt-2'>Contributor #001 @onboard, an onchain p2p protocol that’s creating a universally accessible gateway to the global onchain economy for everyone</p>
                <div className='flex text-textLight mt-2'>
                <p>305 following</p>
                <p className='ml-2'>844 followers</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileModal;