import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import Button from "../Button";
import { useGlobalState } from "../../context/GlobalStateContext";

const ResponsiveMenu = ({ showMenu, setShowMenu, logoutHandler }) => {
  const { userProfile, isLoggedIn } = useGlobalState();

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="font-semibold">
              Hello {userProfile ? userProfile.username : "There"}!
            </h1>
            <h1 className="text-sm text-slate-500">
              {isLoggedIn ? "Logged in" : "Guest user"}
            </h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl font-semibold">
            {NavbarLinks.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}

            {/* To login */}
            {!isLoggedIn && (
              <Link to="auth/login">
                <Button classname="bg-primary hover:bg-tertiary rounded-full w-full">
                  Login
                </Button>
              </Link>
            )}

            {/* Logout button */}
            {isLoggedIn && (
              <>
                <Link to="/dashboard">
                  <Button classname="bg-primary hover:bg-tertiary rounded-full w-full">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  classname="bg-primary hover:bg-tertiary rounded-full w-full"
                  onClick={logoutHandler}
                >
                  Keluar
                </Button>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
