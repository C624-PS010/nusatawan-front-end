import { useState, useEffect } from "react";
import Articles from "../../network/Articles";

const RatingTotalUser = ({ id }) => {
  const [currentRating, setCurrentRating] = useState(1);
  const [totalUserRating, setTotalUserRating] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const ratingResponse = await Articles.getAvgRating(id);
        const totalUserRatingResponse = await Articles.getTotalUserRating(id);

        if (!ratingResponse.data._avg.rating) setCurrentRating(1);
        else setCurrentRating(ratingResponse.data._avg.rating);

        if (!totalUserRatingResponse.data) setTotalUserRating(0);
        else setTotalUserRating(totalUserRatingResponse.data);
      } catch (error) {
        console.error("Failed to fetch rating", error);
      }
    };

    fetchRatings();
  }, [id]);

  return (
    <div>
      <div className="flex items-center mb-5 mt-2">
        <svg
          className="w-5 h-5 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-2 text-base font-bold text-gray-900 dark:text-white">
          {currentRating.toFixed(1)}
        </p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a
          href="#"
          className="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          {totalUserRating} reviews
        </a>
      </div>
    </div>
  );
};

export default RatingTotalUser;
