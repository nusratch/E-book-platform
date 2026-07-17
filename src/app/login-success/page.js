"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function LoginSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const finishLogin = async () => {
      try {const session = await authClient.getSession();

           console.log("SESSION:", session);
           console.log("USER:", session?.data?.user);
          console.log("EMAIL:", session?.data?.user?.email);

        const sessionData = session?.data;

        if (!sessionData?.user?.email) {
          router.replace("/login");
          return;
        }

        const email = sessionData.user.email;

        let user;
const res = await axios.get(`${API_URL}/users/${email}`);

if (res.data) {
  user = res.data;
} else {
  user = {
    name: sessionData.user.name,
    email: sessionData.user.email,
    image: sessionData.user.image,
    role: "user",
  };

  await axios.post(`${API_URL}/users`, user);
}
        const tokenRes = await axios.post(`${API_URL}/jwt`, {
          email: user.email,
          role: user.role,
        });

        localStorage.setItem("token", tokenRes.data.token);
        localStorage.setItem("user", JSON.stringify(user));

        console.log("Saved User:", user);
       console.log("LocalStorage:", localStorage.getItem("user"));

        router.replace("/");
      } catch (error) {
        console.error(error);
        router.replace("/login");
      }
    };

    finishLogin();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Logging you in...
    </div>
  );
}