// components/RealPeopleProgress.jsx

// 1. Add "use client" to enable interactivity and hooks
"use client";

// 2. Import useState for state management
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Real from "../../assets/Real.png"; // Statically imported image
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RealPeopleProgress() {
  const realstyle = {
    backgroundImage: `url(${Real.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };
  const testimonials = [
    {
      type: "For Individuals",
      text: "The training and interview process boosted my confidence. I got real feedback and landed a job that fit my skills.",
      name: "Amir Truman",
      title: "Electrician",
    },
    {
      type: "For Employers",
      text: "Vritti’s candidates are ready to contribute from day one. The pre-interview makes all the difference.",
      name: "Fatima",
      title: "HR Director, EPC Company",
    },
    {
      type: "For Individuals",
      text: "I was skeptical at first, but the tailored approach helped me highlight my unique skills effectively.",
      name: "Priya Sharma",
      title: "Project Manager",
    },
    {
      type: "For Employers",
      text: "Finding qualified talent was a huge challenge. Vritti streamlined our hiring process significantly.",
      name: "David Chen",
      title: "Operations Head",
    },
  ];

  // 3. Add state to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 4. Create functions to handle navigation
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

  return (
    <section>
      {/* Top half with background image and title */}
      <div className="relative min-h-[60vh]" style={realstyle}>
        <div className="relative z-10 min-h-[60vh] flex flex-col justify-end pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Real People. Real Progress.
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom half with testimonials and navigation */}
      <div className="relative z-10 -mt-20 sm:-mt-24 bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 shadow-2xl rounded-t-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Add overflow-hidden to the parent to hide the other cards */}
          <div className="overflow-hidden">
            {/* 5. Add a style to the inner container to make it slide */}
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                // Adjust card width to take up the full container width
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="shadow-md w-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg">
                        {testimonial.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 min-h-[100px]">
                      <p className="text-gray-700 text-sm sm:text-base">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                    <CardFooter className="text-xs sm:text-sm pt-3">
                      - {testimonial.name}, {testimonial.title}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-6 sm:mt-8">
            {/* 6. Add onClick handlers to the buttons */}
            <Button
              onClick={handlePrev}
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 text-gray-500"
            >
              <ChevronLeft size={24} />
            </Button>

            {/* 7. Make the dots dynamic */}
            <div className="flex space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-gray-700" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 text-gray-500"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
