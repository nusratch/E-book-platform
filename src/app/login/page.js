"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";
import  toast from "react-hot-toast";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `${API_URL}/users/${email}`
      );

      const user = res.data;

      if (!user) {
        return toast.error("User not found");
      }

      if (user.password !== password) {
        return toast.error("Incorrect password");
      }

      const tokenRes = await axios.post(
        `${API_URL}/jwt`,
        {
          email: user.email,
          role: user.role,
        }
      );

      localStorage.setItem(
        "token",
        tokenRes.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      

      toast.success("Login Successful");
      const redirect =
        localStorage.getItem("redirectAfterLogin");

      if (redirect) {
        localStorage.removeItem("redirectAfterLogin");
        router.push(redirect);
        return;
      }

      
      if (user.role === "admin") {
        router.push("/dashboard/admin");
      } else if (user.role === "writer") {
        router.push("/dashboard/writer");
      } else {
        router.push("/");
      }

    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

 const handleGoogleLogin = async () => {
  console.log("Google button clicked");
  try {
    await signIn.social({
      provider: "google",
      callbackURL: `${window.location.origin}/login-success`,
    });
  } catch (error) {
    console.log(error);
    toast.error("Google Login Failed");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
          Login to continue reading ebooks
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-4 text-gray-500 text-sm">
            OR
          </span>
          <div className="flex-1 border-t"></div>
        </div>

       <button
  onClick={handleGoogleLogin}
  className="w-full border py-3 rounded-lg font-medium hover:bg-slate-100 transition"
>
  Continue with Google
</button>

        <p className="text-center mt-6 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-900 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}