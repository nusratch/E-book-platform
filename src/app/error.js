"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-6">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Reload
        </button>
      </div>
    </div>
  );
}