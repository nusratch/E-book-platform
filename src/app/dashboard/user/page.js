export default function UserDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          User Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your purchases, bookmarks and profile.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">Purchased Ebooks</h3>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">Bookmarks</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">Completed Reads</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <h3 className="text-gray-500 text-sm">Reviews</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg border overflow-x-auto">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Purchase History</h2>
        </div>

        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Book</th>
              <th className="text-left p-4">Writer</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4">Sample Ebook</td>
              <td className="p-4">Writer Name</td>
              <td className="p-4">$20</td>
              <td className="p-4">Purchased</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border">
        <h2 className="text-2xl font-bold mb-4">
          Profile Management
        </h2>

        <p className="text-gray-500">
          View and manage your profile information.
        </p>
      </div>
    </div>
  );
}