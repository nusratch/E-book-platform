"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "@/lib/api";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const res = await axios.get(
          `${API_URL}/bookmarks/${user.email}`
        );

        setBookmarks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${API_URL}/bookmarks/${id}`);

      setBookmarks(bookmarks.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          My Bookmarks
        </h1>

        <p className="text-gray-500 mt-2">
          All your bookmarked ebooks.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-white rounded-2xl shadow border p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Bookmarks Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Bookmark your favourite ebooks.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-2xl shadow border overflow-hidden"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold line-clamp-2">
                  {book.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {book.writer}
                </p>

                <p className="text-blue-900 font-bold mt-2">
                  ${book.price}
                </p>

                <div className="flex gap-3 mt-5">
                  <Link
                    href={`/ebook/${book.ebookId}`}
                    className="flex-1 bg-blue-900 text-white text-center py-3 rounded-xl hover:bg-blue-800"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => handleRemove(book._id)}
                    className="px-4 rounded-xl border border-red-500 text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}