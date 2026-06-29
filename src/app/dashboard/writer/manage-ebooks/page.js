"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function ManageEbooksPage() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  useEffect(() => {
    if (!user?.email) return;

    fetchEbooks();
  }, []);

  const fetchEbooks = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/writer/${user.email}`
      );

      setEbooks(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load ebooks");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Delete this ebook?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_URL}/ebooks/${id}`
      );

      setEbooks(
        ebooks.filter(
          (ebook) => ebook._id !== id
        )
      );

      alert("Deleted successfully");
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  const handleStatus = async (ebook) => {
    try {
      const updatedStatus =
        ebook.status === "available"
          ? "unpublished"
          : "available";

      await axios.put(
        `${API_URL}/ebooks/${ebook._id}`,
        {
          ...ebook,
          status: updatedStatus,
        }
      );

      fetchEbooks();

      alert("Status Updated");
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">

        <div className="p-5 sm:p-6 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Manage Ebooks
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your uploaded ebooks.
            </p>
          </div>

          <Link
            href="/dashboard/writer/add-ebook"
            className="bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition text-center"
          >
            + Add Ebook
          </Link>
        </div>

        {ebooks.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold">
              No ebooks found
            </h2>

            <p className="text-gray-500 mt-3">
              Upload your first ebook.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[850px] w-full">

              <thead className="bg-gray-100">
                <tr>
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
                    Edit
                  </th>

                  <th className="text-left p-4">
                    Delete
                  </th>

                  <th className="text-left p-4">
                    Publish
                  </th>
                </tr>
              </thead>

              <tbody>
                {ebooks.map((ebook) => (
                  <tr
                    key={ebook._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {ebook.title}
                    </td>

                    <td className="p-4">
                      ${ebook.price}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          ebook.status === "available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {ebook.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <Link
                        href={`/dashboard/writer/edit-ebook/${ebook._id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Edit
                      </Link>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDelete(ebook._id)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleStatus(ebook)
                        }
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                      >
                        {ebook.status ===
                        "available"
                          ? "Unpublish"
                          : "Publish"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
}