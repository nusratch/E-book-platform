"use client";

import { useState } from "react";

export default function EditEbookPage() {
  const [formData, setFormData] = useState({
    title: "The Lost Kingdom",
    description:
      "This is a sample ebook description.",
    price: "15",
    genre: "Fantasy",
    cover: "https://i.ibb.co/example.jpg",
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

    alert("Ebook Updated Successfully");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border p-8">
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
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Update Ebook
          </button>
        </form>
      </div>
    </div>
  );
}