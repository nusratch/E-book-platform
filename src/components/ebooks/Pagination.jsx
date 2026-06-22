export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-12">

      <button className="px-4 py-2 border rounded-lg">
        Previous
      </button>

      <button className="px-4 py-2 bg-blue-900 text-white rounded-lg">
        1
      </button>

      <button className="px-4 py-2 border rounded-lg">
        2
      </button>

      <button className="px-4 py-2 border rounded-lg">
        3
      </button>

      <button className="px-4 py-2 border rounded-lg">
        Next
      </button>

    </div>
  );
}