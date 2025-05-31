import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav className=" shadow-xl border-b border-gray-100 dark:border-0 dark:bg-gray-900/95 dark:shadow-gray-800 sticky top-0  z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-1 lg:px-2">
        <div className="flex items-center py-2 justify-between">
          <Logo />
          <ul className="hidden md:flex gap-10 items-center">
            <li className="relative group">
              <span className="font-semibold text-lg dark:text-white text-gray-800 hover:text-pink-600 transition-all duration-300 cursor-pointer">
                Trang Chủ
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="relative group">
              <span className="font-semibold text-lg text-gray-500 hover:text-pink-600 transition-all duration-300 cursor-pointer">
                Mua Sắm
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="relative group">
              <span className="font-semibold text-lg text-gray-500 hover:text-pink-600 transition-all duration-300 cursor-pointer">
                Contact
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></div>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <Search />
            <div className="flex gap-3">
              <button className="px-6 py-2.5 text-pink-500 border border-pink-600 rounded-lg hover:bg-pink-500 hover:border-pink-700 hover:text-white transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
                Đăng Nhập
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                Đăng Ký
              </button>
            </div>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            <span className="w-6 h-0.5 bg-gray-800 group-hover:bg-pink-600 transition-colors duration-200"></span>
            <span className="w-6 h-0.5 bg-gray-800 group-hover:bg-pink-600 transition-colors duration-200"></span>
            <span className="w-6 h-0.5 bg-gray-800 group-hover:bg-pink-600 transition-colors duration-200"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
