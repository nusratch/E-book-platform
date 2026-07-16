"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";
import toast from "react-hot-toast";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await axios.patch(`${API_URL}/users/${id}`, {
        role,
      });

      toast.success("Role Updated");
      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error("Role update failed");
    }
  };

  const handleDelete = async (id, email) => {
    if (email === "admin@fable.com") {
      toast.error("Admin cannot be deleted");
      return;
    }

    const confirmDelete = confirm("Delete this user?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/users/${id}`);

      toast.success("User Deleted");
      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

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
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4 capitalize">
                  {user.role}
                </td>

                <td className="p-4">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(
                        user._id,
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  >
                    <option value="user">
                      User
                    </option>

                    <option value="writer">
                      Writer
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      handleDelete(
                        user._id,
                        user.email
                      )
                    }
                    disabled={
                      user.email === "admin@fable.com"
                    }
                    className={`px-4 py-2 rounded-lg text-white ${
                      user.email === "admin@fable.com"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
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