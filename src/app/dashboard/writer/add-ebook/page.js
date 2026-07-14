"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Toaster } from "react-hot-toast";

export default function AddEbookPage() {
  const router = useRouter();

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    genre: "",
    cover: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const ebook = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        genre: formData.genre,
        cover: formData.cover,
        writer: user?.name,
        writerEmail: user?.email,
      };

      await axios.post(`${API_URL}/ebooks`, ebook);

      Toaster.success("Ebook Added Successfully");

      router.push("/dashboard/writer/manage-ebooks");
    } catch (error) {
      console.log(error);

      Toaster.error("Failed to add ebook");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div className="bg-white rounded-2xl shadow-lg border p-5 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Add Ebook
        </h1>

        <p className="text-gray-500 mb-8">
          Publish a new ebook for readers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Ebook Title
            </label>

            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter ebook title"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              rows="6"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Full ebook description..."
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Price ($)
              </label>

              <input
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                placeholder="20"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Genre
              </label>

              <select
                name="genre"
                required
                value={formData.genre}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Genre</option>
                <option>Fiction</option>
                <option>Mystery</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
                <option>Fantasy</option>
                <option>Horror</option>
                <option>Biography</option>
                <option>History</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Cover Image URL
            </label>

            <input
              type="text"
              name="cover"
              required
              value={formData.cover}
              onChange={handleChange}
              placeholder="Paste imgBB image URL"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {loading ? "Adding Ebook..." : "Add Ebook"}
          </button>
        </form>
      </div>
    </div>
  );
}