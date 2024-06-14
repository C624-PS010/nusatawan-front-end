import { useState, useEffect } from "react";
import ArtikelCard from "./ArtikelCard";
import Articles from "../../network/Articles";

const 
ArtikelDetail = () => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await Articles.getAllArticles();
        setArticlesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <section data-aos="fade-up" className="container pb-10">
        <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Artikel Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {articlesData.map((item) => (
            <ArtikelCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ArtikelDetail;
