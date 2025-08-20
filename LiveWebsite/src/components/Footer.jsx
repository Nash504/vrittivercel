// components/Footer.jsx
import React from "react";
import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import footerBackground from "../assets/Footer.png";
import Image from "next/image";
import Link from "next/link";
// A placeholder for the logo component/image
const VrittiLogo = () => (
  <div className="mb-4">
    <Image
      // Correct path to the SVG in the public directory
      src="/logos/Vritti.svg"
      alt="Vritti Logo"
      width={150} // Set an appropriate width
      height={42} // Set an appropriate height
      className="mb-2"
    />
  </div>
);

export default function Footer() {
  const footerStyle = {
    backgroundImage: `url(${footerBackground.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };

  return (
    <footer className="text-gray-300" style={footerStyle}>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-4 sm:pl-20">
            <VrittiLogo />
            {/* --- CHANGE: Line breaks are now hidden on mobile --- */}
            <p className="text-sm leading-relaxed">
              Vritti is on a mission to transform careers and
              <span className="hidden sm:block"></span>
              companies in the oil & gas sector—by putting
              <span className="hidden sm:block"></span>
              real skills and readiness at the heart of every
              <span className="hidden sm:block"></span> opportunity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h4 className="font-bold mb-8 sm:mb-16 text-yellow-400 tracking-wider text-sm sm:text-base">
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 text-xs">
                <a
                  href="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  ABOUT US
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  COURSES
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  FOR EMPLOYERS
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  CONTACT
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="/terms"
                  className="hover:text-amber-500 transition-colors"
                >
                  TERMS
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  PRIVACY
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* --- CHANGE: Added shadow-lg to the buttons --- */}
              <Link href="https://user.vrittigroup.com/auth/user/register">
                <button className="bg-amber-500 gap-8 hover:bg-amber-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm w-full sm:w-auto flex justify-between items-center group transition-colors shadow-lg">
                  <span className="pr-4">Job Seeker Login</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="https://user.vrittigroup.com/auth/user">
                <button className="bg-amber-500 gap-8 hover:bg-amber-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm w-full sm:w-auto flex justify-between items-center group transition-colors shadow-lg">
                  <span className="pr-4">Employer Login</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-500 text-center py-3 sm:py-2 px-4 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-900 font-medium text-left">
          © 2025 VRITTI, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
