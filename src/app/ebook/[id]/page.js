export default function EbookDetailsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="ebook"
          className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
        />

        <div>
          <p className="text-blue-800 font-semibold mb-2">
            Fantasy
          </p>

          <h1 className="text-5xl font-bold mb-4">
            The Silent Forest
          </h1>

          <p className="text-gray-600 mb-4">
            Written by John Smith
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Deep inside an ancient forest lies a mystery
            that has remained hidden for centuries.
            Follow the journey of brave explorers as
            they uncover secrets, legends, and truths
            buried beneath the shadows.
          </p>

          <div className="flex gap-3 mb-6">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
              Available
            </span>

            <span className="px-4 py-2 bg-slate-100 rounded-full">
              Uploaded: June 2026
            </span>
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            $10
          </h2>

          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl">
              Purchase Ebook
            </button>

            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}