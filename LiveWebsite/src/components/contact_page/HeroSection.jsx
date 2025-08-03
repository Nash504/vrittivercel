import React from "react";
import { ArrowRight, MoveUpRight } from "lucide-react";
import Navbar from "../Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"; // Assuming standard shadcn/ui path
import { Button } from "../ui/button"; // Optional: for consistency
import Hero from "../../assets/Hero.png"; // Adjust the path as necessary
export default function HeroSection() {
  const heroStyle = {
    backgroundImage: `url(${Hero.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // Optional: Keep the original background color as a fallback
    backgroundColor: "#1A202C",
  };
  return (
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
    </section>
  );
}
