const ListCard = ({ image, title, tags, summary, category, star, sale }) => {
  return (
    <article className="flex flex-wrap md:flex-nowrap items-stretch border border-gray-300 rounded-lg bg-white w-full">
      <div className="2/5 md:w-2/5">
        <a href="cityInfo.html">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-cover "
          />
        </a>
      </div>

      <div className="3/5 md:w-3/5 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center space-x-2 mb-2">
            <a href="cityInfo.html">
              <div className="flex justify-start items-center gap-2">
                <span className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  展覽
                </span>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              </div>
            </a>
            <button className="ml-auto text-right">
              <i className="fa-regular fa-heart text-gray-500"></i>
            </button>
          </div>

          {/* <ul className="my-2 text-xs inline-flex space-x-2 ">
            <li className="bg-gray-100 px-2 py-1 ">熱賣中</li>
            <li className="bg-gray-100 px-2 py-1 ">免費取消</li>
          </ul> */}

          <ul className="my-2 text-xs inline-flex space-x-2">
            {tags.map((item, idx) => (
              <li key={idx} className="bg-gray-100 px-2 py-1">
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600">
            {summary}
          </p>

          <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
            <span>📍 {category}</span>
          </div>
        </div>

        <div className="flex items-center my-4">
          <div className="flex items-center">
            <p className="ms-1 mr-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {star}
            </p>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>

          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <p className="text-sm font-medium text-gray-900  hover:no-underline dark:text-white">
            已售出 {sale}+
          </p>
        </div>
      </div>
    </article>
  );
};

export default ListCard;
