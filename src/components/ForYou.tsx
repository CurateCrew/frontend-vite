import profileImage from "../../public/images/yele.avif";
import videoframe from "../../public/images/videoframe.png";

const ForYou = () =>{
  return (
    <div className=''>
      <div className="flex">
        <img className="rounded-full" src={profileImage} width={48} height={48} />
        <p className="mt-2 ml-2">Yele Badamosi</p>
      </div>
      <p className="ml-12">Finally got to experience @base cafe IRL at /ethcc, what I loved the most was seeing @chintan who leads engineering at @coinbasewallet  handling the tills! Amazing leadership</p>
      <img className="ml-12 mt-2" src={videoframe}  /> 
      
    </div>

  )
}

export default ForYou