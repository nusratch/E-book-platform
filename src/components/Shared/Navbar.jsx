"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold">
              📚 Fable
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link
              href="/"
              className="hover:text-blue-200 transition"
            >
              Home
            </Link>

            <Link
              href="/browse-ebooks"
              className="hover:text-blue-200 transition"
            >
              Browse Ebooks
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-blue-200 transition"
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border bg-blue-600 border-white hover:bg-white hover:text-blue-900 transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-lg bg-white text-blue-900 hover:bg-blue-100 transition"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-5 border-t border-blue-700">
            <div className="flex flex-col gap-4 pt-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/browse-ebooks"
                onClick={() => setIsOpen(false)}
              >
                Browse Ebooks
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border bg-blue-600 border-white text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg bg-white text-blue-900 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}