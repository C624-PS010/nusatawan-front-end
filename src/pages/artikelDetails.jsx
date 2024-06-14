import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating/Rating";
import Comment from "../components/Comments/Comment";
import CommentInput from "../components/Comments/CommentInput";
import Articles from "../network/Articles";
import convertDate from "../utils/dateConverter";
import config from "../utils/config";

const ArtikelDetails = () => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();

    window.addEventListener("refreshArticle", fetchArticles);

    return () => {
      window.removeEventListener("refreshArticle", fetchArticles);
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Replace custom tags with HTML tags
      const formattedParagraph = paragraph
        .replace(/\[b\](.*?)\[\/b\]/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br /> <br/>");

      return (
        <p
          key={index}
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        ></p>
      );
    });
  };

  return (
    <div className="p-5">
      <div className="h-[300px] overflow-hidden">
        <img
          src={`${config.baseUrl}/images/articles/${articleData.image}`}
          alt={`Gambar artikel ${articleData.title}`}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container mx-auto px-4">
        <p className="text-slate-600 text-sm py-3">
          Ditulis oleh {articleData.user.username} pada{" "}
          {convertDate(articleData.createdAt)}
        </p>
        <h1 className="text-3xl font-bold pb-10">
          <span className="font-bold text-4xl">
            {articleData.title.replace(/\[b\](.*?)\[\/b\]/g, "$1")}
          </span>
        </h1>
        <div className="space-y-6">{renderContent(articleData.content)}</div>
      </div>

      <div className="mt-8">
        <hr className="border-t border-gray-300 w-full mx-auto" />
      </div>

      {/* Rating */}
      <div className="justify-center items-center text-center p-10">
        <h1 className="text-2xl font-bold mb-4 text-tertiary">
          Berikan Kami umpan balik
        </h1>
        <Rating id={id} />
      </div>

      <div className="mb-8">
        <hr className="border-t border-gray-300 w-full mx-auto" />
      </div>

      {/* Komentar */}
      <CommentInput articleId={articleData.id} />

      {articleData.comments && articleData.comments.length === 0 && (
        <h1 className="px-20 mb-20 text-center text-2xl font-bold">
          Masih belum ada komen disini, jadilah yang pertama!
        </h1>
      )}

      {articleData.comments && (
        <div className="flex flex-col gap-4">
          {articleData.comments.map((comment) => (
            <Comment
              key={comment.id}
              username={comment.user.username}
              createdAt={convertDate(comment.createdAt)}
            >
              {comment.body}
            </Comment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtikelDetails;
