"use client";

import { useEffect, useState } from "react";

export default function PurchaseButton({ ebook }) {
  const [loading, setLoading] = useState(false);
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);

  useEffect(() => {
    const purchases =
      JSON.parse(localStorage.getItem("purchased")) || [];

    if (
      purchases.find((item) => item.ebookId === ebook._id)
    ) {
      setAlreadyPurchased(true);
    }
  }, [ebook]);

  const handlePurchase = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      window.location.href = "/login";
      return;
    }

    if (user.email === ebook.writerEmail) {
      alert("You cannot purchase your own ebook.");
      return;
    }

    if (alreadyPurchased) {
      alert("You already purchased this ebook.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ebookId: ebook._id,
            title: ebook.title,
            price: Number(ebook.price),
          }),
        }
      );

      const data = await res.json();

      if (data.url) {
        const purchases =
          JSON.parse(localStorage.getItem("purchased")) || [];

        purchases.push({
          ebookId: ebook._id,
        });

        localStorage.setItem(
          "purchased",
          JSON.stringify(purchases)
        );

        window.location.href = data.url;
      } else {
        alert("Unable to create checkout session.");
      }
    } catch (error) {
      console.log(error);
      alert("Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={loading || alreadyPurchased}
      className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition ${
        alreadyPurchased
          ? "bg-green-600 text-white cursor-not-allowed"
          : "bg-blue-900 text-white hover:bg-blue-700"
      }`}
    >
      {alreadyPurchased
        ? "Already Purchased"
        : loading
        ? "Redirecting..."
        : "Purchase Ebook"}
    </button>
  );
}