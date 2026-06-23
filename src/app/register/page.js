import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
          Join Fable and start your reading journey
        </p>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Email
            </label>

            <input
              type="email"
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
              placeholder="Enter password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Select Role
            </label>

            <select className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
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

        <p className="text-center mt-6 text-sm sm:text-base">
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