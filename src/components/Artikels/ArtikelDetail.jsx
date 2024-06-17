import ArtikelCard from "./ArtikelCard";
import ArtikelCardSkeleton from "./ArtikelCardSkeleton";
import { useArticleState } from "../../context/ArticleStateContext";

const ArtikelDetail = () => {
  const { filteredArticleData, loading, isError, message } = useArticleState();
  const skeleton = [1, 2, 3];

  return (
    <section data-aos="fade-up" className="container pb-10 min-h-[100vh]">
      <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
        Artikel Kami
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {loading ? (
          skeleton.map((item) => <ArtikelCardSkeleton key={item} />)
        ) : isError ? (
          <h1>{message}</h1>
        ) : filteredArticleData.length === 0 ? (
          <h1 className="text-2xl font-bold">Tidak ada artikel</h1>
        ) : (
          filteredArticleData.map((item) => (
            <ArtikelCard key={item.id} {...item} />
          ))
        )}
      </div>
    </section>
  );
};

export default ArtikelDetail;
