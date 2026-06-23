async function getEbook(id) {
  const res = await fetch(
    `https://e-book-platform-backend.vercel.app/ebooks/${id}`,
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
<div className="min-h-screen flex items-center justify-center text-xl font-semibold">
Ebook not found
</div>
);
}

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-screen">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

    <div>
      <img
        src={ebook.cover}
        alt={ebook.title}
        className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <div>
      <p className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
        {ebook.genre}
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {ebook.title}
      </h1>

      <p className="text-gray-600 text-base md:text-lg mb-6">
        Written by <span className="font-semibold">{ebook.writer}</span>
      </p>

      <p className="text-gray-700 leading-7 md:leading-8 mb-8">
        {ebook.description || "No description available."}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            ebook.status === "available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {ebook.status}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        ${ebook.price}
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-medium">
          Purchase Ebook
        </button>

        <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 transition font-medium">
          Bookmark
        </button>
      </div>
    </div>

  </div>
</div>

);
}