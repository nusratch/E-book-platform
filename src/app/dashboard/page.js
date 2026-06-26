"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !savedUser) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.role === "user") {
      router.replace("/dashboard/user");
      return;
    }

    if (user.role === "writer") {
      router.replace("/dashboard/writer");
      return;
    }

    if (user.role === "admin") {
      router.replace("/dashboard/admin");
      return;
    }

    router.replace("/");
  }, [router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-slate-700">
          Redirecting to your dashboard...
        </h2>
      </div>
    </div>
  );
}