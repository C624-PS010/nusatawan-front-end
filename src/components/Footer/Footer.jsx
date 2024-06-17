import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto py-14 px-6">
        <div className="grid xl:grid-cols-12 grid-col-1 gap-5 lg:gap-40">
          <div className="lg:col-span-4 col-span-12">
            <Link to="/">
              <LazyLoadImage src="/img/logo.jpg" alt="Logo Nusatawan" className="h-12" />
            </Link>
            <p className="mt-6">
              Temukan cerita perjalanan inspiratif dan panduan wisata yang membawa Anda mengenal
              lebih dekat keindahan Nusantara.
            </p>
            <Link to="/tentang" className="flex justify-start gap-10 md:w-[75%] my-6">
              <FaWhatsappSquare size={25} />
              <FaFacebookSquare size={25} />
              <FaInstagramSquare size={25} />
              <FaTwitterSquare size={25} />
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-2 md:col-span-5 ">
            <h5 className="tracking-wide text-gray-100 font-semibold">Important Links</h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/campaign"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Campaign
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 md:col-span-5 ">
            <h5 className="tracking-wide text-gray-100 font-semibold">Support</h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Booking
                </a>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="md:text-left text center container mx-auto py-7 px-6">
          <p className="mb-0">&copy; 2024 Nusatawan Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
