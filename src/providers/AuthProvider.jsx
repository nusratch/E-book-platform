"use client";

import { SessionProvider } from "better-auth/react";

export default function AuthProvider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}