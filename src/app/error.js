"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Something went wrong
        </h1>

        <button
          onClick={() => reset()}
          className="btn btn-primary"
        >
          Reload
        </button>
      </div>
    </div>
  );
}