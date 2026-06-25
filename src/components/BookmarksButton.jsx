"use client";

import { useState } from "react";

export default function BookmarksButton({ ebook }) {
  const [saved, setSaved] = useState(false);

  const handleBookmark = () => {
    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const exists = bookmarks.find(
      (item) => item._id === ebook._id
    );

    if (exists) {
      alert("Already bookmarked!");
      return;
    }

    bookmarks.push(ebook);

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

    setSaved(true);

    alert("Bookmark added!");
  };

  return (
    <button
      onClick={handleBookmark}
      className="w-full sm:w-auto border border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 transition font-medium"
    >
      {saved ? "Bookmarked ✓" : "Bookmark"}
    </button>
  );
}