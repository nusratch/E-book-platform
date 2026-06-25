"use client";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage users, ebooks and monitor platform analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Users
          </h3>

          <p className="text-3xl md:text-4xl font-bold mt-3">
            1,254
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Writers
          </h3>

          <p className="text-3xl md:text-4xl font-bold mt-3">
            328
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Ebooks Sold
          </h3>

          <p className="text-3xl md:text-4xl font-bold mt-3">
            5,846
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Revenue
          </h3>

          <p className="text-3xl md:text-4xl font-bold mt-3">
            $18,450
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Monthly Sales
          </h2>

          <div className="h-64 sm:h-72 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 text-center px-4">
            Monthly Sales Chart
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Ebooks by Genre
          </h2>

          <div className="h-64 sm:h-72 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 text-center px-4">
            Genre Pie Chart
          </div>
        </div>
      </div>
    </div>
  );
}