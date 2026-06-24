"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    router.push("/");
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl lg:text-3xl font-bold">
              📚 Fable
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
            <Link href="/" className="hover:text-blue-200 transition">
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

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <p className="font-medium">
                  Hi, {user.name}
                </p>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border border-white bg-blue-600 hover:bg-white hover:text-blue-900 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg bg-white text-blue-900 hover:bg-blue-100 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-blue-700 py-5">
            <div className="flex flex-col gap-4">
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

              {user ? (
                <>
                  <p>
                    Hi, {user.name}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-lg border border-white bg-blue-600 text-center"
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}