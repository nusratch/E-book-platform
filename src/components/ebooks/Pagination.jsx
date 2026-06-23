export default function Pagination() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-8 md:mt-12">
      <button className="px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
        Previous
      </button>

      <button className="px-3 sm:px-4 py-2 bg-blue-900 text-white rounded-lg text-sm sm:text-base">
        1
      </button>

      <button className="px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
        2
      </button>

      <button className="px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
        3
      </button>

      <button className="px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
        Next
      </button>
    </div>
  );
}