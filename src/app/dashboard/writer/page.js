"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function WriterDashboard() {
  const [stats, setStats] = useState({
    totalEbooks: 0,
    published: 0,
    sales: 0,
    revenue: 0,
  });

  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) return;

      const user = JSON.parse(savedUser);

      try {
        const ebookRes = await axios.get(
          `${API_URL}/ebooks/writer/${user.email}`
        );

        const salesRes = await axios.get(
          `${API_URL}/sales/${user.name}`
        );

        const myBooks = ebookRes.data;
        const sales = salesRes.data;

        setEbooks(myBooks);

        setStats({
          totalEbooks: myBooks.length,
          published: myBooks.filter(
            (book) => book.status === "available"
          ).length,
          sales: sales.length,
          revenue: sales.reduce(
            (sum, item) => sum + Number(item.price || 0),
            0
          ),
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Writer Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your ebooks and sales activity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Total Ebooks
          </h3>

          <p className="text-3xl font-bold mt-2">
            {stats.totalEbooks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Total Sales
          </h3>

          <p className="text-3xl font-bold mt-2">
            {stats.sales}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Revenue
          </h3>

          <p className="text-3xl font-bold mt-2">
            ${stats.revenue}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Published Books
          </h3>

          <p className="text-3xl font-bold mt-2">
            {stats.published}
          </p>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg border overflow-x-auto">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            Manage Ebooks
          </h2>
        </div>

        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">
                Title
              </th>

              <th className="text-left p-4">
                Price
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {ebooks.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-8 text-center text-gray-500"
                >
                  No ebooks found.
                </td>
              </tr>
            ) : (
              ebooks.slice(0, 5).map((ebook) => (
                <tr
                  key={ebook._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {ebook.title}
                  </td>

                  <td className="p-4">
                    ${ebook.price}
                  </td>

                  <td className="p-4">
                    {ebook.status}
                  </td>

                  <td className="p-4 text-blue-700 font-medium">
                    Manage
                  </td>
                </tr>
              ))
            )}

          </tbody>
        </table>

      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border">

        <h2 className="text-2xl font-bold mb-4">
          Add Ebook
        </h2>

        <p className="text-gray-500">
          Use the Add Ebook page to publish a new ebook for readers.
        </p>

      </div>

    </div>
  );
}