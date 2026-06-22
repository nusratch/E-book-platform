const ebooks = [
  {
    id: 1,
    title: "The Silent Forest",
    writer: "John Smith",
    price: 10,
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Dark Mystery",
    writer: "Sarah Lee",
    price: 12,
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 3,
    title: "Future World",
    writer: "Alex Brown",
    price: 15,
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 4,
    title: "Love & Life",
    writer: "Emma Wilson",
    price: 8,
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 5,
    title: "Fantasy Kingdom",
    writer: "David King",
    price: 20,
    cover:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
  },
  {
    id: 6,
    title: "Horror Night",
    writer: "Sophia White",
    price: 18,
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
];

export default function FeaturedEbooks() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Ebooks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="rounded-xl overflow-hidden shadow-lg border"
          >
            <img
              src={ebook.cover}
              alt={ebook.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {ebook.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {ebook.writer}
              </p>

              <p className="text-blue-700 font-bold mt-3">
                ${ebook.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}