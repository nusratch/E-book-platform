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
<section className="mt-16 md:mt-20 lg:mt-24 py-12 md:py-16 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 ">
Ebook Genres
</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {genres.map((genre) => (
        <div
          key={genre}
          className="bg-blue-900 text-white rounded-2xl p-5 md:p-8 text-center font-semibold text-sm sm:text-base md:text-lg cursor-pointer hover:scale-105 hover:bg-blue-800 transition-all duration-300 shadow-lg"
        >
          {genre}
        </div>
      ))}
    </div>
  </div>
</section>

);
}