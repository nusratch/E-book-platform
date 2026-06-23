import Link from "next/link";

export default function EbookCard({ ebook }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border h-[700px] flex flex-col hover:shadow-2xl transition-all duration-300">
      
      <img
        src={ebook.cover}
        alt={ebook.title}
        className="w-full h-[280px] object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold min-h-[56px]">
          {ebook.title}
        </h3>

        <p className="text-gray-500 mt-2 min-h-[24px]">
          {ebook.writer}
        </p>

        <div className="mt-auto flex justify-between items-center">
          <p className="font-bold text-blue-800">
            ${ebook.price}
          </p>

          <Link
            href={`/ebook/${ebook._id || ebook.id}`}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}