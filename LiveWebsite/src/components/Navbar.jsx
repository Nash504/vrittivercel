"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <Card className="mb-1 relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-black/30 rounded-3xl mx-3 sm:mx-6 mt-2">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/8 to-white/5 backdrop-blur-lg rounded-3xl"></div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"></div>

      {/* Main Navbar container */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        {/* Logo section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45"></div>
            <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-300 to-orange-500 transform rotate-45"></div>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider">
            VRITTI
          </div>
          <div className="text-xs text-gray-400 ml-2 hidden xl:block">
            SOLUTIONS FOR A POWERFUL FUTURE
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
              className="lg:hidden text-white hover:bg-white/10 rounded-full"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] bg-black/95 backdrop-blur-xl border-white/10 text-white"
          >
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3 mb-8 pt-4 pl-4">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45"></div>
                <div className="absolute top-1 left-1 w-6 h-6 bg-gradient-to-br from-orange-300 to-orange-500 transform rotate-45"></div>
              </div>
              <div className="text-xl font-bold text-white tracking-wider">
                VRITTI
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="mb-8 pl-6">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-white/90 hover:text-white transition-all duration-300 uppercase tracking-wide py-3 border-b border-white/10 hover:border-orange-400"
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
