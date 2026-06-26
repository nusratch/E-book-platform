"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

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
    setIsOpen(false);
    router.push("/");
  };

  const getDashboardLink = () => {
    if (!user) return "/dashboard";
    if (user.role === "admin") return "/dashboard/admin";
    if (user.role === "writer") return "/dashboard/writer";
    return "/dashboard/user";
  };

  const getProfileLink = () => {
    if (!user) return "/";
    if (user.role === "writer") return "/writer/profile";
    if (user.role === "admin") return "/dashboard/admin";
    return "/user/profile";
  };

  const navLink = (href, label) => (
    <Link
      href={href}
      className={`transition duration-200 hover:text-yellow-300 ${
        pathname === href
          ? "text-yellow-300 font-semibold"
          : "text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 sm:h-18 lg:h-20 flex items-center justify-between">

          <Link href="/">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold cursor-pointer">
              📚 Fable
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium">
            {navLink("/", "Home")}
            {navLink("/browse-ebooks", "Browse Ebooks")}
            {navLink(getDashboardLink(), "Dashboard")}
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">

            {user ? (
              <>
                <Link
                  href={getProfileLink()}
                  className="font-semibold hover:text-yellow-300 transition whitespace-nowrap"
                >
                  👤 {user.name}
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-sm lg:text-base"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-900 transition text-sm lg:text-base"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg bg-white text-blue-900 hover:bg-blue-100 transition text-sm lg:text-base"
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
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

       {isOpen && (
          <div className="md:hidden border-t border-blue-700 bg-blue-900 py-4">
            <div className="flex flex-col gap-3">

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-lg transition ${
                  pathname === "/"
                    ? "bg-blue-700 text-yellow-300"
                    : "hover:bg-blue-800"
                }`}
              >
                Home
              </Link>

              <Link
                href="/browse-ebooks"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-lg transition ${
                  pathname === "/browse-ebooks"
                    ? "bg-blue-700 text-yellow-300"
                    : "hover:bg-blue-800"
                }`}
              >
                Browse Ebooks
              </Link>

              <Link
                href={getDashboardLink()}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Dashboard
              </Link>

              {user ? (
                <>
                  <Link
                    href={getProfileLink()}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                  >
                    👤 {user.name}
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-900 transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-4 py-2 rounded-lg bg-white text-blue-900 hover:bg-blue-100 transition"
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