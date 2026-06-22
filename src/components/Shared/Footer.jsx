import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Fable
            </h2>

            <p className="text-slate-300 leading-7">
              Discover, read, and share original ebooks
              from talented writers around the world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/browse-ebooks">
                  Browse Ebooks
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Information
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="#">
                  About
                </Link>
              </li>

              <li>
                <Link href="#">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Newsletter
            </h3>

            <p className="text-slate-300 mb-4">
              Subscribe to receive ebook updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-l-lg text-black outline-none"
              />

              <button className="bg-blue-600 px-5 rounded-r-lg hover:bg-blue-700 transition">
                Join
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#">
                <FaFacebookF size={18} />
              </a>

              <a href="#">
                <FaXTwitter size={18} />
              </a>

              <a href="#">
                <FaLinkedinIn size={18} />
              </a>

              <a href="#">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © 2026 Fable. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}