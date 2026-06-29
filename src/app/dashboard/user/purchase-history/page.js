"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function PurchaseHistoryPage() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const res = await axios.get(
          `${API_URL}/purchases/${user.email}`
        );

        setPurchases(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Purchase History
        </h1>

        <p className="text-gray-500 mt-2">
          View all your ebook purchases.
        </p>
      </div>

      {purchases.length === 0 ? (
        <div className="bg-white rounded-2xl shadow border p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Purchases Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Purchase an ebook to see it here.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border shadow overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Ebook</th>
                <th className="text-left p-4">Writer</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Purchase Date</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {purchases.map((purchase) => (
                <tr
                  key={purchase._id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4">
                    {purchase.title}
                  </td>

                  <td className="p-4">
                    {purchase.writer}
                  </td>

                  <td className="p-4">
                    ${purchase.price}
                  </td>

                  <td className="p-4">
                    {new Date(
                      purchase.purchaseDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {purchase.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}