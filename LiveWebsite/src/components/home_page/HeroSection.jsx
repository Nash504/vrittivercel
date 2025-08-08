"use client";
import React from "react";
import { ArrowRight, MoveUpRight } from "lucide-react";
import Navbar from "../Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Hero from "../../assets/Hero.png"; // Desktop image
import HomePhone from "../../assets/home_phone.jpg"; // Mobile image
import useIsMobile from "../../hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  const heroStyle = {
    backgroundImage: `url(${isMobile ? HomePhone.src : Hero.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh]">
        <Card
          className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-gray-200/2 backdrop-blur-lg text-neutral-200 shadow-2xl 
             mx-4 sm:ml-6 md:ml-12 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border-0"
        >
          <CardHeader className="pb-3 px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Unlock Your <br />
              Oil & Gas Career
            </CardTitle>
          </CardHeader>
          <CardContent className="py-2 px-4 sm:px-6">
            <p className="text-sm sm:text-base leading-relaxed">
              Upskill, get certified, and access exclusive opportunities. Vritti
              trains you for success, pre-interviews you for readiness, and
              connects you to the best jobs in the industry.
            </p>
          </CardContent>
          <CardFooter className="flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 px-4 sm:px-6">
            <Button
              asChild
              size="sm"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 rounded-full text-xs sm:text-sm text-black uppercase tracking-wide group px-4 sm:px-6 py-2 sm:py-3"
            >
              <a href="#get-started">
                Get Started
                <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 rounded-full text-xs sm:text-sm uppercase tracking-wide group text-black px-4 sm:px-6 py-2 sm:py-3"
            >
              <a href="#for-employers">
                For Employers
                <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
