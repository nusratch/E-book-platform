export default function EbookFilters({
  search,
  setSearch,
  genre,
  setGenre,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or writer"
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Prices</option>
        <option value="0-10">$0 - $10</option>
        <option value="10-20">$10 - $20</option>
        <option value="20+">$20+</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="newest">Newest</option>
        <option value="low-high">Price Low-High</option>
        <option value="high-low">Price High-Low</option>
      </select>
    </div>
  );
}