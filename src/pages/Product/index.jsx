import { useState, useRef, useEffect } from "react";
import ImageBox from "@/components/ImageBox";
import { homeApi } from '@/api/home';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'

const Product = () => {
  const { id } = useParams() // id 是字串
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({})
  const optionsRef = useRef(null);
  const [date, setDate] = useState('')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [sessiontime, setSessiontime] = useState('')
  const [people, setPeople] = useState(1)

  const getData = async() => {
    const { data } = await homeApi.getSpots()
    const selectedProduct = data.find(item => item.id === Number(id))
    setProduct(selectedProduct)
    setPickup(selectedProduct.plan.pickup[0])
    setDropoff(selectedProduct.plan.dropoff[0])
    setSessiontime(selectedProduct.plan.sessiontime[0])
    console.log(selectedProduct);
  }

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  // 錨點到方案區塊
  const scrollToOptions = () => {
    if (optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePickup = (isPickup, item) => {
    if (isPickup) {
      setPickup(item)
    }
    console.log(item);
  }

  useEffect(() => {
    getData()
  }, [])

  if (!product.id) return null

  return (
    <>
      <div className="cityHeader w-full">
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
              <li>
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
                  <a
                    href="cityList.html"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    台北
                  </a>
                </div>
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
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          {/* <ImageBox images={Array.from({ length: 3 }, () => product.image)} /> */}
          <ImageBox images={product.imgs} />
       </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-start items-start gap-5">
          <div className="w-2/3">
            <div className="flex justify-between items-center space-x-2 mb-2">
              <div className="flex justify-start items-center gap-2">
                <span className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  展覽
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h2>
              </div>
              <button className="ml-auto text-right">
                <i className="fa-regular fa-heart text-gray-500"></i>
              </button>
            </div>

            <div className="flex items-center text-sm text-gray-500 mt-8 space-x-4">
              <span>📍 台北</span>
              <span>
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
                  <p className="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">
                    已售出 700+
                  </p>
                </div>
              </span>
            </div>

            <p className="text-base text-justify leading-8 text-gray-600">
              {parse(product.desc)}
            </p>
          </div>
          <div className="w-1/3 px-5 py-4 border border-gray-200 rounded-lg">
            <div className="text-teal-600 text-lg font-bold">NT$ {product.price} 起</div>
            <button
              type="button"
              className="py-2 my-2 bg-teal-500 text-white text-base rounded-lg w-full"
              onClick={scrollToOptions}
            >
              選擇方案
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100" id="options" ref={optionsRef}>
        <div className="container mx-auto px-4 py-10">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">選擇方案</h3>

          <article className="flex flex-wrap items-stretch border border-gray-300 rounded-lg bg-white w-full">
            <div className="p-4 flex flex-wrap flex-col justify-between w-full">
              <div>
                <div className="flex justify-between items-center space-x-2 mb-2">
                  <div className="flex justify-start items-center gap-2">
                    <h2 className="text-lg font-bold text-gray-900">
                      {product.plan.name}
                    </h2>
                  </div>

                  <div className="text-right">
                    <span className="mx-2 text-teal-600 text-lg font-bold">
                      NT$ {product.plan.price} 起
                    </span>
                    <button
                      className="px-10 py-2 my-2 text-teal-600 text-base rounded-lg border border-gray-300 w-40"
                      onClick={toggleContent}
                    >
                      {isOpen ? "收起" : "選擇"}
                    </button>
                  </div>
                </div>

                <ul className="my-2 text-xs inline-flex space-x-2">
                  {product.plan.tags.map(i => (
                    <li key={i} className="bg-gray-100 px-2 py-1">{i}</li>
                  ))}
                </ul>

                <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                  <span>📍 {product.plan.city}</span>
                </div>
              </div>

              <ul className="block pl-4 my-4 text-sm list-disc">
                <li>
                  【一般票】
                  <br />
                  票券禁售轉讓
                  <br />
                  進場參觀時間為1個小時
                  <br />
                  個人因素退票酌收10%手續費
                </li>
              </ul>
            </div>

            {isOpen && (
              <div className="w-full">
                <div className="mx-auto p-4 border-t border-gray-300">
                  <div>
                    <h3 className="my-2 text-base font-bold tracking-tight text-gray-900">
                      兌換期
                    </h3>
                    <ul className="block pl-6 mb-4 text-sm list-disc">
                      <li>
                        憑證兌換期為2024-12-23 11:00:00至2025-05-31 20:00:00
                      </li>
                    </ul>
                  </div>

                  <h3 className="my-2 text-base font-bold tracking-tight text-gray-900">
                    選擇日期、選項
                  </h3>

                  <div className="flex justify-start items-start gap-5">
                    {/* 出發日期 */}
                    <div className="w-1/2">
                      <p className="my-2 text-sm tracking-tight text-gray-500">
                        請選擇出發日期
                      </p>
                      <div className="w-full border border-gray-300 p-2 rounded-lg bg-white text-gray-700">
                        <input value={date} onChange={e => setDate(e.target.value)} type="date" className="w-full outline-none" />
                      </div>
                    </div>

                    {/* 上車與下車地點 */}
                    <div className="w-1/2">
                      <div className="mb-6">
                        <p className="my-2 text-sm tracking-tight text-gray-500">
                          上車地點
                        </p>
                        <div className="flex items-center space-x-2">
                          {product.plan.pickup.map(item => (
                            <label key={item} className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                            <input onChange={(e) => e.target.checked && setPickup(item)} checked={item === pickup} type="radio" name="boarding-location" />
                            {item}
                          </label>
                          ))}
                        </div>
                      </div>


                      {/* 下車地點 */}
                      <div className="w-full">
                        <div className="mb-6">
                          <p className="my-2 text-sm tracking-tight text-gray-500">
                            下車地點
                          </p>
                          <div className="flex items-center space-x-2">
                            {product.plan.dropoff.map(item => (
                              <label key={item} className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                                <input onChange={(e) => e.target.checked && setDropoff(item)} checked={item === dropoff} type="radio" name="dropoff-location" />
                                {item}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>


                      {/* 場次時間 */}
                      <div className="mb-6">
                        <p className="my-2 text-sm tracking-tight text-gray-500">
                          場次時間
                        </p>
                        <div className="flex items-center space-x-2">
                          {product.plan.sessiontime.map(item => (
                            <label key={item} className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                              <input onChange={(e) => e.target.checked && setSessiontime(item)} checked={item === sessiontime} type="radio" name="radio-time" />
                              {item}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* 人數選擇 */}
                      <div className="mb-6">
                        <p className="my-2 text-sm tracking-tight text-gray-500">
                          選擇數量
                        </p>
                        <div className="flex justify-between items-center space-x-4">
                          <span className="text-base font-medium">人數</span>
                          <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 text-xl font-bold text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200" onClick={() => setPeople(prev => Math.max(prev - 1, 1))}>
                              −
                            </button>
                            <span className="text-lg font-medium">{people}</span>
                            <button className="w-8 h-8 text-xl font-bold text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200" onClick={() => setPeople(prev => prev + 1)}>
                              ＋
                            </button>
                            <span className="text-sm text-gray-500">每人</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 按鈕區 */}
                  <div className="mt-6 text-right">
                    <span className="text-2xl font-semibold text-gray-700">
                      總計 NT$ {people * product.plan.price}
                    </span>
                    <button className="px-2 py-2 my-2 bg-indigo-500 text-white text-base rounded-lg w-40 opacity-80 hover:opacity-100">
                      加入購物車
                    </button>
                    <button className="px-2 py-2 my-2 bg-teal-500 text-white text-base rounded-lg w-40 opacity-80 hover:opacity-100">
                      立即訂購
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* <ToggleContent /> */}
      {/* <DropdownMenu /> */}
    </>
  );
};

export default Product;
