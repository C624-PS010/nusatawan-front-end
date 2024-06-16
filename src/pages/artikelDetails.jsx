import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating/Rating";
import Comment from "../components/Comments/Comment";
import CommentInput from "../components/Comments/CommentInput";
import Articles from "../network/Articles";
import convertDate from "../utils/dateConverter";
import config from "../utils/config";
import RatingTotalUser from "../components/Rating/RatingTotalUser";
import DetailPageSkeleton from "../components/DetailPageSkeleton";
import { setErrorMessage } from "../utils/errorHandler";

const ArtikelDetails = () => {
  const { id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchArticles = async () => {
    try {
      setIsError(false);
      setLoading(true);

      const response = await Articles.getArticleById(id);
      setArticleData({ ...response.data });

      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch articles: ", error);

      setLoading(false);
      setIsError(true);
      setMessage(setErrorMessage(error));
    }
  };

  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Replace custom tags with HTML tags
      const formattedParagraph = paragraph
        .replace(
          /\[b\](.*?)\[\/b\]/g,
          "<div style='font-weight: bold; font-size: 18px; padding-top: 20px; '>$1</div>"
        )
        .replace(/\[li\](.*?)\[\/li\]/g, "<li >$1</li>")
        .replace(/\n/g, "<br />");

      return (
        <p
          key={index}
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        ></p>
      );
    });
  };

  useEffect(() => {
    fetchArticles();

    window.addEventListener("refreshArticle", fetchArticles);

    return () => {
      window.removeEventListener("refreshArticle", fetchArticles);
    };
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="h-[85px] bg-gray-800 w-full"></div>
        <DetailPageSkeleton />;
      </>
    );
  }

  if (isError) {
    return (
      <>
        {" "}
        <div className="h-[85px] bg-gray-800 w-full"></div>
        <div className="w-screen h-screen flex justify-center items-center text-3xl font-bold">
          {message}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-[85px] bg-gray-800 w-full"></div>
      <div className="bg-slate px-20 py-10">
        <div className="h-[300px] overflow-hidden w-full">
          <img
            src={`${config.baseUrl}/images/articles/${articleData.image}`}
            alt={`Gambar artikel ${articleData.title}`}
            className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
          />
        </div>
        <div className="container mx-auto px-4">
          <p className="text-slate-600 text-sm py-3">
            Ditulis oleh {articleData.user?.username} pada {convertDate(articleData.createdAt)}
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Title */}
            <h1 className="text-3xl font-bold md:pb-7">
              <span className="font-bold text-4xl">{articleData.title}</span>
            </h1>

            {/* Rating */}
            <div className="text-justify">
              <RatingTotalUser id={id} />
            </div>
          </div>

          <div className="space-y-6">{renderContent(articleData.content)}</div>
        </div>

        <div className="mt-8">
          <hr className="border-t border-gray-300 w-full mx-auto" />
        </div>

        {/* Rating */}
        <div className="justify-center items-center text-center p-10">
          <h1 className="text-2xl font-bold mb-4 text-tertiary">Berikan Rating Anda</h1>
          <Rating id={id} />
        </div>

        <div className="mb-8">
          <hr className="border-t border-gray-300 w-full mx-auto" />
        </div>

        {/* Komentar */}
        <CommentInput articleId={articleData.id} />

        {articleData.comments && articleData.comments.length === 0 && (
          <h1 className=" mb-20 text-base text-center w-full font-bold">
            Belum ada komentar di sini!
          </h1>
        )}

        {articleData.comments && (
          <div className="flex flex-col gap-4">
            {articleData.comments.map((comment) => (
              <Comment
                key={comment.id}
                username={comment.user?.username}
                createdAt={convertDate(comment.createdAt)}
              >
                {comment.body}
              </Comment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ArtikelDetails;
