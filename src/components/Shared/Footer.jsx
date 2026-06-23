import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20 md:mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Fable
            </h2>

            <p className="text-slate-300 leading-7">
              Discover, read, and share original ebooks
              from talented writers around the world.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/browse-ebooks"
                  className="hover:text-white transition"
                >
                  Browse Ebooks
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white transition"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Information
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Newsletter
            </h3>

            <p className="text-slate-300 mb-4">
              Subscribe to receive ebook updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg text-black outline-none"
              />

              <button className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
                Join
              </button>
            </div>

            <div className="flex justify-center sm:justify-start gap-7 mt-8 mb-6">
              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 text-center text-sm md:text-base text-slate-400">
          © 2026 Fable. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}