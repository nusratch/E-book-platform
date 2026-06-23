export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Manage users, writers, ebooks, and platform activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Total Users
          </h3>

          <p className="text-3xl font-bold mt-2">
            1,250
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Total Writers
          </h3>

          <p className="text-3xl font-bold mt-2">
            120
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Total Ebooks
          </h3>

          <p className="text-3xl font-bold mt-2">
            560
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">
            Revenue
          </h3>

          <p className="text-3xl font-bold mt-2">
            $12,450
          </p>
        </div>

      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border">
        <h2 className="text-2xl font-bold mb-4">
          Platform Overview
        </h2>

        <p className="text-gray-500">
          Monitor user registrations, ebook uploads, sales, and platform performance from here.
        </p>
      </div>

    </div>
  );
}