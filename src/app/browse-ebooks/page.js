"use client";

import { useEffect, useMemo, useState } from "react";
import EbookCard from "@/components/ebooks/EbookCard";
import EbookFilters from "@/components/ebooks/EbookFilters";
import Pagination from "@/components/ebooks/Pagination";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import toast from "react-hot-toast";

export default function BrowsePage() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetch("https://e-book-platform-backend.vercel.app/ebooks")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch ebooks");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEbooks(data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load ebooks");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredEbooks = useMemo(() => {
    let result = [...ebooks];

    if (search) {
      result = result.filter(
        (ebook) =>
          ebook.title?.toLowerCase().includes(search.toLowerCase()) ||
          ebook.writer?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre !== "all") {
      result = result.filter((ebook) => ebook.genre === genre);
    }

    if (priceRange === "0-10") {
      result = result.filter((ebook) => Number(ebook.price) <= 10);
    }

    if (priceRange === "10-20") {
      result = result.filter(
        (ebook) =>
          Number(ebook.price) > 10 &&
          Number(ebook.price) <= 20
      );
    }

    if (priceRange === "20+") {
      result = result.filter((ebook) => Number(ebook.price) > 20);
    }

    if (sortBy === "low-high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy === "high-low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [ebooks, search, genre, priceRange, sortBy]);

  if (loading) {
    return <LoadingSpinner />;
  }

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

      <EbookFilters
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {filteredEbooks.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            No ebooks found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing your filters.
          </p>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEbooks.map((ebook) => (
              <EbookCard
                key={ebook._id}
                ebook={ebook}
              />
            ))}
          </div>

          <div className="mt-10 md:mt-14 flex justify-center">
            <Pagination />
          </div>
        </>
      )}
    </section>
  );
}