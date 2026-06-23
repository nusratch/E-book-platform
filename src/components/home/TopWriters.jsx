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
    <section className="bg-slate-50 py-10 md:py-12 mb-16 md:mb-20 lg:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Top Writers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {writers.map((writer) => (
            <div
              key={writer.id}
              className="bg-white p-5 rounded-2xl shadow-lg text-center"
            >
              <img
                src={writer.image}
                alt={writer.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-3 object-cover"
              />

              <h3 className="text-lg md:text-xl font-bold">
                {writer.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {writer.sales}+ Sales
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}