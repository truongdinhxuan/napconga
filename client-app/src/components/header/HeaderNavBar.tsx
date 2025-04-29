import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const HeaderNavBar = () => {
    return <div className="header-navbar bg-[#8B0000] shadow-xl font-[arial]">
        <nav className="navbar w-1/2 m-auto p-2 *:text-xl flex justify-between items-center text-white">
            {/* Home */}
            <NavLink to="/">
                <FontAwesomeIcon icon={faHouse} size="xl" />
            </NavLink>
            {/* Categories */}
            <button className="items-center flex">
                <FontAwesomeIcon icon={faBars} className="mr-2" />
                <span>Danh mục sản phẩm</span>
            </button>
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