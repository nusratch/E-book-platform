"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturedEbooks() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:55000/ebooks")
      .then((res) => res.json())
      .then((data) => setEbooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured Ebooks
        </h2>

        <Link
          href="/browse-ebooks"
          className="inline-block mt-3 text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ebooks.slice(0, 6).map((ebook) => (
          <div
            key={ebook._id}
            className="bg-white rounded-2xl border shadow-lg overflow-hidden flex flex-col h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-[260px] md:h-[300px] overflow-hidden">
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 md:p-6 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {ebook.genre}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    ebook.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {ebook.status}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold line-clamp-2 min-h-[56px]">
                {ebook.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {ebook.writer}
              </p>

              <div className="mt-auto pt-5 pb-2 flex items-center justify-between">
                <p className="text-blue-700 font-bold text-lg">
                  ${ebook.price}
                </p>

                <Link
                  href={`/ebook/${ebook._id}`}
                  className="bg-blue-900 text-white px-6 py-2.5 rounded-lg text-sm md:text-base hover:bg-blue-700 transition mr-1 mb-1 flex items-center justify-center min-w-[95px]"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}