import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white p-4 lg:p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
          VRITTI
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
