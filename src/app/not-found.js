import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-4">📚</div>

        <h1 className="text-4xl font-bold mb-3">
          Page Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}