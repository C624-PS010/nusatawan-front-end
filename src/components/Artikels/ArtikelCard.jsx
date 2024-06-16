import { Link } from "react-router-dom";
import convertDate from "../../utils/dateConverter";
import config from "../../utils/config";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArtikelCard = ({ id, title, content, category, image, createdAt, user }) => {
  const renderContent = (content) => {
    return content
      .replace(/\[b\](.*?)\[\/b\]/g, "")
      .replace(/\n/g, " ")
      .replace(/<strong><\/strong>/g, ""); // Remove empty <strong> tags
  };

  return (
    <Link
      to={`/artikel/${id}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="block"
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl rounded-2xl min-h-[450px] flex flex-col justify-between">
        <div className="overflow-hidden">
          <LazyLoadImage
            src={`${config.baseUrl}/images/articles/${image}`}
            alt="Gambar artikel"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>{convertDate(createdAt)}</p>
          <p className="line-clamp-1">By {user}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold">{title}</h1>
          <p
            className="line-clamp-2"
            dangerouslySetInnerHTML={{ __html: renderContent(content) }}
          ></p>
        </div>
        <div className="inline-block bg-slate-300 rounded p-1 w-20">
          <p
            className="line-clamp-1 text-slate-700 text-sm px-2 text-center"
            style={{ textTransform: "capitalize" }}
          >
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArtikelCard;
