import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1 justify-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <svg
              className={`w-8 h-8 cursor-pointer ${
                ratingValue <= (hover || rating) ? 'text-primary' : 'text-gray-400'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.244 3.827a1 1 0 00.95.69h4.007c.969 0 1.371 1.24.588 1.81l-3.251 2.37a1 1 0 00-.364 1.118l1.244 3.827c.3.921-.755 1.688-1.54 1.118l-3.251-2.37a1 1 0 00-1.175 0l-3.251 2.37c-.785.57-1.84-.197-1.54-1.118l1.244-3.827a1 1 0 00-.364-1.118L2.511 9.254c-.783-.57-.381-1.81.588-1.81h4.007a1 1 0 00.95-.69l1.244-3.827z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;