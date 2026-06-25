export default function PurchasedEbooksPage() {
  const ebooks = [
    {
      id: 1,
      title: "Atomic Habits",
      writer: "James Clear",
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    },
    {
      id: 2,
      title: "Deep Work",
      writer: "Cal Newport",
      cover:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
    },
    {
      id: 3,
      title: "The Silent Patient",
      writer: "Alex Michaelides",
      cover:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    },
    {
      id: 4,
      title: "Clean Code",
      writer: "Robert C. Martin",
      cover:
        "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Purchased Ebooks
        </h1>

        <p className="text-gray-500 mt-2">
          Read all the ebooks you have purchased.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white rounded-2xl border shadow overflow-hidden"
          >
            <img
              src={ebook.cover}
              alt={ebook.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {ebook.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {ebook.writer}
              </p>

              <button className="w-full mt-5 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl transition">
                Read Ebook
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}