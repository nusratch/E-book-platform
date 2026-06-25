"use client";

const ebooks = [
  {
    id: 1,
    title: "The Lost Kingdom",
    writer: "John Doe",
    price: "$15",
    status: "Published",
  },
  {
    id: 2,
    title: "Dark Mystery",
    writer: "Sarah Smith",
    price: "$20",
    status: "Unpublished",
  },
  {
    id: 3,
    title: "Future World",
    writer: "Alex Johnson",
    price: "$12",
    status: "Published",
  },
];

export default function ManageEbooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Manage All Ebooks
        </h1>

        <p className="text-gray-500 mt-2">
          Publish, unpublish or remove ebooks from the platform.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Writer</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Publish</th>
              <th className="text-left p-4">Delete</th>
            </tr>
          </thead>

          <tbody>
            {ebooks.map((ebook) => (
              <tr key={ebook.id} className="border-b">
                <td className="p-4 font-medium">
                  {ebook.title}
                </td>

                <td className="p-4">
                  {ebook.writer}
                </td>

                <td className="p-4">
                  {ebook.price}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ebook.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ebook.status}
                  </span>
                </td>

                <td className="p-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    {ebook.status === "Published"
                      ? "Unpublish"
                      : "Publish"}
                  </button>
                </td>

                <td className="p-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}