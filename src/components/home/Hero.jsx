import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover & Read
              <span className="text-blue-300">
                {" "}Original Ebooks
              </span>
            </h1>

            <p className="text-lg text-gray-200 mb-8">
              Explore thousands of ebooks from talented writers.
              Read anytime, anywhere and support independent authors.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold">
                Browse Ebooks
              </button>

              <button className="border border-white px-6 py-3 rounded-xl">
                Become a Writer
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Books"
              width={550}
              height={400}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}