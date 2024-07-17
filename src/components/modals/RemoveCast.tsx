import React from 'react'

interface IModal {
  isOpen: boolean
  onClose: () => void
}

const RemoveCast: React.FC<IModal> = ({isOpen, onClose})=> {
  return (
    <div>
      { isOpen && (
          <div className='flex flex-col lg:text-md text-sm'>
          <div className='flex justify-between'>
            <p className='font-semibold lg:mt-0 mt-2'>Cast removed from your feed</p>
            <button className='border rounded-full p-2 text-cyan' onClick={onClose}>Undo</button>
          </div>
          <p className='mt-2'>Tell us more so we can adjust your feed.</p>
          <p className='p-2 rounded-full border mt-2'>Not interested in this topic</p>
          <p className='p-2 rounded-full border mt-2'>Not interested in Yele Bademosi’s casts</p>
          <p className='p-2 rounded-full border my-2'>Not appropriate for Curatecast</p>
        </div>
      )}
    </div>
    
  )
}

export default RemoveCast