import { useState, useEffect } from "react";
import Articles from "../../network/Articles";
import localUser from "../../utils/localUser";

const Rating = (props) => {
  const { id } = props;
  const [currentRating, setCurrentRating] = useState(1);
  const [hover, setHover] = useState(0);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchRating = async () => {
    try {
      const response = await Articles.getAvgRating(id);

      if (!response.data._avg.rating) setCurrentRating(1);
      else setCurrentRating(Math.floor(response.data._avg.rating));

      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch rating", error);
    }
  };

  const postRatingHandler = async (ratingValue) => {
    try {
      const localUserData = localUser.get();
      if (!localUserData) {
        throw new Error("User not logged in");
      }

      const newRating = ratingValue;
      const userId = localUserData.id;
      const responseData = await Articles.postRating(id, userId, newRating);

      setIsError(false);
      setMessage("Berhasil memberikan rating");
      setTimeout(() => {
        setMessage("");
      }, 4000);

      window.dispatchEvent(new Event("refreshRating"));
      console.log(responseData);
    } catch (error) {
      console.log(error);

      setIsError(true);

      if (error.data && error.status === 401) setMessage("User not logged in");
      else if (error.data) setMessage(error.data.message);
      else setMessage(error.message);

      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };

  useEffect(() => {
    fetchRating(id);

    window.addEventListener("refreshRating", fetchRating);

    return () => {
      window.removeEventListener("refreshRating", fetchRating);
    };
  }, []);

  return (
    <>
      <div className="flex space-x-1 justify-center">
        <div className="flex space-x-1 justify-center">
          {[...Array(5)].map((star, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={index + 1}
                  onClick={() => {
                    postRatingHandler(hover);
                  }}
                  className="hidden"
                />
                <svg
                  className={`w-8 h-8 cursor-pointer ${
                    index + 1 <= hover ? "text-primary" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(0)}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.244 3.827a1 1 0 00.95.69h4.007c.969 0 1.371 1.24.588 1.81l-3.251 2.37a1 1 0 00-.364 1.118l1.244 3.827c.3.921-.755 1.688-1.54 1.118l-3.251-2.37a1 1 0 00-1.175 0l-3.251 2.37c-.785.57-1.84-.197-1.54-1.118l1.244-3.827a1 1 0 00-.364-1.118L2.511 9.254c-.783-.57-.381-1.81.588-1.81h4.007a1 1 0 00.95-.69l1.244-3.827z" />
                </svg>
              </label>
            );
          })}
        </div>

        {/* <h1 className="text-2xl font-bold">/</h1>

        <div className="flex space-x-1 justify-center">
          {[...Array(5)].map((star, index) => {
            const ratingValue = currentRating;

            return (
              <label key={index}>
                <svg
                  className={`w-8 h-8 ${
                    ratingValue >= index + 1 ? "text-primary" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.244 3.827a1 1 0 00.95.69h4.007c.969 0 1.371 1.24.588 1.81l-3.251 2.37a1 1 0 00-.364 1.118l1.244 3.827c.3.921-.755 1.688-1.54 1.118l-3.251-2.37a1 1 0 00-1.175 0l-3.251 2.37c-.785.57-1.84-.197-1.54-1.118l1.244-3.827a1 1 0 00-.364-1.118L2.511 9.254c-.783-.57-.381-1.81.588-1.81h4.007a1 1 0 00.95-.69l1.244-3.827z" />
                </svg>
              </label>
            );
          })}
        </div> */}
      </div>

      {message && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-4 z-50">
          <div
            role="alert"
            className={`rounded-xl border ${
              isError
                ? "border-red-400 bg-red-100 text-red-900"
                : "border-green-400 bg-green-100 text-green-900"
            } p-4 shadow-md flex items-start gap-4`}
          >
            <span className={`${isError ? "text-red-600" : "text-green-600"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium">
                {isError ? "Error" : "Changes saved"}
              </strong>

              <p className="mt-1 text-sm">{message}</p>
            </div>

            <button
              onClick={() => {
                setIsError(false);
                setMessage("");
              }}
              className="text-gray-500 transition hover:text-gray-600"
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rating;
