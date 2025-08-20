"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

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
  const pathname = usePathname();
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);
  const navItemRefs = useRef({});

  // Navigation items
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
  ];

  useEffect(() => {
    // Update slider position based on active route
    const updateSliderPosition = () => {
      if (!navRef.current) return;

      const activeIndex = navItems.findIndex((item) => item.href === pathname);
      if (activeIndex !== -1 && navItemRefs.current[pathname]) {
        const navbarRect = navRef.current.getBoundingClientRect();
        const activeItemRect =
          navItemRefs.current[pathname].getBoundingClientRect();

        const sliderWidth = 80; // w-20 = 80px
        const itemCenter =
          activeItemRect.left + activeItemRect.width / 2 - navbarRect.left;
        const leftPosition = itemCenter - sliderWidth / 2;

        setSliderStyle({
          left: `${leftPosition}px`,
          opacity: 1,
        });
      } else {
        setSliderStyle({
          opacity: 0,
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateSliderPosition, 50);

    // Recalculate on window resize
    window.addEventListener("resize", updateSliderPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, [pathname]);

  return (
    <Card
      className="mb-1 relative overflow-hidden border border-white/20 shadow-2xl backdrop-blur-2xl bg-black/40 rounded-3xl mx-2 sm:mx-6 mt-2"
      ref={navRef}
    >
      {/* Main Navbar container */}
      <div className="relative z-10 flex items-center justify-between px-3 sm:px-6 lg:px-8 -py-4 sm:py-2">
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
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ref={(el) => (navItemRefs.current[item.href] = el)}
                  className={`relative group text-sm font-medium transition-all duration-300 uppercase tracking-wide ${
                    pathname === item.href
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-3">
          <Link href="https://user.vrittigroup.com/auth/user/register">
            <Button className="px-4 lg:px-6 py-2 text-sm font-medium text-black bg-amber-500 hover:bg-amber-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              SIGN UP
            </Button>
          </Link>
          <Link href="https://user.vrittigroup.com/auth/user">
            <Button className="px-4 lg:px-6 py-2 text-sm font-medium text-black bg-amber-500 hover:bg-amber-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              LOGIN
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:backdrop-blur-sm rounded-full border border-white/20"
            >
              <Menu className="h-5 w-5" />
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
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-sm font-medium uppercase tracking-wide py-2 px-2 transition-all relative ${
                        pathname === item.href
                          ? "text-amber-400 bg-amber-400/10 rounded-lg"
                          : "hover:text-amber-400"
                      }`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 rounded-r-full"></div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Auth */}
            <div className="flex flex-col gap-3">
              <Link href="https://user.vrittigroup.com/auth/user/register">
                <Button className="w-full text-xs py-2 bg-amber-500 hover:bg-amber-600 rounded-full uppercase">
                  SIGN UP
                </Button>
              </Link>
              <Link href="https://user.vrittigroup.com/auth/user">
                <Button className="w-full text-xs py-2 bg-amber-600 hover:bg-amber-700 rounded-full uppercase">
                  LOGIN
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Route Slider - Bottom of Card */}
      <div
        className="absolute bottom-0 left-0 h-1 w-20 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-b-3xl transition-all duration-500 ease-out shadow-lg hidden lg:block"
        style={{
          ...sliderStyle,
          boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
        }}
      />
    </Card>
  );
};

export default Navbar;
