"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (!token || !savedUser) {
      router.push("/login");
      return;
    }

    const currentUser = JSON.parse(savedUser);
    setUser(currentUser);

    const path = window.location.pathname;

    if (
      path.startsWith("/dashboard/user") &&
      currentUser.role !== "user"
    ) {
      router.replace("/dashboard");
    }

    if (
      path.startsWith("/dashboard/writer") &&
      currentUser.role !== "writer"
    ) {
      router.replace("/dashboard");
    }

    if (
      path.startsWith("/dashboard/admin") &&
      currentUser.role !== "admin"
    ) {
      router.replace("/dashboard");
    }
  }, [router]);

  const dashboardLinks = () => {
    if (!user) return null;

    if (user.role === "user") {
      return (
        <>
          <Link href="/dashboard/user" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Dashboard Home
          </Link>

          <Link href="/dashboard/user/purchased-ebooks" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Purchased Ebooks
          </Link>

          <Link href="/dashboard/user/purchase-history" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Purchase History
          </Link>

          <Link href="/dashboard/user/bookmarks" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Bookmarks
          </Link>
        </>
      );
    }

    if (user.role === "writer") {
      return (
        <>
          <Link href="/dashboard/writer" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Dashboard Home
          </Link>

          <Link href="/dashboard/writer/add-ebook" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Add Ebook
          </Link>

          <Link href="/dashboard/writer/manage-ebooks" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Manage Ebooks
          </Link>

          <Link href="/dashboard/writer/sales-history" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Sales History
          </Link>

          <Link href="/dashboard/writer/bookmarks" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
            Bookmarks
          </Link>
        </>
      );
    }

    return (
      <>
        <Link href="/dashboard/admin" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
          Dashboard Home
        </Link>

        <Link href="/dashboard/admin/manage-users" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
          Manage Users
        </Link>

        <Link href="/dashboard/admin/manage-ebooks" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
          Manage Ebooks
        </Link>

        <Link href="/dashboard/admin/transactions" className="px-4 py-3 rounded-lg hover:bg-blue-800 transition">
          Transactions
        </Link>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <div className="lg:hidden bg-blue-950 text-white flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Fable Dashboard</h2>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl"
        >
          ☰
        </button>
      </div>

      <aside
        className={`bg-blue-950 text-white w-full lg:w-72 lg:block ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-6">
          <h2 className="hidden lg:block text-3xl font-bold mb-8">
            Fable Dashboard
          </h2>

          <nav className="flex flex-col gap-2">
            {dashboardLinks()}

            <Link
              href="/"
              className="px-4 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Back To Home
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}