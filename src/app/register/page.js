"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Toaster } from "react-hot-toast";

export default function RegisterPage() {
const router = useRouter();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
role: "user",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleRegister = async (e) => {
e.preventDefault();

if (formData.password !== formData.confirmPassword) {
  return Toaster.error("Passwords do not match");
}

try {
  const userInfo = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    role: formData.role,
    createdAt: new Date(),
  };

  await axios.post(`${API_URL}/users`, userInfo);

  const tokenRes = await axios.post(`${API_URL}/jwt`, {
    email: formData.email,
    role: formData.role,
  });

  localStorage.setItem(
    "token",
    tokenRes.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: formData.name,
      email: formData.email,
      role: formData.role,
    })
  );

  Toaster.success("Registration Successful");

  window.location.href = "/";
} catch (error) {
  console.log(error);

  Toaster.error(
    error?.response?.data?.message ||
      "Registration Failed"
  );
}

};

return (
<div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
<div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
<h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
Create Account
</h1>

    <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
      Join Fable and start your reading journey
    </p>

    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Select Role
        </label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">Reader</option>
          <option value="writer">Writer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
      >
        Register
      </button>
    </form>

    <div className="my-6 flex items-center">
      <div className="flex-1 border-t"></div>
      <span className="px-4 text-gray-500 text-sm">
        OR
      </span>
      <div className="flex-1 border-t"></div>
    </div>

    <button className="w-full border py-3 rounded-lg font-medium hover:bg-slate-100 transition">
      Continue with Google
    </button>

    <p className="text-center mt-6">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-blue-900 font-semibold hover:underline"
      >
        Login
      </Link>
    </p>
  </div>
</div>

);
}