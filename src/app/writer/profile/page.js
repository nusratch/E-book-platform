"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WriterProfile() {
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

    if (currentUser.role !== "writer") {
      router.replace("/");
      return;
    }

    setUser(currentUser);
  }, [router]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="h-36 sm:h-44 lg:h-52 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-500"></div>

        <div className="px-5 sm:px-8 lg:px-10 pb-8">

          <div className="-mt-16 sm:-mt-20 flex flex-col lg:flex-row items-center lg:items-end gap-6 text-center lg:text-left">

            <img
              src="https://i.pravatar.cc/250?img=25"
              alt="Writer"
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white object-cover shadow-lg"
            />

            <div className="flex-1">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">
                {user.name}
              </h1>

              <p className="mt-2 text-gray-500 text-base sm:text-lg">
                Ebook Writer
              </p>

              <p className="mt-1 text-violet-600 break-all text-sm sm:text-base">
                {user.email}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">

            <div className="rounded-2xl bg-violet-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-violet-600">
                0
              </h2>

              <p className="mt-2 text-gray-600">
                Published Books
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-violet-600">
                0
              </h2>

              <p className="mt-2 text-gray-600">
                Total Sales
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-violet-600">
                0.0
              </h2>

              <p className="mt-2 text-gray-600">
                Average Rating
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6 text-center">
              <h2 className="text-4xl font-bold text-violet-600">
                $0
              </h2>

              <p className="mt-2 text-gray-600">
                Total Earnings
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border p-6">

            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Biography
            </h2>

            <p className="text-gray-600 leading-8 text-sm sm:text-base">
              Welcome to your writer profile. From here you can manage your
              ebooks, monitor sales, publish new books, and track your writing
              progress on the Fable platform.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}