"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function AdminDashboard() {
  const [stats, setStats] =useState({
    users: 0,
    writers: 0,
    ebooks: 0,
    revenue: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersRes = await axios.get(`${API_URL}/users`);
      const ebooksRes = await axios.get(`${API_URL}/ebooks`);
      const transactionsRes = await axios.get(`${API_URL}/transactions`);

      const users = usersRes.data;
      const ebooks = ebooksRes.data;
      const transactions = transactionsRes.data;

      setStats({
        users: users.filter((u) => u.role === "user").length,
        writers: users.filter((u) => u.role === "writer").length,
        ebooks: ebooks.length,
        revenue: transactions.reduce(
          (sum, item) => sum + Number(item.amount || 0),
          0
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage users, ebooks and monitor platform analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-4xl font-bold mt-3">{stats.users}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">Total Writers</h3>
          <p className="text-4xl font-bold mt-3">{stats.writers}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">Total Ebooks</h3>
          <p className="text-4xl font-bold mt-3">{stats.ebooks}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">Total Revenue</h3>
          <p className="text-4xl font-bold mt-3">
            ${stats.revenue}
          </p>
        </div>

      </div>

    </div>
  );
}