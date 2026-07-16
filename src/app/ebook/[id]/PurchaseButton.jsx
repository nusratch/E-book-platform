"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function PurchaseButton({ ebook }) {
  const [loading, setLoading] = useState(false);
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);

  useEffect(() => {
    const checkPurchase = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        const res = await axios.get(
          `${API_URL}/purchases/${user.email}`
        );

        const exists = res.data.find(
          (item) => item.ebookId === ebook._id
        );

        if (exists) {
          setAlreadyPurchased(true);
        } else {
          setAlreadyPurchased(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkPurchase();
  }, [ebook]);

  const handlePurchase = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login first.");

      localStorage.setItem(
        "redirectAfterLogin",
        window.location.pathname
      );

      window.location.href = "/login";
      return;
    }

    if (user.email === ebook.writerEmail) {
      toast.error("You cannot purchase your own ebook.");
      return;
    }

    if (alreadyPurchased) {
      toast.error("You already purchased this ebook.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ebookId: ebook._id,
          title: ebook.title,
          price: Number(ebook.price),
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Unable to create checkout session.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed.");
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