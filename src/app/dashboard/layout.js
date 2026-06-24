"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      <aside className="w-full lg:w-72 bg-blue-950 text-white p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Fable Dashboard
        </h2>

        <nav className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="hover:bg-blue-800 px-4 py-3 rounded-lg transition"
          >
            Dashboard Home
          </Link>

          <Link
            href="/dashboard/user"
            className="hover:bg-blue-800 px-4 py-3 rounded-lg transition"
          >
            User Dashboard
          </Link>

          <Link
            href="/dashboard/writer"
            className="hover:bg-blue-800 px-4 py-3 rounded-lg transition"
          >
            Writer Dashboard
          </Link>

          <Link
            href="/dashboard/admin"
            className="hover:bg-blue-800 px-4 py-3 rounded-lg transition"
          >
            Admin Dashboard
          </Link>

          <Link
            href="/"
            className="hover:bg-blue-800 px-4 py-3 rounded-lg transition"
          >
            Back To Home
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}