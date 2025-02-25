const BloggerInfo = ({ image, name, category, date, views, likes }) => {
    return (
      <div className="flex items-center space-x-2">
        <img src={image} alt="blogger-avatar" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900 text-sm">{name}</span>
            <span className="text-gray-500 text-sm">{category}</span>
            <button className="text-pink-500 font-medium text-sm">追蹤</button>
          </div>
          <div className="text-sm text-gray-500">
            <span>{date}</span>
            <span className="mx-2">|</span>
            <span>{views} 人氣</span>
            <span className="mx-2">,</span>
            <span>{likes} 讚</span>
          </div>
        </div>
        <button className="ml-auto">
          <i className="fa-regular fa-heart text-gray-500"></i>
        </button>
      </div>
    );
  };

  export default BloggerInfo;
