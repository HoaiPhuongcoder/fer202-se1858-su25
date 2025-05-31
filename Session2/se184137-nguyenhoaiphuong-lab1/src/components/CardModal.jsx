function CardModal({ isOpen, onClose, cardData }) {
  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={isOpen ? {} : { display: "none" }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Chi tiết hoa lan
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={cardData.image}
                  alt={cardData.name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />

                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {cardData.isSpecial && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full px-3 py-1 shadow-lg">
                      Special
                    </span>
                  )}
                  {cardData.isNatural && (
                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1 shadow-lg">
                      Natural
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                  Đánh giá:
                </span>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < cardData.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 font-medium text-gray-900 dark:text-white">
                  ({cardData.rating}/5)
                </span>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {cardData.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Một loài hoa lan tuyệt đẹp với màu sắc rực rỡ và hương thơm
                  quyến rũ. Thích hợp để trang trí nhà cửa hoặc làm quà tặng cho
                  người thân yêu.
                </p>
              </div>

              {/* Product Details */}
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Thông tin chi tiết
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Màu sắc:
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        style={{ backgroundColor: cardData.color }}
                        className="inline-block w-5 h-5 border border-gray-300 rounded-full"
                      />
                      <span className="font-medium text-gray-900 dark:text-white capitalize">
                        {cardData.color}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Xuất xứ:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {cardData.origin}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Danh mục:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {cardData.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Lượt thích:
                    </span>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {cardData.numberOfLike}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Đặc điểm nổi bật
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cardData.category}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cardData.origin}
                  </span>
                  {cardData.isSpecial && (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Đặc biệt
                    </span>
                  )}
                  {cardData.isNatural && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Tự nhiên
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
