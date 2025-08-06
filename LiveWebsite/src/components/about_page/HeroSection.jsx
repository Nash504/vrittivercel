import React from "react";
import Navbar from "../Navbar";

// Note: You will need to provide the actual image for the background.
// The image should contain the hand holding the logo graphic on the right side.
import about from "../../assets/about.JPEG";

export default function HeroSection() {
  const heroStyle = {
    // This style block assumes 'about.jpeg' is the desired background image.
    backgroundImage: `url(${about.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // Fallback to black for the dark theme
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-grow items-center justify-start">
        <div className="max-w-3xl px-4 py-8 text-left lg:px-20">
          {/* Hero Text from the Image */}
          <h1 className="text-5xl font-bold text-orange-400 mb-6 md:text-6xl">
            Who We Are iwd
          </h1>
          <p className="text-md text-gray-200 leading-relaxed md:text-md">
            Vritti is on a mission to transform careers and companies in the oil
            & gas sector—by putting real skills and readiness at the heart of
            every opportunity.
          </p>
          <p className="mt-4 text-md text-gray-200 leading-relaxed md:text-md">
            We’re not just a placement agency. We are educators, mentors, and
            career partners, empowering individuals to upskill, certify, and
            step confidently into new roles. For employers, we offer a trusted
            talent pool—every candidate is trained, verified, and
            pre-interviewed to ensure success from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
