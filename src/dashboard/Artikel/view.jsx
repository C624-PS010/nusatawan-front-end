import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Articles from "../../network/Articles";
import config from "../../utils/config";
import convertDate from "../../utils/dateConverter";

const ViewArtikel = () => {
  const { id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <section className="p-20 overflow-y-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Detail Artikel</h1>
        <Link to="/dashboard/artikel">
          <button
            type="button"
            className="font-semibold text-white border bg-red-600 border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 text-center"
          >
            Back
          </button>
        </Link>
      </div>
      <div className="bg-white p-5 border rounded-md shadow-md w-full">
        <div className="w-full">
          {/* Image */}

          <img
            src={`${config.baseUrl}/images/articles/${articleData.image}`}
            alt="Gambar artikel"
            className="w-full"
          />
          {/* Detail */}
          <div>
            <ul className="pt-10">
              <li className="font-semibold">
                Title : <span className="font-normal"> {articleData.title} </span>
              </li>
              <li className="font-semibold">
                Date : <span className="font-normal"> {convertDate(articleData.createdAt)} </span>
              </li>
              <li className="font-semibold">
                Author : <span className="font-normal"> {articleData.user.username} </span>
              </li>
              <li className="font-semibold">
                Category : <span className="font-normal"> {articleData.category} </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Content */}
        <div className=" pt-10">
          <h1 className="text-lg font-bold">{articleData.title}</h1>
          <p className="text-justify">{articleData.content}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewArtikel;
