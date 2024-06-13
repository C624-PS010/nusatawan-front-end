import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button/index";
import Rating from "../components/Rating/Rating";
import Articles from "../network/Articles";
import convertDate from "../utils/dateConverter";
import config from "../utils/config";

const ArtikelDetails = () => {
  const { id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await Articles.getArticleById(id);
        setArticleData({ ...response.data });
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      }
    };

    fetchArticles();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className="h-[300px] overflow-hidden">
        <img
          src={`${config.baseUrl}/images/articles/${articleData.image}`}
          alt={`Gambar artikel ${articleData.title}`}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          Ditulis oleh {articleData.user.username} pada {convertDate(articleData.createdAt)}
        </p>
        <h1 className="text-3xl font-bold pb-10">{articleData.title}</h1>
        <p className="text-justify">{articleData.content}</p>
      </div>

      <div className="mt-8">
        <hr className="border-t border-gray-300 w-full mx-auto" />
      </div>

      {/* Rating */}
      <div className="justify-center items-center text-center p-10">
        <h1 className="text-2xl font-bold mb-4 text-tertiary">Berikan Kami umpan balik</h1>
        <Rating />
      </div>

      <div className="mb-8">
        <hr className="border-t border-gray-300 w-full mx-auto" />
      </div>

      {/* Komentar */}
      <div className="px-20 pb-10">
        <h1 className="my-5 pl-2 text-3xl font-bold text-tertiary">Komentar</h1>
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-1 bg-slate-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <Button classname="bg-primary w-full">Kirim</Button>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-1">
          <div className="w-full border-2 rounded bg-slate-100 p-6">
            <h1 className="font-bold">Aufaa Husniati</h1>
            <p className="text-slate-500">03 Juni 2024</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelDetails;
