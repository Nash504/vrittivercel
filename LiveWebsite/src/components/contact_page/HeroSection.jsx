"use client";
import React from "react";
import Navbar from "../Navbar";
import Contact from "../../assets/Contact.jpeg"; // Desktop image
import ContactPhone from "../../assets/contact_phone.jpg"; // Mobile image
import useIsMobile from "../../hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  // This style object remains the best way to dynamically switch
  // the background image source within a JSX file.
  const heroStyle = {
    backgroundImage: `url(${isMobile ? ContactPhone.src : Contact.src})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // Fallback color
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div
        // This is the key change: Using Tailwind's responsive prefixes is cleaner
        // It means: "add a lot of top padding by default, but on medium screens
        // and up (md:), remove the top padding."
        className="flex flex-grow items-center justify-start px-4 pt-48 md:pt-0 lg:px-20"
      >
        <div className="max-w-4xl text-left sm:pb-">
          {/* Changed to an h1 for better semantics (SEO and accessibility) */}
          <h1 className="text-4xl -mt-40 font-bold leading-tight md:text-5xl lg:text-5xl">
            <span className="text-amber-500">
              Have a question,
              <br />{" "}
            </span>
            partnership inquiry, <br /> or need support?
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-gray-300">
            Reach out to the Vritti team and we'll get <br />
            back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}
