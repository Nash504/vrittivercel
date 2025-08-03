// components/RealPeopleProgress.jsx
import React from "react";
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
    // Optional: Keep the original background color as a fallback
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
      text: "The training and interview process boosted my confidence. I got real feedback and landed a job that fit my skills.",
      name: "Amir Truman",
      title: "Electrician",
    },
    // Add more testimonials here if needed
  ];

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
          <div className="flex overflow-x-auto snap-x snap-mandatory hides-scrollbar justify-start sm:justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-72 sm:w-80 flex-shrink-0 shadow-md"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">
                    {testimonial.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-gray-700 text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                </CardContent>
                <CardFooter className="text-xs sm:text-sm pt-3">
                  {testimonial.name}, {testimonial.title}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-6 sm:mt-8">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 text-gray-500"
            >
              <ChevronLeft size={24} />
            </Button>
            <div className="flex space-x-2 mx-4">
              <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
            <Button
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
