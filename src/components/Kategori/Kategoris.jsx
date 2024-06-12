import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kategoris = [
  {
    name: "Ekowisata",
    image: "https://nusatawan-api-test.vercel.app/images/categories/ekowisata",
  },
  {
    name: "Gunung",
    image: "https://nusatawan-api-test.vercel.app/images/categories/gunung",
  },
  {
    name: "laut",
    image: "https://nusatawan-api-test.vercel.app/images/categories/laut",
  },
  {
    name: "Pantai",
    image: "https://nusatawan-api-test.vercel.app/images/categories/pantai",
  },
  {
    name: "Religi",
    image: "https://nusatawan-api-test.vercel.app/images/categories/religi",
  },
  {
    name: "Sejarah",
    image: "https://nusatawan-api-test.vercel.app/images/categories/sejarah",
  },
  {
    name: "Seni",
    image: "https://nusatawan-api-test.vercel.app/images/categories/seni",
  },
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
          // eslint-disable-next-line react/jsx-key
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px] w-full "
            key={kategori.name}
          >
            <a href="#">
              <img
                src={kategori.image}
                alt="contoh"
                className="transition-transform group-hover:scale-110 duration-200"
              />
            </a>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex flex-col items-center w-full p-4 text-white">
                <h3 className="text-3xl font-bold mb-2">{kategori.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CardKategori;
