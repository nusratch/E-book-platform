"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    writers: 0,
    ebooks: 0,
    revenue: 0,
  });

  const [monthlySales, setMonthlySales] = useState([]);

  const [genreData, setGenreData] = useState([]);

  const COLORS = [
    "#2563eb",
    "#0ea5e9",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
  ];

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

    
      const monthMap = {};

      transactions.forEach((item) => {
        const month = new Date(item.date).toLocaleString("default", {
          month: "short",
        });

        if (!monthMap[month]) {
          monthMap[month] = 0;
        }

        monthMap[month] += Number(item.amount || 0);
      });

      setMonthlySales(
        Object.keys(monthMap).map((month) => ({
          month,
          revenue: monthMap[month],
        }))
      );


      const genreMap = {};

      ebooks.forEach((book) => {
        const genre = book.genre || "Other";

        if (!genreMap[genre]) {
          genreMap[genre] = 0;
        }

        genreMap[genre]++;
      });

      setGenreData(
        Object.keys(genreMap).map((genre) => ({
          name: genre,
          value: genreMap[genre],
        }))
      );
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
          <h3 className="text-sm text-gray-500">
            Total Users
          </h3>

          <p className="text-4xl font-bold mt-3">
            {stats.users}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Writers
          </h3>

          <p className="text-4xl font-bold mt-3">
            {stats.writers}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Ebooks
          </h3>

          <p className="text-4xl font-bold mt-3">
            {stats.ebooks}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-sm text-gray-500">
            Total Revenue
          </h3>

          <p className="text-4xl font-bold mt-3">
            ${stats.revenue}
          </p>
        </div>

      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-xl font-bold mb-6">
            Monthly Sales
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="revenue"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-xl font-bold mb-6">
            Ebook Genres
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {genreData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}