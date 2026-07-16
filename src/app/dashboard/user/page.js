"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "@/lib/api";

export default function UserDashboard() {
  const [purchases, setPurchases] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const purchaseRes = await axios.get(
          `${API_URL}/purchases/${user.email}`
        );

        const bookmarkRes = await axios.get(
          `${API_URL}/bookmarks/${user.email}`
        );

        setPurchases(purchaseRes.data);
        setBookmarks(bookmarkRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const totalSpent = purchases.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          User Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your purchases, profile and bookmarked ebooks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl border shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Purchased Ebooks
          </h3>

          <p className="text-4xl font-bold mt-3">
            {purchases.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Bookmarks
          </h3>

          <p className="text-4xl font-bold mt-3">
            {bookmarks.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Total Spent
          </h3>

          <p className="text-4xl font-bold mt-3">
            ${totalSpent}
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Reading Progress
          </h3>

          <p className="text-4xl font-bold mt-3">
            {purchases.length > 0 ? "100%" : "0%"}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        <Link
          href="/dashboard/user/purchase-history"
          className="bg-white border rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">
            Purchase History
          </h2>

          <p className="text-gray-500">
            View all purchased ebooks and payment history.
          </p>
        </Link>

        <Link
          href="/dashboard/user/purchased-ebooks"
          className="bg-white border rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">
            Purchased Ebooks
          </h2>

          <p className="text-gray-500">
            Access all the ebooks you have purchased.
          </p>
        </Link>

      </div>

    </div>
  );
}