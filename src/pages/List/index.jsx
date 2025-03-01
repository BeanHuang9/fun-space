// import React from 'react'
import { Carousel } from "flowbite-react";
import { Dropdown } from "flowbite-react";

const List = () => {
  return (
    <>
      <div className="cityHeader w-full ">
        <div className="container mx-auto px-4 py-10">
          <nav className="flex mb-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="./"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  首頁
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    台北
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-extrabold dark:text-white mb-4">
                台北
              </h2>
              <p className="text-gray-700 mb-6">
              台灣的首都──台北是個充滿活力的現代都市，一個處處有驚喜的現代都會！士林夜市、饒河街夜市或華西街夜市，有價廉物美的精品向購物狂招手。美食愛好者更加不容錯過這些人氣夜市中的地道佳餚，例如珍珠奶茶、臭豆腐、牛肉湯與牛肉麵。
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-bold">特色節慶</p>
                  <p>8月</p>
                  <p className="text-sm text-gray-500">大稻埕情人節</p>
                </div>
                <div>
                  <p className="font-bold">建議旅遊時長</p>
                  <p>3天</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-stretch">
              <div className="w-full h-full">
                <Carousel className="h-full">
                  <img
                    src="https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552993873-0dd1110e025f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                  <img
                    src="https://images.unsplash.com/photo-1614272341544-8615b6afc191?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                </Carousel>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">
            台北當地玩樂
          </h2>

          <div className="flex justify-start items-start gap-5 mt-8">
            <div className="hidden md:block px-5 py-4 text-xl w-1/4  border border-gray-200">
              <div className="filterList">
                <p className="text-xl">特色節慶</p>

                <ul
                  className="relative max-h-72 mt-2 overflow-y-auto text-base text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownSearchButton"
                >
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        水上樂園
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-2"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-2"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        博物館
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-3"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-3"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        公園＆花園
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center pl-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-4"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-4"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        動物園＆水族館
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-4"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-4"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        纜車
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-5"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-item-5"
                        className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        觀景台
                      </label>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                      onClick="toggleSubMenu('submenu-1')"
                    >
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-6"
                          type="checkbox"
                          className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox-item-6"
                          className="w-full ms-2 text-base font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          觀光行程
                        </label>
                      </div>
                      <i
                        id="submenu-icon-1"
                        className="fa-solid fa-chevron-down text-gray-500"
                      ></i>
                    </div>
                    <ul id="submenu-1" className="hidden pl-6 space-y-2">
                      <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            id="checkbox-item-7"
                            type="checkbox"
                            className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-item-7"
                            className="text-gray-900 dark:text-gray-300"
                          >
                            多日遊
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            id="checkbox-item-8"
                            type="checkbox"
                            className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-item-8"
                            className="text-gray-900 dark:text-gray-300"
                          >
                            健行
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            id="checkbox-item-9"
                            type="checkbox"
                            className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-item-9"
                            className="text-gray-900 dark:text-gray-300"
                          >
                            美食觀光
                          </label>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-3/4">
              <div className="flex justify-start items-center">
                <span className="text-sm text-gray-600 mr-4">找到27項結果</span>

                <div className="w-[300px]">
                  <form className="relative">
                    <input
                      type="text"
                      placeholder="探索全球目的地 / 活動"
                      className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                    <button
                      type="submit"
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-7l4 4"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>

                <div className="ml-4 sortBox">
                  <span className="text-sm text-gray-600 mr-2">排序方式：</span>

                  <Dropdown
                    label="請選擇"
                    dismissOnClick={false}
                    className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none "
                  >
                    <Dropdown.Item>熱門活動</Dropdown.Item>
                    <Dropdown.Item>評價最高</Dropdown.Item>
                    <Dropdown.Item>價格（從低到高）</Dropdown.Item>
                    <Dropdown.Item>最新上線</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              <article className="flex flex-wrap md:flex-nowrap items-stretch border border-gray-300 rounded-lg bg-white w-full">
                <div className="2/5 md:w-2/5">
                  <a href="cityInfo.html">
                    <img
                      src="https://images.unsplash.com/photo-1436891461396-6df41158de09?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="台北101"
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
                          <h2 className="text-lg font-bold text-gray-900">
                            台北金魚藝術展 | Art Aquarium in Taipei
                          </h2>
                        </div>
                      </a>
                      <button className="ml-auto text-right">
                        <i className="fa-regular fa-heart text-gray-500"></i>
                      </button>
                    </div>

                    <ul className="my-2 text-xs inline-flex space-x-2 ">
                      <li className="bg-gray-100 px-2 py-1 ">熱賣中</li>
                      <li className="bg-gray-100 px-2 py-1 ">免費取消</li>
                    </ul>

                    <p className="text-sm text-gray-600">
                      東京最具話題的「藝術水族館®」首次來台！將各種金魚悠游於水族缸中的樣子，通過光彩、音樂和香氣演繹的一種藝術。歡迎您來體驗！
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                      <span>📍 台北</span>
                    </div>
                  </div>

                  <div className="flex items-center my-4">
                    <div className="flex items-center">
                      <p className="ms-1 mr-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.0
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
                      已售出 700+
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex flex-wrap md:flex-nowrap items-stretch border border-gray-300 rounded-lg bg-white w-full">
                <div className="2/5 md:w-2/5">
                  <a href="cityInfo.html">
                    <img
                      src="https://images.unsplash.com/photo-1436891461396-6df41158de09?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="台北101"
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
                          <h2 className="text-lg font-bold text-gray-900">
                            台北金魚藝術展 | Art Aquarium in Taipei
                          </h2>
                        </div>
                      </a>
                      <button className="ml-auto text-right">
                        <i className="fa-regular fa-heart text-gray-500"></i>
                      </button>
                    </div>

                    <ul className="my-2 text-xs inline-flex space-x-2 ">
                      <li className="bg-gray-100 px-2 py-1 ">熱賣中</li>
                      <li className="bg-gray-100 px-2 py-1 ">免費取消</li>
                    </ul>

                    <p className="text-sm text-gray-600">
                      東京最具話題的「藝術水族館®」首次來台！將各種金魚悠游於水族缸中的樣子，通過光彩、音樂和香氣演繹的一種藝術。歡迎您來體驗！
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                      <span>📍 台北</span>
                    </div>
                  </div>

                  <div className="flex items-center my-4">
                    <div className="flex items-center">
                      <p className="ms-1 mr-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.0
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
                      已售出 700+
                    </p>
                  </div>
                </div>
              </article>

              <div className="w-full mt-6 text-right">
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <i className="fa-solid fa-angle-left"></i>
                  </a>

                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default List;
