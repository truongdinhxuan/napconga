import { faBars, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/napgaimages/logo.jpg"
const HeaderNavBar = () => {
    return <div className="header-navbar mx-10 rounded-b-3xl bg-[#8B0000] shadow-xl font-[arial]">
        <nav className="navbar w-7/8 m-auto *:text-xl flex justify-between items-center text-white">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="w-12" />
            {/* Home */}
            <div className="header-menu flex items-center">
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHouse} size="xl" />
                </NavLink>
                <div className="search-bar ml-5">
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="shadow-xl block w-70 p-4 ps-10 text-sm text-white border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500" placeholder="Tìm kiếm sản phẩm..." required />
                            <button type="submit" className="hover:cursor-pointer text-white absolute end-2.5 bottom-2.5 bg-[#FF5722] hover:bg-[#ff5622b5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Categories */}
            <div className="header-link-list py-4 px-3 hover:bg-[#FF5722] hover:scale-120 transition rounded-xl">
                <button className="items-center flex">
                    <FontAwesomeIcon icon={faBars} className="mr-2" />
                    <span>Danh mục sản phẩm</span>
                </button>
            </div>
            {/* Linking */}
            <div className="navbar-link flex items-center gap-6">
                {/* Blog */}
                <NavLink to="">
                    Blog
                </NavLink>
                {/* Về chúng tôi */}
                <NavLink to="">
                    Về chúng tôi
                </NavLink>
                {/* Liên Hệ */}
                <NavLink to="">
                    Liên hệ
                </NavLink>
            </div>
        </nav>
    </div>
}

export default HeaderNavBar