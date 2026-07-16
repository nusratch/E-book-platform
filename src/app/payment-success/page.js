"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const completePurchase = async () => {
      const ebookId = searchParams.get("ebookId");

      if (!ebookId) return;

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return;

      try {
        // Get ebook details
        const ebookRes = await axios.get(
          `${API_URL}/ebooks/${ebookId}`
        );

        const ebook = ebookRes.data;

        // Save purchase (backend prevents duplicates)
        await axios.post(`${API_URL}/purchases`, {
          ebookId: ebook._id,
          title: ebook.title,
          writer: ebook.writer,
          price: ebook.price,
          cover: ebook.cover,
          email: user.email,
        });

        // Increase sold count
        await axios.patch(
          `${API_URL}/ebooks/${ebookId}/sold`
        );

        // Save transaction
        await axios.post(`${API_URL}/transactions`, {
          type: "purchase",
          ebookId: ebook._id,
          title: ebook.title,
          amount: ebook.price,
          userEmail: user.email,
        });

        toast.success("Payment Successful!");

        setTimeout(() => {
          router.push("/dashboard/user/purchase-history");
        }, 1500);
      } catch (error) {
        console.log(error);

        if (
          error?.response?.data?.message ===
          "Already purchased"
        ) {
          toast.success("You already purchased this ebook.");

          router.push("/dashboard/user/purchase-history");
          return;
        }

        toast.error("Something went wrong.");
      }
    };

    completePurchase();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-center max-w-lg w-full">

        <div className="text-6xl mb-5">✅</div>

        <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
          Payment Successful
        </h1>

        <p className="text-gray-600 leading-7">
          Your ebook has been purchased successfully.
          Redirecting to your purchase history...
        </p>

      </div>
    </div>
  );
}