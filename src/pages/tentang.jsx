import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TentangPage = () => {
  return (
    <section>
      <div>
        <LazyLoadImage src="img/group.jpg" alt="" />
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="lg:py-10">
          <p className="text-lg font-semibold text-tertiary">Hey!</p>
          <h1 className="font-bold text-3xl lg:text-5xl text-primary ">
            We are Nusatawan
          </h1>
          <p className="mt-5 p-2 text-base lg:font-medium lg:text-base">
            Di Nusatawan, Kami bertujuan untuk mempermudah proses pencarian
            destinasi ekowisata dan destinasi alternatif yang belum populer.
            <span className="block">
              Dan tahukah Anda? Kami percaya bahwa platform yang ingin kami
              kembangkan ini tidak hanya akan memberikan manfaat
            </span>{" "}
            <span className="block">
              {" "}
              kepada pengguna dalam menemukan destinasi wisata yang sesuai,
              tetapi juga akan berkontribusi pada keberlanjutan
            </span>{" "}
            <span className="block">
              {" "}
              lingkungan dari segi ekonomi maupun dari segi lingkungan tempat
              wisata itu sendiri.
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="justify-center items-center text-center pt-20">
          <h1 className="font-bold text-primary text-3xl lg:text-5xl">
            Meet Our Team
          </h1>
          <div className="pt-5">
            <p className="text-sm p-2 lg:font-medium lg:text-base">
              kami adalah sekelompok individu yang bersemangat bekerja sama
              untuk mencapai tujuan kami.
              <span className="block">
                Dibalik kesuksesan platform ini, Kenali wajah-wajah Kami!
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-20 px-7 md:px-20 lg:px-48 pb-10">
          <div>
            <LazyLoadImage
              src="img/aufaa1.jpg"
              alt="Gambar Team"
              className="lg:w-auto lg:h-[400px]"
            />
          </div>
          <div>
            <p className="font-bold text-primary pb-2 lg:pb-5">
              Front-End Developer
            </p>
            <h1 className="font-bold text-2xl pb-2 lg:text-4xl lg:pb-5">
              Aufaa Husniati
            </h1>
            <p className="text-justify">
              Mahasiswa S1 Teknik Informatika Universitas Pasundan yang saat ini
              sedang menjalani program MSIB di Dicoding dengan learning path
              Front-End Web dan Back-End. Saya memiliki ketertarikan pada bidang
              Web Development dan UI/UX Design. Saya juga mahir dalam
              menggunakan HTML, CSS, PHP, JavaScript, dan framework seperti
              Laravel, Bootstrap, dan TailwindCSS untuk membangun aplikasi web.
            </p>
            <div className="flex justify-start gap-5 lg:gap-10 md:w-[75%] my-6">
              <a href="https://github.com/aufaahusniati">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/aufaahsnt/">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.linkedin.com/in/aufaahusniati/">
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-20 px-7 md:px-20 lg:px-48 pb-10">
          <div className="block lg:hidden">
            <LazyLoadImage
              src="img/adriansyah1.jpg"
              alt="Gambar Team"
              className="lg:w-auto lg:h-[400px]"
            />
          </div>
          <div>
            <p className="font-bold text-primary pb-2 lg:pb-5">
              Back-End Developer
            </p>
            <h1 className="font-bold text-2xl pb-2 lg:text-4xl lg:pb-5">
              Adriansyah
            </h1>
            <p className="text-justify lg:pr-4">
              Saya adalah seorang mahasiswa Teknik Informatika di Universitas
              Pamulang, saat ini sedang mengikuti program SIB Batch 6 di
              Dicoding. Dengan minat yang kuat pada teknologi dan pemrograman,
              saya bercita-cita untuk menjadi Junior Web Developer.
            </p>
            <div className="flex justify-start gap-5 lg:gap-10 md:w-[75%] my-6">
              <a href="https://github.com/Sekonso">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/ancaadri9">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.linkedin.com/in/adriansyah-anca-197270214/">
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <LazyLoadImage
              src="img/adriansyah1.jpg"
              alt="Gambar Team"
              className="lg:w-auto lg:h-[400px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-20 px-7 md:px-20 lg:px-48 pb-10">
          <div>
            <LazyLoadImage
              src="img/risky1.jpg"
              alt="Gambar Team"
              className="lg:w-auto lg:h-[400px]"
            />
          </div>
          <div>
            <p className="font-bold text-primary pb-2 lg:pb-5">
              Back-End Developer
            </p>
            <h1 className="font-bold text-2xl pb-2 lg:text-4xl lg:pb-5">
              Risky
            </h1>
            <p className="text-justify">
              Saya adalah seseorang yang sangat tertarik dengan dunia teknologi
              yang terus berkembang. Saat ini, saya fokus untuk mengasah
              kemampuan saya dalam pengembangan web dan aplikasi, terutama dalam
              PHP dan JavaScript. Saya memiliki minat yang kuat untuk menemukan
              tren dan inovasi terbaru dalam industri teknologi, dan selalu
              bersemangat untuk memperluas pengetahuan dan keahlian saya.
            </p>
            <div className="flex justify-start gap-5 lg:gap-10 md:w-[75%] my-6">
              <a href="https://github.com/Aerossky">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/risky_goh/">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.linkedin.com/in/risky-aerossky/">
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangPage;
