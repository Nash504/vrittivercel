"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const VrittiLogo = ({ size = 80 }) => (
  <div>
    <Image
      src="/logos/Vritti.svg"
      alt="Vritti Logo"
      width={size}
      height={size / 4}
      style={{
        filter: "drop-shadow(0 0 0.75rem rgba(255,255,255,0.2))",
        opacity: 0.9,
      }}
    />
  </div>
);

const Navbar = () => {
  return (
    <Card className="mb-1 relative overflow-hidden border border-white/20 shadow-2xl backdrop-blur-2xl bg-black/40 rounded-3xl mx-2 sm:mx-6 mt-2">
      {/* Main Navbar container */}
      <div className="relative z-10 flex items-center justify-between px-3 sm:px-6 lg:px-8 py-1 sm:py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Desktop logo */}
          <div className="hidden sm:block">
            <VrittiLogo size={80} />
          </div>
          {/* Mobile logo (smaller) */}
          <div className="sm:hidden">
            <VrittiLogo size={60} />
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

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:backdrop-blur-sm rounded-full border border-white/20"
            >
              <Menu className="h-5 w-5" /> {/* smaller icon */}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[260px] sm:w-[300px] bg-black/85 backdrop-blur-2xl border-white/20 text-white shadow-2xl p-4"
          >
            {/* Mobile Logo */}
            <div className="flex items-center mb-6">
              <VrittiLogo size={50} />
            </div>

            {/* Mobile Nav */}
            <nav className="mb-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="block text-sm font-medium uppercase tracking-wide py-2 px-2 hover:text-orange-400 transition-all"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-sm font-medium uppercase tracking-wide py-2 px-2 hover:text-orange-400 transition-all"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-sm font-medium uppercase tracking-wide py-2 px-2 hover:text-orange-400 transition-all"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Auth */}
            <div className="flex flex-col gap-3">
              <Button className="w-full text-xs py-2 bg-orange-500 hover:bg-orange-600 rounded-full uppercase">
                SIGN UP
              </Button>
              <Button className="w-full text-xs py-2 bg-orange-600 hover:bg-orange-700 rounded-full uppercase">
                LOGIN
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Navbar;
