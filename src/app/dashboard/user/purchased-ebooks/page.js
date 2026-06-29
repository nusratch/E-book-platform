"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function PurchasedEbooksPage() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedEbooks = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const res = await axios.get(
          `${API_URL}/purchases/${user.email}`
        );

        setEbooks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedEbooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Purchased Ebooks
        </h1>

        <p className="text-gray-500 mt-2">
          Read all the ebooks you have purchased.
        </p>
      </div>

      {ebooks.length === 0 ? (
        <div className="bg-white rounded-2xl shadow border p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Purchased Ebooks
          </h2>

          <p className="text-gray-500 mt-3">
            Purchase an ebook to see it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook._id}
              className="bg-white rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold line-clamp-2">
                  {ebook.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {ebook.writer}
                </p>

                <button
                  className="w-full mt-5 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl transition"
                >
                  Read Ebook
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}