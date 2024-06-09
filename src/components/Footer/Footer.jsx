import {
    FaWhatsappSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="container mx-auto py-14 px-6">
                <div className="grid md:grid-cols-12 grid-col-1 gap-5 lg:gap-40">
                    <div className="lg:col-span-4 col-span-12">
                        <a href="/">
                            <img src="./public/img/logo.jpg" 
                                alt="Logo Nusatawan" 
                                className="h-12"    
                            />
                        </a>
                        <p className="mt-6">
                            Temukan cerita perjalanan inspiratif dan panduan wisata yang membawa Anda mengenal lebih dekat keindahan Nusantara.
                        </p>
                        <div className="flex justify-start gap-10 md:w-[75%] my-6">
                            <FaWhatsappSquare size={25} />
                            <FaFacebookSquare size={25} />
                            <FaInstagramSquare size={25} />
                            <FaTwitterSquare size={25} />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-2 md:col-span-5 ">
                        <h5 className="tracking-wide text-gray-100 font-semibold">Important Links</h5>
                        <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a href="/"
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="/artikel"
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a href="/campaign"
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Campaign
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 lg:col-span-2 md:col-span-5 ">
                        <h5 className="tracking-wide text-gray-100 font-semibold">Support</h5>
                        <ul className="list-none mt-6 space-y-2">
                            <li>
                            <li>
                                <a href=""
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Reservasi 
                                </a>
                            </li>
                                <a href="/tentang"
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a href="/tentang"
                                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                                >
                                    Kontak Kami
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-700">
                        <div className="md:text-left text center container mx-auto py-7 px-6">
                            <p className="mb-0">
                                &copy; 2024 Nusatawan Team. All rights reserved.
                            </p>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer