"use client";
import React from "react";
import Navbar from "../Navbar";
import about from "../../assets/about.jpeg"; // Desktop image
import aboutPhone from "../../assets/about_phone.jpg"; // Mobile image
import useIsMobile from "../../hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  const heroStyle = {
    backgroundImage: `url(${isMobile ? aboutPhone.src : about.src})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // fallback color
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-grow items-center justify-start">
        <div className="max-w-3xl sm:ml-20 px-4 sm:py-8 pt-40 text-left lg:px-4">
          {/* Hero Text */}
          <p className="text-5xl md:text-5xl font-extrabold text-amber-500 mb-4 leading-tight">
            Who We Are
          </p>

          <p className="text-md  text-gray-100 leading-relaxed font-medium mb-6">
            Vritti is on a mission to transform careers and companies in the oil
            & gas sector—by putting real skills and readiness at the heart of
            every opportunity.
          </p>

          {/* <span className="hidden sm:block"> */}
          <p className="text-md font-medium text-gray-300 leading-relaxed">
            We’re not just a placement agency. We are educators, mentors, and
            career partners, empowering individuals to upskill, certify, and
            step confidently into new roles. For
            <br /> employers, we offer a trusted talent pool—every candidate is
            trained, verified, and <br />
            pre-interviewed to ensure success from day one.
          </p>
          {/* </span> */}
        </div>
      </div>
    </section>
  );
}
