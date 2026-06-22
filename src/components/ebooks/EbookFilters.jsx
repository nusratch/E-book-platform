export default function EbookFilters() {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">

      <input
        type="text"
        placeholder="Search by title or writer"
        className="border rounded-lg px-4 py-3"
      />

      <select className="border rounded-lg px-4 py-3">
        <option>All Genres</option>
        <option>Fiction</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
        <option>Fantasy</option>
        <option>Horror</option>
      </select>

      <select className="border rounded-lg px-4 py-3">
        <option>All Prices</option>
        <option>$0 - $10</option>
        <option>$10 - $20</option>
        <option>$20+</option>
      </select>

      <select className="border rounded-lg px-4 py-3">
        <option>Newest</option>
        <option>Price Low-High</option>
        <option>Price High-Low</option>
      </select>

    </div>
  );
}