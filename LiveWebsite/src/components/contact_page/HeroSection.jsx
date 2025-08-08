"use client";
import React from "react";
import Navbar from "../Navbar";
import Contact from "../../assets/Contact.jpeg"; // Desktop image
import ContactPhone from "../../assets/contact_phone.jpg"; // Mobile image
import useIsMobile from "../../hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  const heroStyle = {
    backgroundImage: `url(${isMobile ? ContactPhone.src : Contact.src})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center", // focus on top for mobile
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000",
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div
        className={`flex flex-grow items-center justify-start ${
          isMobile ? "pt-54" : "pt-0"
        }`} // pushes content lower only on mobile
      >
        <div className="max-w-4xl px-4 text-left lg:px-20">
          {/* Hero Text */}
          <p className="text-2xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-orange-500">Have a question, </span>
            partnership inquiry, or need support?
          </p>
          <p className="mt-4 max-w-2xl text-md text-gray-300">
            Reach out to the Vritti team and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}
