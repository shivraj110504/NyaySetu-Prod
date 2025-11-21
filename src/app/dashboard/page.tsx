// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        console.log("Dashboard: Checking session...");

        const { data: session, error } = await authClient.getSession();

        console.log("Dashboard: Session result:", { session, error });

        if (!mounted) return;

        if (error) {
          console.error("Dashboard: Session error:", error);
          window.location.replace("/login");
          return;
        }

        if (session?.user) {
          console.log("Dashboard: User found:", session.user.email);
          setUser(session.user);
          setLoading(false);
        } else {
          console.log("Dashboard: No user in session, redirecting...");
          window.location.replace("/login");
        }
      } catch (err) {
        console.error("Dashboard: Failed to get session:", err);
        if (mounted) {
          window.location.replace("/login");
        }
      }
    };

    // Small delay to ensure cookies are available after redirect
    const timer = setTimeout(() => {
      checkSession();
    }, 200);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleLogout = async () => {
    try {
      console.log("Logging out...");
      await authClient.signOut();
      window.location.replace("/login");
    } catch (err) {
      console.error("Logout error:", err);
      window.location.replace("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#171717] rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">
              Welcome to Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="bg-black/50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-cyan-500 mb-4">
              User Information
            </h2>

            <div className="space-y-3">
              <div className="flex">
                <span className="text-gray-400 w-24">Name:</span>
                <span className="text-white">{user?.name || "N/A"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-24">Email:</span>
                <span className="text-white">{user?.email || "N/A"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-24">Verified:</span>
                <span className={user?.emailVerified ? "text-green-500" : "text-red-500"}>
                  {user?.emailVerified ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-24">User ID:</span>
                <span className="text-gray-500 text-sm">{user?.id || "N/A"}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/50 rounded-xl">
            <p className="text-green-500 text-center">
              🎉 Authentication is working! You are successfully logged in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}