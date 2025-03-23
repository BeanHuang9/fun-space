// import React from 'react'
import { useEffect, useState } from "react"; //useEffect => render後執行
import { Carousel } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { homeApi } from "@/api/home";
import ListCard from "@/components/ListCard";
import { Pagination } from "flowbite-react";

const themes = ["必去玩樂", "美食品嚐", "放鬆"];

const sortMethod = [
  {
    value: 'asc',
    option: '價格（從低到高)' // 由小到大
  },
  {
    value: 'desc',
    option: '價格（從高到低)' // 由大到小
  }
]

const PAGE_SIZE = 5

const List = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [activeThemes, setActiveThemes] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const getSpots = async () => {
    const { data } = await homeApi.getSpots();
    const filterData = data.filter((item) => item.category === category);
    setCategoryData(filterData);
    setSearchData(filterData);
    console.log(filterData);
  };

  const handleSelectThemes = (item) => {
    // 主題
    let newThemes = [];
    if (activeThemes.includes(item)) {
      // 若存在
      // 移除
      newThemes = activeThemes.filter((theme) => theme !== item);
      setActiveThemes(newThemes);
    } else {
      newThemes = [...activeThemes, item];
      setActiveThemes(newThemes);
    }
    // 資料
    if (!newThemes.length) {
      setSearchData(categoryData);
    } else {
      const newData = categoryData.filter((item) =>
        newThemes.includes(item.theme)
      );
      setSearchData(newData);
    }
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const keyword = searchValue.trim()
      if (!keyword) {
        // alert('請輸入搜尋關鍵字')
        setSearchData(categoryData)
        return
      }
      const newData = categoryData.filter(item => item.title.includes(keyword))
      setSearchData(newData)
    }
  }


  const handleSort = (item) => {
    const newData = [...categoryData]
    if (item === 'asc') {
      newData.sort((a, b) => a.price - b.price)
    }
    if (item === 'desc') {
      newData.sort((a, b) => b.price - a.price)
    }
    setSearchData(newData)
    console.log(item);
  }



  useEffect(() => {
    getSpots();
  }, []);
  console.log(category);

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
                  {themes.map((item, idx) => (
                    <li key={item}>
                      <div
                        className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                        onClick={() => handleSelectThemes(item)}
                      >
                        <input
                          id={`checkbox-item-${idx}`}
                          type="checkbox"
                          checked={activeThemes.includes(item)}
                          className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-3/4">
              <div className="flex justify-start items-center">
                <span className="text-sm text-gray-600 mr-4">
                  找到{searchData.length}項結果
                </span>

                <div className="w-[300px]">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => handleSearch(e)}
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
                  </div>
                </div>

                <div className="ml-4 sortBox">
                  <span className="text-sm text-gray-600 mr-2">排序方式：</span>

                  <Dropdown
                    label="請選擇"
                    className="font-medium rounded-lg text-center inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none "
                  >
                    {sortMethod.map(item => <Dropdown.Item key={item.value} onClick={() => handleSort(item.value)}>{item.option}</Dropdown.Item>)}
                  </Dropdown>
                </div>
              </div>

              {/* todo */}
              {searchData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map(item => (
                <ListCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  tags={item.tags}
                  summary={item.summary}
                  category={item.category}
                  star={item.star}
                  sale={item.sale}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              ))}

              <Pagination currentPage={currentPage} totalPages={Math.ceil(searchData.length / PAGE_SIZE) || 1} onPageChange={onPageChange} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default List;
