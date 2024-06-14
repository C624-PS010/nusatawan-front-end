import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Nusantara", "Indonesia", "Tanah Air", "Kepulauan", "Alam Raya"],
      typeSpeed: 100, // Kecepatan pengetikan
      backSpeed: 100, // Kecepatan menghapus
      backDelay: 2000, // Waktu tunggu sebelum mulai menghapus
      startDelay: 500, // Waktu tunggu sebelum mulai mengetik
      loop: true, // Mengulangi efek mengetik
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-full">
      <div className="relative h-[100vh] bg-black/40">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[100vh] w-full object-cover z-[-1]"
        >
          <source src="video/hero.mp4"></source>
        </video>

        {/* Text Hero */}
        <div className="h-full flex justify-center items-center pt-10">
          <div className="container grid grid-col-1 gap-4">
            <div className="text-white text-center">
              <h1
                className="font-bold pb-2 text-4xl md:text-7xl w-full"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Jelajahi Pesona <br />
                <span ref={typedElementRef} className="text-primary"></span>
              </h1>
              <p className="text-sm md:text-lg" data-aos="fade-up">
                Temukan cerita perjalanan inspiratif dan panduan{" "}
                <span className="block pb-5">
                  wisata yang membawa Anda mengenal lebih dekat keindahan{" "}
                  <span className="text-primary">Nusantara</span>.
                </span>
              </p>

              <Link to="/artikel" className="bg-primary h-14 p-2 px-8 font-semibold rounded-md">
                Jelajah
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
