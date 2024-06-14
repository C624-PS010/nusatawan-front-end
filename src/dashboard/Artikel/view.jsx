import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Articles from "../../network/Articles";
import config from "../../utils/config";
import convertDate from "../../utils/dateConverter";
import DataTable from "../components/DataTable";
import localUser from "../../utils/localUser";

const ViewArtikel = () => {
  const { id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const articleResponse = await Articles.getArticleById(id);
      const articleCommentResponse = await Articles.getAllComments(id);

      setArticleData({ ...articleResponse.data });
      setArticleComments(articleCommentResponse.data);
      setLoading(false);
      console.log(articleResponse.data);
    } catch (error) {
      console.error("Failed to fetch articles: ", error);
    }
  };

  const deleteCommentHandler = async (articleId, commentId) => {
    try {
      const localUserData = localUser.get();

      if (!localUserData) throw new Error("User not logged in");
      else if (!localUserData.isAdmin) throw new Error("User is not admin");

      const responseData = await Articles.deleteComment(articleId, commentId);

      window.alert("Berhasil menghapus data");
      window.dispatchEvent(new Event("refreshArticle"));
      console.log(responseData);
    } catch (error) {
      console.error(error);

      if (error.data && error.data.status === 401) window.alert("User not logged in");
      else if (error.data && error.data.status === 403) window.alert("User is not admin");
      else if (error.data) window.alert(error.data.message);
      else window.alert(error.message);
    }
  };

  const columns = ["Body", "User"];
  const actions = [
    {
      label: "Delete",
      onClick: (commentId) => {
        deleteCommentHandler(articleData.id, commentId);
      },
    },
  ];
  const buttonStyles = ["bg-red-600"];

  useEffect(() => {
    fetchArticles();

    window.addEventListener("refreshArticle", fetchArticles);

    return () => {
      window.removeEventListener("refreshArticle", fetchArticles);
    };
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

      <h1 className="text-3xl font-bold my-5">Comments</h1>

      <DataTable
        columns={columns}
        data={articleComments}
        actions={actions}
        buttonStyles={buttonStyles}
      />
    </section>
  );
};

export default ViewArtikel;
