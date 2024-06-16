import { Link } from "react-router-dom";
import convertDate from "../../utils/dateConverter";
import config from "../../utils/config";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Campaign = ({ id, title, image, content, createdAt, user }) => {
  const renderContent = (content) => {
    return content
      .replace(/\[b\](.*?)\[\/b\]/g, "")
      .replace(/\n/g, " ")
      .replace(/<strong><\/strong>/g, ""); // Remove empty <strong> tags
  };

  return (
    <Link
      to={`/campaign/${id}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl rounded-2xl min-h-[450px] flex flex-col justify-between">
        <div className="overflow-hidden">
          <LazyLoadImage
            className="w-full h-52 rounded-t-2xl shadow-lg object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            src={`${config.baseUrl}/images/campaigns/${image}`}
            alt="Gambar kampanye"
          />
        </div>
        <div className="p-4 pb-5 text-center">
          <p className="text-gray-400 pb-2">by {user.username}</p>
          <h1 className="text-base font-semibold">{title}</h1>
          <p
            className="mt-2 text-sm line-clamp-2"
            dangerouslySetInnerHTML={{ __html: renderContent(content) }}
          ></p>
          <p className="text-gray-400 mt-2">{convertDate(createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Campaign;
