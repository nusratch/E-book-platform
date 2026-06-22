const genres = [
  "Fiction",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Horror",
  "Thriller",
  "Adventure",
];

export default function Genres() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ebook Genres
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <div
              key={genre}
              className="bg-blue-900 text-white rounded-xl p-8 text-center font-semibold cursor-pointer hover:scale-105 transition"
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}