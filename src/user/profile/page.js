"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
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
  }, [router]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="h-36 sm:h-44 lg:h-52 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400"></div>

        <div className="px-5 sm:px-8 lg:px-10 pb-8">

          <div className="-mt-16 sm:-mt-20 flex flex-col lg:flex-row items-center lg:items-end gap-6 text-center lg:text-left">

            <img
              src="https://i.pravatar.cc/250?img=12"
              alt="Profile"
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white object-cover shadow-lg"
            />

            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">
                {user.name}
              </h1>

              <p className="mt-2 text-gray-500 text-base sm:text-lg">
                Reader
              </p>

              <p className="mt-1 text-pink-600 break-all text-sm sm:text-base">
                {user.email}
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-pink-600">
                0
              </h2>

              <p className="mt-2 text-gray-600">
                Purchased Books
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-pink-600">
                0
              </h2>

              <p className="mt-2 text-gray-600">
                Bookmarks
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-6 text-center sm:col-span-2 xl:col-span-1">
              <h2 className="text-4xl font-bold text-pink-600">
                Reader
              </h2>

              <p className="mt-2 text-gray-600">
                Current Role
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border p-6">

            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              About
            </h2>

            <p className="text-gray-600 leading-8 text-sm sm:text-base">
              Welcome to your Fable profile. Here you can manage your purchased
              ebooks, bookmarks, and reading activities. This profile displays
              information for the currently logged-in reader only.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}