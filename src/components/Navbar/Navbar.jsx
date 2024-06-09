import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import Button from "../Button";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import { IoCallOutline } from "react-icons/io5";

// eslint-disable-next-line react-refresh/only-export-components
export const NavbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Artikel",
        link: "/artikel",
    },
    {
        name: "Campaign",
        link: "/campaign",
    },
    {
        name: "Tentang",
        link: "/tentang",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground(true);
            } else {
                setNavbarBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 right-0 w-full z-50 ${navbarBackground ? 'bg-white text-tertiary shadow-md' : 'bg-transparent text-white'}`}>
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                                <img src='./public/img/logo.jpg'
                                    alt="Logo Nusatawan"
                                    className="h-9" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6 font-semibold text-lg">
                                {NavbarLinks.map((navLink) => (
                                    <li className="py-4" key={navLink.name}>
                                        <NavLink to={navLink.link} className="nav-link">
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Button Booking */}
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <button type="button" className="inline-flex items-center px-8 py-2 font-extrabold text-primary bg-white rounded-3xl border-2 border-primary hover:bg-slate-200 hover:text-primary focus:z-10">
                                    <IoCallOutline className="w-5 h-5 mr-2" />
                                    Booking
                                </button>
                            </a>
                            
                            {/* Button Login */}
                            <a href="/login" target="_blank">
                                <Button classname="bg-primary rounded-3xl w-full">
                                    Login
                                </Button>
                            </a>


                            {/* Button User Logout */}
                            <div className='hidden md:block'>
                                <div className="py-4 relative group cursor-pointer">
                                    <div className='dropdown flex items-center'>
                                        <span style={{ color: '#FFAA19' }}>
                                            <FaUserCircle size={50} className='transition-all duration-200 group-hover:rotate-180'></FaUserCircle>
                                        </span>
                                    </div>

                                    {/* Dropdown User Keluar*/}
                                    <div className='absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md'>
                                        <ul className="space-y-3">
                                            <li className='font-semibold'>
                                                <h1>Hello, Lorem!</h1>
                                            </li>
                                            <li>
                                                <a className="inline-block w-full rounded-md p-2 hover:bg-primary/10"
                                                    href='/'
                                                >
                                                    Keluar
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hamburger */}
                            <div className='md:hidden block'>
                                {showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all"
                                        size={30} />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all"
                                        size={30} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            </nav>
        </>
    )
}

export default Navbar;

