"use client";

import { useState } from "react";

export default function AddEbookPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    genre: "",
    cover: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Ebook Added Successfully");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border p-8">
        <h1 className="text-3xl font-bold mb-2">
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
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter ebook title"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Full ebook description..."
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Price ($)
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="20"
                className="w-full border rounded-lg p-3"
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
                required
                className="w-full border rounded-lg p-3"
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
              Cover Image URL (imgBB)
            </label>

            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              required
              placeholder="Paste imgBB image URL"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
          >
            Add Ebook
          </button>
        </form>
      </div>
    </div>
  );
}