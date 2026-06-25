export default function PurchaseHistoryPage() {
  const purchases = [
    {
      id: 1,
      title: "Atomic Habits",
      writer: "James Clear",
      price: 15,
      date: "2026-06-15",
      status: "Purchased",
    },
    {
      id: 2,
      title: "The Silent Patient",
      writer: "Alex Michaelides",
      price: 18,
      date: "2026-06-18",
      status: "Purchased",
    },
    {
      id: 3,
      title: "Deep Work",
      writer: "Cal Newport",
      price: 20,
      date: "2026-06-20",
      status: "Purchased",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Purchase History
        </h1>

        <p className="text-gray-500 mt-2">
          View all your ebook purchases.
        </p>
      </div>

      <div className="bg-white rounded-2xl border shadow overflow-x-auto">

        <table className="min-w-[700px] w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-4">Ebook</th>
              <th className="text-left p-4">Writer</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Purchase Date</th>
              <th className="text-left p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-t"
              >
                <td className="p-4">
                  {purchase.title}
                </td>

                <td className="p-4">
                  {purchase.writer}
                </td>

                <td className="p-4">
                  ${purchase.price}
                </td>

                <td className="p-4">
                  {purchase.date}
                </td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {purchase.status}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}