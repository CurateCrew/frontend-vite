import { CiCircleInfo } from "react-icons/ci";

interface IRecommendation {
  title: string[]
  description: string
  titleStyle: string
  descriptionStyle?: string
}

const Recommendations: React.FC<IRecommendation> = ({title, description, titleStyle, descriptionStyle}) => {
  return(
    <div className="p-2">
        <div className={`flex ${titleStyle}`}>
        <p className="mt-2 ml-2 font-semibold">{
          title.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        </p>
      </div>
      <div className={`flex justify-center items-center $${descriptionStyle}`}>
        <CiCircleInfo size={36} className="mr-2 md:block"/>
        <p className="mt-2 ml-2 text-textLight">{description}</p>
      </div>
    </div>
  )
}

export default Recommendations