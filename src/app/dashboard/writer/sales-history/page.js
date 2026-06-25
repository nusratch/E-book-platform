"use client";

export default function SalesHistoryPage() {
  const sales = [
    {
      id: 1,
      title: "The Lost Kingdom",
      buyer: "John Smith",
      date: "12 Jun 2026",
      amount: "$15",
    },
    {
      id: 2,
      title: "Dark Mystery",
      buyer: "Emma Watson",
      date: "14 Jun 2026",
      amount: "$20",
    },
    {
      id: 3,
      title: "Future World",
      buyer: "David Miller",
      date: "18 Jun 2026",
      amount: "$12",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold">
            Sales History
          </h1>

          <p className="text-gray-500 mt-2">
            View all ebook sales.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Ebook Title</th>
                <th className="text-left p-4">Buyer Name</th>
                <th className="text-left p-4">Purchase Date</th>
                <th className="text-left p-4">Amount</th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => (
                <tr
                  key={sale.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {sale.title}
                  </td>

                  <td className="p-4">
                    {sale.buyer}
                  </td>

                  <td className="p-4">
                    {sale.date}
                  </td>

                  <td className="p-4 font-semibold text-green-600">
                    {sale.amount}
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