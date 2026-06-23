async function getEbook(id) {
  const res = await fetch(
    `http://localhost:55000/ebooks/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function EbookDetailsPage({
  params,
}) {
  const { id } = await params;

  const ebook = await getEbook(id);

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Ebook not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 min-h-screen mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <img
          src={ebook.cover}
          alt={ebook.title}
          className="w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-lg"
        />

        <div>
          <p className="text-blue-800 font-semibold mb-2">
            {ebook.genre}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {ebook.title}
          </h1>

          <p className="text-gray-600 mb-4 text-lg">
            Written by {ebook.writer}
          </p>

          <p className="text-gray-700 leading-8 mb-8">
            {ebook.description || "No description available."}
          </p>

          <div className="flex gap-3 mb-8">
            <span
              className={`px-4 py-2 rounded-full ${
                ebook.status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {ebook.status}
            </span>
          </div>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            ${ebook.price}
          </h2>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              Purchase Ebook
            </button>

            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 transition">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}