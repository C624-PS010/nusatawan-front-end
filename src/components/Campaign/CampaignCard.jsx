
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Campaign = ({ image, date, title, description, author }) => {
    return (
        <Link
            to={`/campaign/${title}`}
            onClick={() => {
            window.scrollTo(0, 0);
            }}
            state={{ image, date, title, description, author }}
        >
            <div className="shadow-lg max-w-sm rounded-2xl">
                <img className="w-full h-52 rounded-t-2xl shadow-lg" src={image} alt="" />
                <div className="p-4 pb-5 text-center">
                    <p className="text-gray-400 pb-2">by {author}</p>
                    <h1 className="text-base font-semibold text-center">{title}</h1>
                    {/* <p className="mt-2 text-sm">
                        {.description}
                    </p> */}
                    <p className="text-gray-400 mt-2">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export default Campaign

