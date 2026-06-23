import Link from "next/link";

export default function EbookCard({ ebook }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border flex flex-col h-[480px] md:h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      <div className="h-[240px] md:h-[280px] overflow-hidden">
        <img
          src={ebook.cover}
          alt={ebook.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-bold line-clamp-2 min-h-[56px]">
          {ebook.title}
        </h3>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          {ebook.writer}
        </p>

        <div className="mt-auto pt-5 flex items-center justify-between">
          <p className="font-bold text-blue-800 text-lg">
            ${ebook.price}
          </p>

          <Link
            href={`/ebook/${ebook._id || ebook.id}`}
            className="bg-blue-900 text-white min-w-[100px] px-6 py-2.5 rounded-lg text-sm md:text-base hover:bg-blue-700 transition flex items-center justify-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}