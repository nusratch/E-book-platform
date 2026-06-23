"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover & Read
              <span className="text-blue-300">
                {" "}Original Ebooks
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
              Explore thousands of ebooks from talented writers.
              Read anytime, anywhere and support independent authors.
            </p>

            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/browse-ebooks"
                className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
              >
                Browse Ebooks
              </Link>

              <Link
                href="/register"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition"
              >
                Become a Writer
              </Link>
            </div>
          </div>

          <div className="relative w-full">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={slides[currentSlide]}
                alt="Ebook Banner"
                width={700}
                height={500}
                priority
                className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[450px] object-cover transition-all duration-500"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}