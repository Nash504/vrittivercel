"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
// Assuming these are your image imports
import real_phone from "../../assets/real_phone.jpg";
import real from "../../assets/real.png";

export default function RealPeopleProgress() {
  const isMobile = useIsMobile();

  const realstyle = {
    backgroundImage: `url(${isMobile ? real_phone.src : real.src})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1e3a8a", // Fallback color
  };

  const testimonials = [
    {
      type: "For Individuals",
      text: "The training and interview process boosted my confidence. I got real feedback and landed a job that fit my skills.",
      name: "Amir, Trainee Electrician",
    },
    {
      type: "For Employers",
      text: "Vritti's candidates are ready to contribute from day one. The pre-interview makes all the difference.",
      name: "Fatima, HR Director, EPC Company",
    },
    {
      type: "For Individuals",
      text: "I was skeptical at first, but the tailored approach helped me highlight my unique skills effectively.",
      name: "Priya Sharma, Project Manager",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // For this carousel, it's better to reset the interval when user navigates.
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array includes currentIndex to reset timer on manual navigation

  return (
    // CHANGE 1: The main section now has the white background. This will serve as
    // the "floor" that the bottom half of the cards sit on. Added padding-bottom.
    <section className="relative bg-white pb-16 sm:pb-20 md:pb-24">
      {/* Top half with background image and title */}
      {/* CHANGE 2: Added significant padding-bottom (pb-24, etc.) to this div.
          This pushes the title up and creates an empty space at the bottom of the
          image for the cards to overlap onto without covering the text. */}
      <div
        className="relative min-h-[55vh] md:min-h-[70vh] flex flex-col justify-end pb-24 sm:pb-28 md:pb-32"
        style={realstyle}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 " />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Real People. Real Progress.
          </h2>
        </div>
      </div>

      {/* Testimonials Container */}
      {/* CHANGE 3: This container now ONLY holds the testimonials and controls.
          It has NO background color itself. We apply the negative margin here to pull
          the entire block (cards and controls) upwards, making it overlap the image above. */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24">
        {/* Carousel View */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // This logic for sliding is correct. Note that on desktop, it slides by 1/3rd.
              // To make it slide one card at a time, we'd adjust the logic.
              // This example keeps your original sliding behavior.
              transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2 sm:px-3 ${isMobile ? "w-full" : "w-1/3"}`}
              >
                {/* The card styling is now simpler, as the container doesn't have conflicting styles */}
                <Card className="rounded-xl h-full border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">
                      {testimonial.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="min-h-[100px] sm:min-h-[120px] pb-4">
                    <blockquote className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-between items-center mt-6 sm:mt-8">
          {/* The controls are correctly placed relative to the cards */}
          <div className="flex gap-2 sm:gap-4">
            <Button
              onClick={handlePrev}
              variant="default"
              size="icon"
              className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-900 text-white shadow-lg"
            >
              <ChevronLeft
                className="text-amber-500 "
                xsize={isMobile ? 20 : 32}
              />
            </Button>
            <Button
              onClick={handleNext}
              variant="default"
              size="icon"
              className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-900 text-white shadow-lg"
            >
              <ChevronRight
                className="text-amber-500"
                size={isMobile ? 20 : 32}
              />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex % testimonials.length === index
                    ? "bg-amber-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
