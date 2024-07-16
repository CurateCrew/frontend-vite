import curateCast from "../../public/images/curate.svg";

const RightSideBar = () =>{
  return (
    <div className='flex flex-col w-4/12'>
      <div className="flex">
        <img className="rounded-full" src={curateCast} width={48} height={48} />
        <p className="mt-2 ml-2">Curatecast</p>
      </div>
      <div className="flex">
        <img className="rounded-full" src={curateCast} width={48} height={48} />
        <p className="mt-2 ml-2">Home</p>
      </div>
    </div>

  )
}

export default RightSideBar