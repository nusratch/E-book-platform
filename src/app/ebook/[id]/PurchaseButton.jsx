"use client";

import { useState } from "react";

export default function PurchaseButton({
  ebook,
}) {
  const [loading, setLoading] =
    useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title: ebook.title,
            price: ebook.price,
          }),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unable to start payment.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={loading}
      className="w-full sm:w-auto bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-medium disabled:opacity-60"
    >
      {loading
        ? "Redirecting..."
        : "Purchase Ebook"}
    </button>
  );
}