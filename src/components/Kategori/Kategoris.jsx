import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../utils/config";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const kategoris = [
  { name: "Ekowisata" },
  { name: "Gunung" },
  { name: "Laut" },
  { name: "Pantai" },
  { name: "Religi" },
  { name: "Sejarah" },
  { name: "Seni" },
];

const CardKategori = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex items-center justify-center pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl pb-3">Ragam Wisata</h1>
          <p className="">Temukan keindahan di setiap sudut Indonesia</p>
        </div>
      </div>
      <Slider {...settings} className="grid grid-cols-1 gap-5 p-10 lg:grid-cols-3 md:grid-cols-2">
        {kategoris.map((kategori) => (
          <Link
            to={`/artikel?filter=${kategori.name.toLocaleLowerCase()}`}
            className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px] w-full cursor-pointer"
            key={kategori.name}
          >
            <LazyLoadImage
              src={`/img/kategori/${kategori.name.toLowerCase()}.png`}
              alt={`Foto ${kategori.name}`}
              className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-200"
              style={{ minHeight: "400px" }} // Tambahan style untuk mengatur tinggi minimum
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex flex-col items-center w-full p-4 text-white">
                <h3 className="text-3xl font-bold mb-2">{kategori.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default CardKategori;
