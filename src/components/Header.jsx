import User from "@/assets/images/user.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "flowbite-react";
import { useState } from "react";
import i18n from "@/i18n";
import Modal from "@/components/Modal";
import { authApi } from '@/api/auth';
import { useUserStore } from '@/store/user'
import { Toast } from "flowbite-react";


const languageList = {
  zh: "zh_TW",
  en: "en_US",
};


// 登入流程 => 登入api => post+登入網址(https://dummyjson.com/auth/login)
// JWT => header + payload + signature簽章
// 前端提交數據給後端 => 後端在資料庫確認數據後，將數據加密成一個字串(JWT token)回傳給前端
// 前端為了要讓網頁是登入狀態，會將token存在本地
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDA5MTE3MjUsImV4cCI6MTc0MDkxNTMyNX0.LzHdFvICpCY6voFvIjDc4WM-0zwSWLXi_jned5SJCGE"



// 防呆 => 表單驗證 => 正則

// 使用者體驗流程


const Header = () => {
  const { t } = useTranslation();
  const { setToken, token, language, setLanguage } = useUserStore();
  // console.log(useStore);
  // const [language, setLanguage] = useState(languageList.zh);
  // const [isLogin, setLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false)
  const [toastText, setToastText] = useState('')

  const changLanguage = () => {
    const newLang =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLang); // 改變頁面
    i18n.changeLanguage(newLang); //改變i18語言
  };

  const handleCloseModal = () =>{
    setUsername('')
    setPassword('')
    setOpenModal(false)
  }

  const handleShowToast = (text) => {
    setShowToast(true)
    // 改變 toastText
    setToastText(text)
    setTimeout(() => {
      setShowToast(false)
      // 額外加入 => 通知訊息重置清空
      setToastText('')
    }, 3000);
  }

  //另外優化
  const login = async() => {
    try {
      const { accessToken } = await authApi.login(username, password)
      setToken(accessToken)
      // setToastText('登入成功') => 優化的 handleShowToast 直接傳入 toastText
      handleShowToast('登入成功')
    } catch(error) {
      // setToastText('使用者名稱或密碼有誤') => => 優化的 handleShowToast 直接傳入 toastText
      handleShowToast('使用者名稱或密碼有誤')
      console.log(error);
    } finally {
      setOpenModal(false)
      handleCloseModal()
    }

  }

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto h-20 px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            豆子趣太空
          </Link>
          <ul className="flex space-x-4 z-30 items-center">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                {t("start_planning")}
              </a>
            </li>
            <li
              className="text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={changLanguage}
            >
              <i className="fa-solid fa-language"></i>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <li>
              {!token ? <Button color="light" onClick={() => setOpenModal(true)}>登入</Button> : (
                  <img
                    className="w-6 h-6 rounded-full cursor-pointer"
                    src={User}
                    alt="User dropdown"
                  />
                )}
            </li>

            {token && (
              <li>
                <Button color="success" onClick={() => setToken('')}>登出</Button>
              </li>
            )}

          </ul>
        </div>
      </nav>

      {showToast && (
        <Toast className='fixed top-24 z-10 left-1/2 -translate-x-1/2'>
          <div className="pl-4 text-sm font-normal">{toastText}</div>
        </Toast>
      )}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        name={username}
        setName={setUsername}
        password={password}
        setPassword={setPassword}
        onClick={login}
      />
    </>
  );
};

export default Header;
