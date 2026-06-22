import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-950 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          Dashboard
        </h2>

        <div className="flex flex-col gap-4">
          <Link href="/dashboard/user">
            User Dashboard
          </Link>

          <Link href="/dashboard/writer">
            Writer Dashboard
          </Link>

          <Link href="/dashboard/admin">
            Admin Dashboard
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}