import { CiCircleInfo } from "react-icons/ci";

interface IRecommendation {
  title: string[]
  description: string
  style: string
}

const Recommendations: React.FC<IRecommendation> = ({title, description, style}) => {
  return(
    <div className="p-2">
        <div className={`flex ${style}`}>
        <p className="mt-2 ml-2 font-semibold">{
          title.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CiCircleInfo size={36} className="mr-2 md:block"/>
        <p className="mt-2 ml-2 text-textLight">{description}</p>
      </div>
    </div>
  )
}

export default Recommendations