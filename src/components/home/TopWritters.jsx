const writers = [
  {
    id: 1,
    name: "John Smith",
    sales: 250,
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Sarah Lee",
    sales: 210,
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 3,
    name: "Alex Brown",
    sales: 180,
    image: "https://i.pravatar.cc/300?img=8",
  },
];

export default function TopWriters() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Top Writers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {writers.map((writer) => (
            <div
              key={writer.id}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <img
                src={writer.image}
                alt={writer.name}
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-bold">
                {writer.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {writer.sales}+ Sales
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}