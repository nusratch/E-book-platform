"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function BookmarksButton({ ebook }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const res = await axios.get(
          `${API_URL}/bookmarks/${user.email}`
        );

        const exists = res.data.find(
          (item) => item.ebookId === ebook._id
        );

        if (exists) {
          setSaved(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkBookmark();
  }, [ebook]);

  const handleBookmark = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        return;
      }

      if (saved) {
        alert("Already bookmarked");
        return;
      }

      await axios.post(`${API_URL}/bookmarks`, {
        ebookId: ebook._id,
        title: ebook.title,
        writer: ebook.writer,
        cover: ebook.cover,
        price: ebook.price,
        email: user.email,
      });

      setSaved(true);

      alert("Bookmark added successfully");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Bookmark failed"
      );
    }
  };

  return (
    <button
      onClick={handleBookmark}
      disabled={saved}
      className={`w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition ${
        saved
          ? "bg-green-600 text-white cursor-not-allowed"
          : "border border-blue-900 text-blue-900 hover:bg-blue-50"
      }`}
    >
      {saved ? "Bookmarked ✓" : "Bookmark"}
    </button>
  );
}