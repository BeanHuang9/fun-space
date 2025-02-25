import BloggerInfo from "./BloggerInfo";

const TravelBlog = ({ image, title, subTitle, blogger }) => {
  return (
    <div className="w-full md:flex-1 text-white text-left">
      <a href="cityInfo.html">
        <img className="rounded-lg w-full h-60 object-cover" src={image} alt={title} />
        <p className="mt-2 text-sm text-gray-900 dark:text-white">{subTitle}</p>
        <h3 className="my-2 text-l h-14 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
      </a>
      <BloggerInfo {...blogger} />
    </div>
  );
};

export default TravelBlog;
