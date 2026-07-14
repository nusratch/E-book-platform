"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Toaster } from "react-hot-toast";

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

      setBookmarks(
        bookmarks.filter(
          (bookmark) => bookmark._id !== id
        )
      );
    } catch (error) {
      console.log(error);
      Toaster.error("Failed to remove bookmark");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <h1 className="text-2xl font-bold text-gray-500 text-center">
          No bookmarked ebooks yet.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        My Bookmarks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
          >
            <img
              src={bookmark.cover}
              alt={bookmark.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {bookmark.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {bookmark.writer}
              </p>

              <p className="text-blue-700 font-bold text-lg mt-2">
                ${bookmark.price}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href={`/ebook/${bookmark.ebookId}`}
                  className="w-full text-center bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    handleRemove(bookmark._id)
                  }
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Remove Bookmark
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}