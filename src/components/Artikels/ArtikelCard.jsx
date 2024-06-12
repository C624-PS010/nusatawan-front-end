import { Link } from "react-router-dom";
import convertDate from "../../utils/dateConverter";

// eslint-disable-next-line react/prop-types
const ArtikelCard = ({ id, title, content, image, createdAt, user }) => {
  return (
    <>
      <Link
        to={`/artikel/${id}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl rounded-2xl">
          <div className="overflow-hidden">
            <img
              src={`http://103.150.92.104:2024/images/articles/${image}`}
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
            <p className="line-clamp-2">{content}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArtikelCard;
