import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold">
              📚 Fable
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/browse-ebooks">Browse Ebooks</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <div className="flex gap-3">
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
        </div>
      </div>
    </nav>
  );
}