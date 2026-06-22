import Link from "next/link";

export default function EbookCard({ ebook }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
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

        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-blue-800">
            ${ebook.price}
          </p>

          <Link
            href={`/ebook/${ebook.id}`}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}