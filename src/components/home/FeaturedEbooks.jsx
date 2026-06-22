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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center sm:text-left">
          Featured Ebooks
        </h2>

        <Link
          href="/browse-ebooks"
          className="text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {ebooks.slice(0, 6).map((ebook) => (
          <div
            key={ebook._id}
            className="rounded-2xl overflow-hidden border bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 truncate">
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

              <h3 className="text-xl font-bold min-h-[56px] line-clamp-2">
                {ebook.title}
              </h3>

              <p className="text-gray-500 mt-2 min-h-[24px]">
                {ebook.writer}
              </p>

              <div className="mt-auto pt-5">
                <p className="text-blue-700 font-bold text-lg">
                  ${ebook.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}