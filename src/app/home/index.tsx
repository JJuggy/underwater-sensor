"use client";
import { useRouter } from "next/navigation";
import React from "react";

function HomePage() {
  const router = useRouter();
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-6xl">UWSN DATA TRANSFER RESULTS</h1>
      <div
        onClick={() => {
          router.push("/results");
        }}
        className="px-12 py-4 mt-2 text-white rounded-sm bg-purple-700"
      >
        View Data
      </div>
    </div>
  );
}

export default HomePage;
