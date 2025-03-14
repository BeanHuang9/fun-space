import BloggerBean from "@/assets/images/blogger-bean.jpg";
import BloggerDou from "@/assets/images/blogger-dou.jpg";
import BloggerBB from "@/assets/images/blogger-bb.jpg";
import SpotCard from "@/components/SpotCard";
import Activity from "@/components/Activity";
import TravelCard from "@/components/TravelCard";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
// import axios from "axios"
import { homeApi } from '@/api/home';
import { useEffect, useState } from "react";//useEffect => render後執行

//promise
// axios.get('api網址')
// axios.post('api網址', { username: 'emilys', password: 'emilyspass', })
// axios.get('/mock/spot').then(data => console.log(data))

// async/await => promise 寫得較同步化
// const getSpotData = async () => {
//   const data = await axios.get('/mock/spot')
//   console.log('async',data);
// }
// getSpotData()

const carouselImages = [
  "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// const spotData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "台灣",
//     category: "Taiwan",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "日本",
//     category: "japan",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "新加坡",
//     category: "singapore",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "越南",
//     category: "vietnam",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "冰島",
//     category: "island",
//   },
// ];


//怎麼變成跑api
// const activityData = [
//   {
//     image: "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "台北101觀景台門票",
//     subTitle: "觀景台 • 台北",
//     category: "taipei101",
//     star: 4,
//     num: 700,
//     price: 420,
//     tags: ["熱賣中", "免費取消"],
//   },
//   {
//     image: "https://plus.unsplash.com/premium_photo-1693236418889-3e0d269c59ad?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "故宮博物院門票",
//     category: "national-palace-museum",
//     subTitle: "博物館 • 台北",
//     star: 4.5,
//     num: 1200,
//     price: 350,
//     tags: ["熱門", "快速通關"],
//   },
//   {
//     image: "https://images.unsplash.com/photo-1613018264526-88faa8dadbfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "台北101觀景台門票",
//     subTitle: "觀景台 • 台北",
//     category: "taipei101",
//     star: 4.0,
//     num: 700,
//     price: 420,
//     tags: ["熱賣中", "免費取消"],
//   },
//   {
//     image: "https://plus.unsplash.com/premium_photo-1693236418889-3e0d269c59ad?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "故宮博物院門票",
//     category: "national-palace-museum",
//     subTitle: "博物館 • 台北",
//     star: 4.5,
//     num: 1200,
//     price: 350,
//     tags: ["熱門", "快速通關"],
//   },
// ];

const travelData = [
  {
    image: "https://images.unsplash.com/photo-1696947347316-e4d91e64c6bb?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "北海道雪祭探險｜浪漫雪景與冰雕奇觀5天4夜",
    subTitle: "5天",
    blogger: {
      image: BloggerBean,
      name: "豆子",
      category: "日本旅遊",
      date: "2025年02月10日",
      views: 520,
      likes: 15,
    },
  },
  {
    image: "https://images.unsplash.com/photo-1619382749984-02521fd9fc43?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "巴里島浮潛秘境｜探索藍夢島與魔鬼的眼淚4天3夜",
    subTitle: "4天",
    blogger: {
      image: BloggerDou,
      name: "豆芽",
      category: "海島旅遊",
      date: "2025年03月05日",
      views: 850,
      likes: 22,
    },
  },
  {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "法國南部浪漫之旅｜普羅旺斯薰衣草田6天5夜",
    subTitle: "6天",
    blogger: {
      image: BloggerBB,
      name: "豆苗",
      category: "歐洲旅行",
      date: "2025年04月15日",
      views: 675,
      likes: 30,
    },
  },
];

const Home = () => {
  const [spotData, setSpotData] = useState([])
  const [activityData, setActivityData] = useState([])
  const navigate = useNavigate();

  // const changePage = (url) => {
  //     navigate(`/cityInfo/${item.category}`);
  //     // navigate(url)
  // }

  const getSpotCardData = async() => {
    const { data } = await homeApi.getSpotData()
    setSpotData(data)
    // console.log('async',data);
  }

  const getActivityData = async() => {
    const { data } = await homeApi.getSpots()
    setActivityData(data)
    // console.log('async',data);
  }



  useEffect(() =>{
    getSpotCardData()
    getActivityData()
  },[])
  return (
    <>

      <div className="h-[500px] banner-carousel">
        <Carousel>
          {carouselImages.map((item, index) => (
            <img key={item}
                src={item}
                className="block w-full h-full object-cover"
                alt={`image-${index}`}
              />
            ))}
        </Carousel>
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
                onClick={() => navigate(`/list/${item.category}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">精選活動</h2>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-4 py-4">
            {activityData.slice(0, 4).map((item) => (
              <Activity
                key={item.category}
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                star={item.star}
                num={item.num}
                price={item.price}
                tags={item.tags}
                onClick={() => navigate(`/product/${item.id}`)}
              />
            ))}


          </div>

          <div className="text-center mt-5">
            <button
              onClick={() => navigate('/list')}
              className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-gray-500 rounded-lg border border-solid border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              查看更多
            </button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-extrabold dark:text-white">
            熱門旅遊回憶
          </h2>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-4 py-4">
            {travelData.map((item, index) => (
              <TravelCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
