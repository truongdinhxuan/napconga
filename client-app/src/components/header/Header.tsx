import { Link } from "react-router-dom"
import Logo from "../../assets/napgaimages/logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    return <header className="">
        <div className="header-home flex items-center justify-between mx-50 *:my-3">
            {/* Logo Views */}
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="annhien-vina" className="w-35" />
                </Link>
            </div>
            {/* Slogan */}
            <div className="slogan grid text-center ml-5">
                <span className="heading-title text-2xl text-red-500 font-bold ">
                    Công ty này nọ gì kia - rất chi là vô cùng
                </span>
                <span className="sub-title font-bold text-yellow-500 italic">
                    Chất lượng - Trung thực
                </span>
            </div>
            {/* Search bar */}
            <div className="search-bar ml-5">
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-70 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500" placeholder="Tìm kiếm sản phẩm..." required />
                        <button type="submit" className="hover:cursor-pointer text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
            </div>
            {/* Contacts */}
            <div className="contact grid ml-5 gap-y-5">
                <div className="flex">
                    <span className="w-24">Hotline:</span>
                    <a
                        href="tel:0971670886"
                        className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                    >
                        0971670886
                    </a>
                </div>

                <div className="flex">
                    <span className="w-24">Địa chỉ:</span>
                    <a
                        href="#"
                        className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Cầu Giấy, Hà Nội
                    </a>
                </div>

                <div className="flex">
                    <span className="w-24">Email:</span>
                    <a
                        href="mailto:truongdinh12002@gmail.com"
                        className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                    >
                        truongdinh12002@gmail.com
                    </a>
                </div>
            </div>

        </div>
        <div className="header-navlink">

        </div>
    </header>
}
export default Header