export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">
            Total Ebooks
          </h3>

          <p className="text-3xl font-bold text-blue-900 mt-2">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">
            Purchased Books
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">
            Bookmarks
          </h3>

          <p className="text-3xl font-bold text-pink-600 mt-2">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">
            Revenue
          </h3>

          <p className="text-3xl font-bold text-orange-600 mt-2">
            $0
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-3">
          Welcome to Fable
        </h2>

        <p className="text-slate-600">
          Manage your ebooks, purchases, bookmarks and profile
          from one place.
        </p>
      </div>
    </div>
  );
}