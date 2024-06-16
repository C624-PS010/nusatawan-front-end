import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Articles from "../../network/Articles";
import config from "../../utils/config";
import convertDate from "../../utils/dateConverter";
import DataTable from "../components/DataTable";
import { useGlobalState } from "../../context/GlobalStateContext";
import { setErrorMessage } from "../../utils/errorHandler";
import NeutralAlert from "../../components/Alert/NeutralAlert";
import LoadingSpin from "../../components/Loading/LoadingSpin";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ViewArtikel = () => {
  const { id } = useParams();
  const { userProfile } = useGlobalState();
  const [articleData, setArticleData] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [message, setMessage] = useState("");
  const [renderLoading, setRenderLoading] = useState(true);
  const [renderError, setRenderError] = useState(false);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      setRenderError(false);
      setRenderLoading(true);

      const articleResponse = await Articles.getArticleById(id);
      const articleCommentResponse = await Articles.getAllComments(id);

      setArticleData({ ...articleResponse.data });
      setArticleComments(articleCommentResponse.data);
      setRenderLoading(false);
      console.log(articleResponse.data);
    } catch (error) {
      console.error("Failed to fetch articles: ", error);

      setMessage(setErrorMessage(error));
      setRenderLoading(false);
      setRenderError(true);
    }
  };

  const deleteCommentHandler = async (articleId, commentId) => {
    try {
      setMessage("Deleting data...");

      if (!userProfile) throw new Error("User not logged in");
      else if (!userProfile.isAdmin) throw new Error("User is not admin");

      const responseData = await Articles.deleteComment(articleId, commentId);

      setMessage("Data deleted");
      window.dispatchEvent(new Event("refreshArticle"));
      console.log(responseData);
    } catch (error) {
      console.error(error);

      setMessage(setErrorMessage(error));
    }
  };

  const columns = ["Body", "User"];
  const actions = [
    {
      label: "View",
      onClick: () => {
        navigate(`/artikel/${articleData.id}`);
      },
    },
    ...(userProfile.isAdmin
      ? [
          {
            label: "Delete",
            onClick: (commentId) => {
              deleteCommentHandler(articleData.id, commentId);
            },
          },
        ]
      : []),
  ];
  const buttonStyles = ["bg-blue-600", "bg-red-600"];

  useEffect(() => {
    fetchArticles();

    window.addEventListener("refreshArticle", fetchArticles);

    return () => {
      window.removeEventListener("refreshArticle", fetchArticles);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (renderLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoadingSpin color="slate" size="10" />
      </div>
    );
  if (renderError) return <h1>{message}</h1>;

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

          <LazyLoadImage
            src={`${config.baseUrl}/images/articles/${articleData.image}`}
            alt="Gambar artikel"
            className="w-full"
          />
          {/* Detail */}
          <div>
            <ul className="pt-10">
              <li className="font-semibold">
                Title :{" "}
                <span className="font-normal"> {articleData.title} </span>
              </li>
              <li className="font-semibold">
                Date :{" "}
                <span className="font-normal">
                  {" "}
                  {convertDate(articleData.createdAt)}{" "}
                </span>
              </li>
              <li className="font-semibold">
                Author :{" "}
                <span className="font-normal">
                  {" "}
                  {articleData.user.username}{" "}
                </span>
              </li>
              <li className="font-semibold">
                Category :{" "}
                <span className="font-normal"> {articleData.category} </span>
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

      {articleComments.length === 0 ? (
        <h1 className="text-2xl font-bold">Tidak ada komentar</h1>
      ) : (
        <DataTable
          columns={columns}
          data={articleComments}
          actions={actions}
          buttonStyles={buttonStyles}
        />
      )}

      {message && (
        <NeutralAlert message={message} setMessage={setMessage}></NeutralAlert>
      )}
    </section>
  );
};

export default ViewArtikel;
