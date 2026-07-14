"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/lib/api";
import  toast from "react-hot-toast";

export default function EditEbookPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    genre: "",
    cover: "",
  });

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const res = await axios.get(`${API_URL}/ebooks/${id}`);

        setFormData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEbook();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${API_URL}/ebooks/${id}`,
        formData
      );

      toast.success("Ebook Updated Successfully");

      router.push("/dashboard/writer/manage-ebooks");
    } catch (error) {
      console.log(error);

      toast.error("Update Failed");
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-8">
        <h1 className="text-3xl font-bold mb-2">
          Edit Ebook
        </h1>

        <p className="text-gray-500 mb-8">
          Update your ebook information.
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
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Genre
              </label>

              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
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
              value={formData.cover}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Update Ebook
          </button>
        </form>
      </div>
    </div>
  );
}