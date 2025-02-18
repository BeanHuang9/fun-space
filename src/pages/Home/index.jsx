import Blogger from "@/assets/images/blogger-bean.jpg";
import SpotCard from "@/components/SpotCard";
import Activity from "@/components/Activity";
import { useNavigate } from "react-router-dom";

const carouselImages = [
  "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const spotData = [
  {
    image:
      "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "台灣",
    category: "Taiwan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "日本",
    category: "Japan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "新加坡",
    category: "Singapore",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "越南",
    category: "Vietnam",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "冰島",
    category: "Ísland",
  },
];

const activityData = [
  {
    image: "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "台北101觀景台門票",
    subTitle: "觀景台 • 台北",
    start: "4.0",
    num: "700+",
    price: "420",
    tags: ["熱賣中", "免費取消"],
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1693236418889-3e0d269c59ad?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "故宮博物院門票",
    subTitle: "博物館 • 台北",
    start: "4.5",
    num: "1200+",
    price: "350",
    tags: ["熱門", "快速通關"],
  },
  {
    image: "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "台北101觀景台門票",
    subTitle: "觀景台 • 台北",
    start: "4.0",
    num: "700+",
    price: "420",
    tags: ["熱賣中", "免費取消"],
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1693236418889-3e0d269c59ad?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "故宮博物院門票",
    subTitle: "博物館 • 台北",
    start: "4.5",
    num: "1200+",
    price: "350",
    tags: ["熱門", "快速通關"],
  },
];

const Home = () => {
  const navigate = useNavigate();

  // const changePage = (url) => {
  //     navigate(`/cityInfo/${item.category}`);
  //     // navigate(url)
  // }

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-[500px] overflow-hidden">
          {carouselImages.map((item, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                src={item}
                className="block w-full h-full object-cover"
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="container mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">熱門景點</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5 py-4">
            {spotData.map((item) => (
              <SpotCard
                key={item.category}
                image={item.image}
                title={item.title}
                onClick={() => navigate(`/cities/${item.category}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">精選活動</h2>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-4 py-4">
            {activityData.map((item) => (
              <Activity
                key={item.title}
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                start={item.start}
                num={item.num}
                price={item.price}
                tags={item.tags}
                onClick={() => navigate(`/activity/${item.title}`)}
              />
            ))}


          </div>

          <div className="text-center mt-5">
            <a
              href="cityList.html"
              className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-gray-500 rounded-lg border border-solid border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="w-full">查看更多</span>
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">
            熱門旅遊回憶
          </h2>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-4 py-4">
            <div className="w-full md:flex-1 text-white text-left">
              <a href="cityInfo.html">
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="mt-2 text-sm text-gray-900 dark:text-white">
                  6天
                </p>
                <h3 className="my-2 text-l h-14 font-bold tracking-tight text-gray-900 dark:text-white">
                  沖繩餵樹懶、看鯨鯊、開真人版卡丁車｜私藏景點6天5夜
                </h3>
              </a>
              <div className="flex items-center space-x-2">
                <img
                  src={Blogger}
                  alt="blogger-bean"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900 text-sm">
                      豆子
                    </span>
                    <span className="text-gray-500 text-sm">日本旅遊</span>
                    <button className="text-pink-500 font-medium text-sm">
                      追蹤
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>2025年01月17日</span>
                    <span className="mx-2">|</span>
                    <span>301 人氣</span>
                    <span className="mx-2">,</span>
                    <span>7 讚</span>
                  </div>
                </div>

                <button className="ml-auto">
                  <i className="fa-regular fa-heart text-gray-500"></i>
                </button>
              </div>
            </div>
            <div className="w-full md:flex-1 text-white text-left">
              <a href="cityInfo.html">
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="mt-2 text-sm text-gray-900 dark:text-white">
                  4天
                </p>
                <h3 className="my-2 text-l h-14 font-bold tracking-tight text-gray-900 dark:text-white">
                  大阪秘境達摩寺 環球影城攻略｜大阪京都4天3夜
                </h3>
              </a>
              <div className="flex items-center space-x-2">
                <img
                  src={Blogger}
                  alt="blogger-bean"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900 text-sm">
                      豆子
                    </span>
                    <span className="text-gray-500 text-sm">日本旅遊</span>
                    <button className="text-pink-500 font-medium text-sm">
                      追蹤
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>2025年01月17日</span>
                    <span className="mx-2">|</span>
                    <span>301 人氣</span>
                    <span className="mx-2">,</span>
                    <span>7 讚</span>
                  </div>
                </div>

                <button className="ml-auto">
                  <i className="fa-regular fa-heart text-gray-500"></i>
                </button>
              </div>
            </div>
            <div className="w-full md:flex-1 text-white text-left">
              <a href="cityInfo.html">
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="mt-2 text-sm text-gray-900 dark:text-white">
                  2天
                </p>
                <h3 className="my-2 text-l h-14 font-bold tracking-tight text-gray-900 dark:text-white">
                  日本最美城鎮｜岡山倉敷兩日遊
                </h3>
              </a>
              <div className="flex items-center space-x-2">
                <img
                  src={Blogger}
                  alt="blogger-bean"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900 text-sm">
                      豆子
                    </span>
                    <span className="text-gray-500 text-sm">日本旅遊</span>
                    <button className="text-pink-500 font-medium text-sm">
                      追蹤
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>2025年01月17日</span>
                    <span className="mx-2">|</span>
                    <span>301 人氣</span>
                    <span className="mx-2">,</span>
                    <span>7 讚</span>
                  </div>
                </div>

                <button className="ml-auto">
                  <i className="fa-regular fa-heart text-gray-500"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
