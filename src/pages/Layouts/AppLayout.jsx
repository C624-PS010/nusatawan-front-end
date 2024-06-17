import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main id="maincontent">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default AppLayout;
