"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function UserProfile() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [stats, setStats] = useState({
    purchases: 0,
    bookmarks: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        router.replace("/login");
        return;
      }

      const currentUser = JSON.parse(savedUser);

      if (currentUser.role !== "user") {
        router.replace("/");
        return;
      }

      setUser(currentUser);

      try {
        const purchaseRes = await axios.get(
          `${API_URL}/purchases/${currentUser.email}`
        );

        const bookmarkRes = await axios.get(
          `${API_URL}/bookmarks/${currentUser.email}`
        );

        setStats({
          purchases: purchaseRes.data.length,
          bookmarks: bookmarkRes.data.length,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="h-36 sm:h-44 lg:h-52 bg-gradient-to-r from-blue-900 via-blue-500 to-sky-500"></div>

        <div className="px-5 sm:px-8 lg:px-10 pb-8">

          <div className="-mt-16 sm:-mt-20 flex flex-col lg:flex-row items-center lg:items-end gap-6 text-center lg:text-left">
       <img
  src={
    user.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name || "User"
    )}&background=2563eb&color=ffffff&size=250`
  }
  alt={`${user.name}'s Profile`}
  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white object-cover shadow-lg"
/>
            <div className="flex-1">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {user.name}
              </h1>

              <p className="mt-2 text-gray-500">
                Reader
              </p>

              <p className="text-blue-600 mt-1">
                {user.email}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

            <div className="rounded-2xl bg-blue-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-600">
                {stats.purchases}
              </h2>

              <p className="mt-2 text-gray-600">
                Purchased Books
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-600">
                {stats.bookmarks}
              </h2>

              <p className="mt-2 text-gray-600">
                Bookmarks
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-600">
                {user.role}
              </h2>

              <p className="mt-2 text-gray-600">
                Current Role
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border p-6">

            <h2 className="text-xl font-bold mb-4">
              About
            </h2>

            <p className="text-gray-600 leading-8">
              Welcome to your Fable profile. Here you can manage your purchased ebooks, bookmarks and reading activity.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}