import ArtikelDetail from "../components/Artikels/ArtikelDetail";
import SearchBar from "../components/Search/Search";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ArticlesProvider } from "../context/ArticleStateContext";

const ArtikelsPage = () => {
  return (
    <ArticlesProvider>
      <div className="relative">
        <LazyLoadImage
          src="img/artikel2.jpg"
          alt="Background Image"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-center text-white text-lg px-6 lg:text-4xl mb-4 font-bold ">
            Jelajahi Warisan Sejarah dan Budaya Indonesia
          </h1>
          <p className="lg:text-xl mb-10 text-primary animate-bounce">
            Surga Tropis yang Menanti untuk Dijelajahi!
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center justify-center pt-10 pb-20">
        <LazyLoadImage src="img/artikel.jpg" alt="" className=" object-cover" />
      </div>

      {/* Artikel Card */}
      <ArtikelDetail />
    </ArticlesProvider>
  );
};

export default ArtikelsPage;
