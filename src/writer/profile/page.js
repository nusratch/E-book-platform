export default function WriterProfile() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-32 sm:h-40 bg-gradient-to-r from-violet-600 to-fuchsia-500"></div>

        <div className="px-4 sm:px-8 pb-6 sm:pb-8">
          <div className="-mt-14 sm:-mt-16 flex flex-col md:flex-row items-center md:items-end gap-5 sm:gap-6 text-center md:text-left">
            <img
              src="https://i.pravatar.cc/150?img=25"
              alt="Writer"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
            />

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                John Writer
              </h1>

              <p className="text-gray-500 mt-1">
                Ebook Writer
              </p>

              <p className="text-violet-600 break-all">
                writer@gmail.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            <div className="bg-violet-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-violet-600">
                15
              </h2>

              <p className="text-gray-600">
                Published Books
              </p>
            </div>

            <div className="bg-violet-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-violet-600">
                1,280
              </h2>

              <p className="text-gray-600">
                Total Sales
              </p>
            </div>

            <div className="bg-violet-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-violet-600">
                4.9
              </h2>

              <p className="text-gray-600">
                Average Rating
              </p>
            </div>

            <div className="bg-violet-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-violet-600">
                $3,450
              </h2>

              <p className="text-gray-600">
                Total Earnings
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Biography
            </h2>

            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              Professional ebook writer with experience in
              technology, programming, business and
              self-improvement. Dedicated to creating
              high-quality digital books for readers around
              the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}