import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const HomeLayout = () => {
    return <div className="h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Footer/>
    </div>
}

export default HomeLayout