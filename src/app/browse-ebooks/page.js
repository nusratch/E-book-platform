import EbookCard from "@/components/ebooks/EbookCard";
import EbookFilters from "@/components/ebooks/EbookFilters";
import Pagination from "@/components/ebooks/Pagination";

const ebooks = [
  {
    id: 1,
    title: "The Silent Forest",
    writer: "John Smith",
    price: 10,
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Dark Mystery",
    writer: "Sarah Lee",
    price: 12,
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 3,
    title: "Future World",
    writer: "Alex Brown",
    price: 15,
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 4,
    title: "Love & Life",
    writer: "Emma Wilson",
    price: 8,
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
];

export default function BrowsePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Browse Ebooks
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Explore thousands of ebooks from different genres
        </p>
      </div>

      <div className="mb-8">
        <EbookFilters />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {ebooks.map((ebook) => (
          <EbookCard
            key={ebook.id}
            ebook={ebook}
          />
        ))}
      </div>

      <div className="mt-10 md:mt-14 flex justify-center">
        <Pagination />
      </div>
    </section>
  );
}