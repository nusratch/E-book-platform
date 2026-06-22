import EbookCard from "@/components/ebooks/EbookCard";

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
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-10">
        Browse Ebooks
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ebooks.map((ebook) => (
          <EbookCard
            key={ebook.id}
            ebook={ebook}
          />
        ))}
      </div>
    </div>
  );
}