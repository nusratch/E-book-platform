export default function UserProfile() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-32 sm:h-40 bg-gradient-to-r from-pink-500 to-rose-400"></div>

        <div className="px-4 sm:px-8 pb-6 sm:pb-8">
          <div className="-mt-14 sm:-mt-16 flex flex-col md:flex-row items-center md:items-end gap-5 sm:gap-6 text-center md:text-left">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
            />

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Nusrat Chowdhury
              </h1>

              <p className="text-gray-500 mt-1">
                Reader
              </p>

              <p className="text-pink-600 break-all">
                nusrat@gmail.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="bg-pink-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-pink-600">
                12
              </h2>
              <p className="text-gray-600">
                Purchased Books
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-pink-600">
                8
              </h2>
              <p className="text-gray-600">
                Bookmarks
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-5 text-center sm:col-span-2 lg:col-span-1">
              <h2 className="text-3xl font-bold text-pink-600">
                25
              </h2>
              <p className="text-gray-600">
                Reviews
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              About
            </h2>

            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              Passionate book reader who enjoys novels,
              programming books and self-development
              content. Loves discovering new writers and
              keeping a personal digital library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}