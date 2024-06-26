import { useState, useEffect } from "react";
import Articles from "../../network/Articles";
import localUser from "../../utils/localUser";
import Alert from "../Alert/Alert";
import { setErrorMessage } from "../../utils/errorHandler";

const Rating = (props) => {
  const { id } = props;
  // eslint-disable-next-line no-unused-vars
  const [currentRating, setCurrentRating] = useState(1);
  const [hover, setHover] = useState(0);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchRating = async () => {
    try {
      const response = await Articles.getAvgRating(id);

      if (!response.data._avg.rating) setCurrentRating(1);
      else setCurrentRating(Math.floor(response.data._avg.rating));

      console.log(response);
    } catch (error) {
      console.error("Failed to fetch rating");
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
      setIsError(true);

      setMessage(setErrorMessage(error));
    }
  };

  useEffect(() => {
    fetchRating(id);

    window.addEventListener("refreshRating", fetchRating);

    return () => {
      window.removeEventListener("refreshRating", fetchRating);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      </div>

      {/* {message && <p className="text-center text-sm text-red-500">{message}</p>} */}
      {message && (
        <Alert
          isError={isError}
          message={message}
          setIsError={setIsError}
          setMessage={setMessage}
        />
      )}
    </>
  );
};

export default Rating;
