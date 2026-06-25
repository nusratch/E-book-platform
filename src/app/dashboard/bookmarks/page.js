"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    setBookmarks(saved);
  }, []);

  if (bookmarks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold text-gray-500">
          No bookmarked ebooks yet.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        My Bookmarks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((ebook) => (
          <div
            key={ebook._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={ebook.cover}
              alt={ebook.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">
                {ebook.title}
              </h2>

              <p className="text-gray-600 mb-2">
                {ebook.writer}
              </p>

              <p className="text-blue-700 font-bold text-lg mb-4">
                ${ebook.price}
              </p>

              <Link
                href={`/ebook/${ebook._id}`}
                className="inline-block w-full text-center bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}