import { Link } from "react-router-dom";
import convertDate from "../../utils/dateConverter";

// eslint-disable-next-line react/prop-types
const Campaign = ({ id, title, image, content, createdAt, user }) => {
  return (
    <Link
      to={`/campaign/${id}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="shadow-lg max-w-sm rounded-2xl">
        <img
          className="w-full h-52 rounded-t-2xl shadow-lg"
          src={`http://103.150.92.104:2024/images/campaigns/${image}`}
          alt="Gambar kampanye"
        />
        <div className="p-4 pb-5 text-center">
          <p className="text-gray-400 pb-2">by {user.username}</p>
          <h1 className="text-base font-semibold text-center">{title}</h1>
          <p className="mt-2 text-sm">{content}</p>
          <p className="text-gray-400 mt-2">{convertDate(createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Campaign;
