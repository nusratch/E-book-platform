import Link from "next/link";
import ebooks from "@/data/ebooks";

export default function FeaturedEbooks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center sm:text-left">
          Featured Ebooks
        </h2>

        <Link
          href="/browse-ebooks"
          className="text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ebooks.slice(0, 6).map((ebook) => (
          <Link
            key={ebook.id}
            href={`/ebook/${ebook.id}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer h-full">
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-64 md:h-72 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {ebook.category}
                  </span>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      ebook.status === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ebook.status}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold">
                  {ebook.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {ebook.author}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-blue-700 font-bold">
                    ${ebook.price}
                  </p>

                  <p className="text-yellow-500 font-semibold">
                    ⭐ {ebook.rating}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
