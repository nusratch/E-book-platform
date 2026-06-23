export default function EbookFilters() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-10">
      <input
        type="text"
        placeholder="Search by title or writer"
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Genres</option>
        <option>Fiction</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
        <option>Fantasy</option>
        <option>Horror</option>
      </select>

      <select className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Prices</option>
        <option>$0 - $10</option>
        <option>$10 - $20</option>
        <option>$20+</option>
      </select>

      <select className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
        <option>Newest</option>
        <option>Price Low-High</option>
        <option>Price High-Low</option>
      </select>
    </div>
  );
}