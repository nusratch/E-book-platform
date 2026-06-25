"use client";

export default function ManageEbooksPage() {
  const ebooks = [
    {
      id: 1,
      title: "The Lost Kingdom",
      price: 15,
      status: "Published",
    },
    {
      id: 2,
      title: "Dark Mystery",
      price: 20,
      status: "Unpublished",
    },
    {
      id: 3,
      title: "Future World",
      price: 12,
      status: "Published",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold">
            Manage Ebooks
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your uploaded ebooks.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Edit</th>
                <th className="text-left p-4">Delete</th>
                <th className="text-left p-4">Publish</th>
              </tr>
            </thead>

            <tbody>
              {ebooks.map((ebook) => (
                <tr
                  key={ebook.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {ebook.title}
                  </td>

                  <td className="p-4">
                    ${ebook.price}
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
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Edit
                    </button>
                  </td>

                  <td className="p-4">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                      Delete
                    </button>
                  </td>

                  <td className="p-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                      {ebook.status === "Published"
                        ? "Unpublish"
                        : "Publish"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}