import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import "./globals.css";
import {Toaster} from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}