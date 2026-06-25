"use client";

const transactions = [
  {
    id: "TXN-1001",
    type: "Ebook Purchase",
    email: "john@example.com",
    amount: "$15",
    date: "12 Jun 2026",
  },
  {
    id: "TXN-1002",
    type: "Publishing Fee",
    email: "writer@example.com",
    amount: "$10",
    date: "14 Jun 2026",
  },
  {
    id: "TXN-1003",
    type: "Ebook Purchase",
    email: "emma@example.com",
    amount: "$22",
    date: "18 Jun 2026",
  },
];

export default function TransactionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Transactions
        </h1>

        <p className="text-gray-500 mt-2">
          View all publishing fee and ebook purchase transactions.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">
                Transaction ID
              </th>
              <th className="text-left p-4">
                Type
              </th>
              <th className="text-left p-4">
                User Email
              </th>
              <th className="text-left p-4">
                Amount
              </th>
              <th className="text-left p-4">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b"
              >
                <td className="p-4 font-medium">
                  {transaction.id}
                </td>

                <td className="p-4">
                  {transaction.type}
                </td>

                <td className="p-4">
                  {transaction.email}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  {transaction.amount}
                </td>

                <td className="p-4">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}