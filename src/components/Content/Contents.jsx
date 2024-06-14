import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contents = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="p-5">
          <div className="grid lg:grid-cols-2 pt-20 gap-16">
            <div className="mx-auto">
              <LazyLoadImage
                src="/img/content.png"
                alt="Foto Destinasi"
                className=" md:h-[500px] object-cover"
              />
            </div>
            <div className="lg:pt-36 p-4 md:p-0 text-center">
              <p className="font-bold text-primary text-lg md:text-xl pb-3">
                Kenapa Memilih Kami?
              </p>
              <h1 className="font-bold text-3xl md:text-4xl pb-6 block md:hidden">
                Temukan Destinasi Wisata Impianmu Bersama Kami
              </h1>
              <h1 className="font-bold text-3xl md:text-4xl pb-6 hidden md:block">
                Temukan Destinasi Wisata Impianmu<br></br> Bersama Kami
              </h1>
              <p className="text-justify px-2 md:px-0">
                Jelajahi dunia tanpa batas dan temukan destinasi wisata
                impianmu. Dari pantai yang mempesona hingga pegunungan yang
                menakjubkan, kami hadir untuk menginspirasi petualanganmu
                berikutnya. Temukan tempat-tempat tersembunyi, budaya lokal yang
                kaya, dan pengalaman yang tak terlupakan.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="bg-black/50 h-full">
            <div className="relative h-[350px]">
              <LazyLoadImage
                src="/img/content2.jpg"
                alt="Gambar Lautan Indonesia"
                className="absolute right-0 h-[350px] w-full object-cover z-[-1]"
              />

              {/* Text Contents */}
              <div className="h-full flex justify-center items-center">
                <div className="container grid grid-col-1 gap-4">
                  <div className="text-white text-center">
                    <p className="text-md font-bold text-primary">
                      Wisata Favorit
                    </p>
                    <h1
                      className="font-bold text-2xl lg:text-4xl pb-2"
                      data-aos-delay="300"
                    >
                      Jaga Keindahan Alam untuk Generasi Masa Depan!
                    </h1>
                    <p className="text-sm">
                      Di Nusatawan, Anda akan menemukan informasi tentang
                      bagaimana Anda dapat berwisata secara berkelanjutan,
                      <span className="block">
                        Mari kita bersama-sama ciptakan masa depan pariwisata
                        yang lebih berkelanjutan!
                      </span>
                    </p>

                    <div className="pt-5">
                      <a
                        href="/campaign"
                        className="bg-primary h-14 p-2 px-8 font-semibold rounded-md hover:opacity-90 hover:bg-slate-700 hover:scale-105 duration-300"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
