import { useState } from "react";
import CardModal from "./CardModal";

function Card({
  name,
  rating,
  isSpecial,
  isNatural,
  image,
  color,
  numberOfLike,
  origin,
  category,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardData = {
    name,
    rating,
    isSpecial,
    isNatural,
    image,
    color,
    numberOfLike,
    origin,
    category,
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:hover:shadow-gray-700 dark:bg-gray-900/70 dark:shadow-2xl dark:shadow-gray-900 hover:shadow-2xl transition-shadow duration-300">
        <div className="relative overflow-hidden group">
          <img
            className="w-full h-64 object-cover transition-all duration-400 transform group-hover:scale-110"
            src={image}
            alt={name}
          />
          {isSpecial ? (
            <span
              className={`absolute top-3 ${
                isNatural ? "right-20" : "right-3"
              } bg-red-500 text-white text-xs font-bold rounded-full px-3 py-1`}
            >
              Special
            </span>
          ) : (
            ""
          )}
          {isNatural ? (
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1">
              Natural
            </span>
          ) : (
            ""
          )}
          <div className="absolute bottom-3 left-0 right-0 px-4 ">
            <button
              onClick={handleOpenModal}
              className="bg-transparent opacity-0 group-hover:backdrop-blur-md group-hover:opacity-100  border  text-white font-bold w-full py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              More Info
            </button>
          </div>
        </div>

        <div className="p-5  ">
          <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
            {name}
          </h2>

          <div className="flex items-center mb-3">
            {[...Array(rating)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="text-gray-700 text-sm space-y-2 mb-4">
            <p className="flex items-center">
              <span className="font-semibold dark:text-white">Color:</span>
              <span
                style={{ background: color, opacity: 0.8 }}
                className="ml-2 inline-block w-4 h-4 border rounded-full dark:text-white "
              />
              <span className="ml-2 dark:text-white">{color}</span>
            </p>
            <p className="dark:text-gray-300">
              <span className="font-semibold dark:text-white">Origin:</span>{" "}
              {origin}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-semibold dark:text-white">Category:</span>{" "}
              {category}
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                {category}
              </span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                {origin}
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-1 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium dark:text-white">
                {numberOfLike}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cardData={cardData}
      />
    </>
  );
}

export default Card;
