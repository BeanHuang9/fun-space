import User from '@/assets/images/user.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto h-20 px-4 py-2 flex justify-between items-center">
        <Link to='/' className="text-xl font-bold text-gray-800">豆子趣太空</Link>
          <ul className="flex space-x-4 z-30">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                開始規劃
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fa-solid fa-language"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <img
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  className="w-6 h-6 rounded-full cursor-pointer"
                  src={User}
                  alt="User dropdown"
                />
                <div
                  id="userDropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bean Huang</div>
                    <div className="font-medium truncate">bean@com.tw</div>
                  </div>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
