"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ebookId = searchParams.get("ebookId");

    if (!ebookId) return;

    fetch(
      `https://e-book-platform-backend.vercel.app/ebooks/${ebookId}/sold`,
      {
        method: "PATCH",
      }
    );
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Payment Successful
      </h1>

      <p className="text-gray-600 text-center">
        Thank you for your purchase.
      </p>
    </div>
  );
}