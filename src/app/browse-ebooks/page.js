"use client";

import { useEffect, useState } from "react";
import EbookCard from "@/components/ebooks/EbookCard";
import EbookFilters from "@/components/ebooks/EbookFilters";
import Pagination from "@/components/ebooks/Pagination";

export default function BrowsePage() {
  const [ebooks, setEbooks] = useState([]);

 useEffect(() => {
  fetch("https://e-book-platform-backend.vercel.app/ebooks")
    .then((res) => res.json())
    .then((data) => setEbooks(data));
}, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Browse Ebooks
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Explore thousands of ebooks from different genres
        </p>
      </div>

      <div className="mb-8">
        <EbookFilters />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {ebooks.map((ebook) => (
          <EbookCard
            key={ebook._id}
            ebook={ebook}
          />
        ))}
      </div>

      <div className="mt-10 md:mt-14 flex justify-center">
        <Pagination />
      </div>
    </section>
  );
}