"use client";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Writer",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@fable.com",
    role: "Admin",
  },
];

export default function ManageUsersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Manage Users
        </h1>

        <p className="text-gray-500 mt-2">
          View users, update roles and manage platform members.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Change Role</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.role}
                </td>

                <td className="p-4">
                  <select className="border rounded-lg px-3 py-2 w-full">
                    <option>User</option>
                    <option>Writer</option>
                    <option>Admin</option>
                  </select>
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