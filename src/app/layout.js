import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </AuthProvider>
      </body>
    </html>
  );
}