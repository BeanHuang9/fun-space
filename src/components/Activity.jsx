//tagCloud
const Activity = ({ image, title, subTitle, start, num, price, onClick, tags = [] }) => {
    return (
        <div className="w-full md:flex-1 text-left border border-solid border-gray-300" >
        <div href="cityInfo.html" onClick={onClick}>
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="p-2 bg-white rounded-b-lg">
          <div href="cityInfo.html" onClick={onClick}>
            <p className="mt-2 text-sm text-gray-900 dark:text-white">
                {subTitle}
            </p>
            <h3 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h3>
            <ul className="text-gray-400 text-xs inline-flex space-x-2">
                {tags.map((tag, index) => (
                <li key={index} className="bg-gray-100 px-2 py-1">
                    {tag}
                </li>
                ))}
            </ul>

          </div>
          <div className="flex items-center my-2">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {start}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <p className="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">
              已售出 {num}
            </p>
          </div>

          <div className="price text-gray-900 mt-5">NT$ {price} 起</div>
        </div>
      </div>

    )
  }

  export default Activity
