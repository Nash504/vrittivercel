"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const VrittiLogo = () => (
  <div>
    <Image
      // Correct path to the SVG in the public directory
      src="/logos/Vritti.svg"
      alt="Vritti Logo"
      width={80} // Set an appropriate width
      style={{
        filter: "drop-shadow(0 0 0.75rem rgba(255,255,255,0.2))",
        opacity: 0.9,
      }}
      height={20} // Set an appropriate height
    />
  </div>
);

const Navbar = () => {
  return (
    <Card className="mb-1 relative overflow-hidden border border-white/20 shadow-2xl backdrop-blur-2xl bg-black/40 rounded-3xl mx-3 sm:mx-6 mt-2">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 backdrop-blur-xl rounded-3xl"></div>

      {/* Secondary glass layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent backdrop-blur-sm rounded-3xl"></div>

      {/* Enhanced border glow with glass effect */}
      <div className="absolute inset-0 rounded-3xl border border-white/30 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.05)]"></div>

      {/* Main Navbar container */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative">
            <VrittiLogo />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 xl:space-x-12">
            <li>
              <Link
                href="/"
                className="relative group text-sm font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide"
              >
                <span className="relative z-10">HOME</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative group text-sm font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide"
              >
                <span className="relative z-10">ABOUT US</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative group text-sm font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide"
              >
                <span className="relative z-10">CONTACT US</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <Button className="px-4 lg:px-6 py-2 text-xs font-medium text-black bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            SIGN UP
          </Button>
          <Button className="px-4 lg:px-6 py-2 text-xs font-medium text-black bg-orange-600 hover:bg-orange-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            LOGIN
          </Button>
        </div>

        {/* Mobile Menu using Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:backdrop-blur-sm rounded-full border border-white/20"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] bg-black/85 backdrop-blur-2xl border-white/20 text-white shadow-2xl"
          >
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3 mb-8 pt-4 pl-4">
              <div className="relative">
                <VrittiLogo />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="mb-8 pl-6">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400/60 hover:bg-white/5 hover:backdrop-blur-sm px-4 rounded-lg"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400/60 hover:bg-white/5 hover:backdrop-blur-sm px-4 rounded-lg"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400/60 hover:bg-white/5 hover:backdrop-blur-sm px-4 rounded-lg"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4 p-4">
              <Button className="w-full px-6 py-3 text-sm font-medium text-black bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                SIGN UP
              </Button>
              <Button className="w-full px-6 py-3 text-sm font-medium text-black bg-orange-600 hover:bg-orange-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                LOGIN
              </Button>
            </div>

            {/* Mobile tagline */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs text-gray-400 text-center uppercase tracking-wider">
                SOLUTIONS FOR A POWERFUL FUTURE
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Navbar;
