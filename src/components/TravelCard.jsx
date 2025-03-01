import BloggerInfo from "./BloggerInfo";
import { useNavigate } from "react-router-dom";


const TravelCard = ({ image, title, subTitle, blogger }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full md:flex-1 text-white text-left">
      <div onClick={() => navigate('/product')} className="cursor-pointer">
        <img className="rounded-lg w-full h-60 object-cover" src={image} alt={title} />
        <p className="mt-2 text-sm text-gray-900 dark:text-white">{subTitle}</p>
        <h3 className="my-2 text-l h-14 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <BloggerInfo {...blogger} />
    </div>
  );
};

export default TravelCard;
