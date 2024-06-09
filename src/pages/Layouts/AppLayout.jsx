import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>
    )
}

export default AppLayout
