// components/RealPeopleProgress.jsx

"use client";

import React, { useState, useEffect } from "react";
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
import Real from "../../assets/Real.png";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
      rating: 5,
      color: "from-orange-500 to-red-500",
    },
    {
      type: "For Employers",
      text: "Vritti's candidates are ready to contribute from day one. The pre-interview makes all the difference.",
      name: "Fatima",
      title: "HR Director, EPC Company",
      rating: 5,
      color: "from-amber-500 to-orange-500",
    },
    {
      type: "For Individuals",
      text: "I was skeptical at first, but the tailored approach helped me highlight my unique skills effectively.",
      name: "Priya Sharma",
      title: "Project Manager",
      rating: 5,
      color: "from-orange-600 to-red-600",
    },
    {
      type: "For Employers",
      text: "Finding qualified talent was a huge challenge. Vritti streamlined our hiring process significantly.",
      name: "David Chen",
      title: "Operations Head",
      rating: 5,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="relative">
      {/* Enhanced top half with gradient overlay */}
      <div className="relative min-h-[70vh]" style={realstyle}>
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]" />

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden z-[2]">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-0" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced title with better typography */}
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Real People.
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block mt-2">
                Real Progress.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Discover how Vritti transforms careers and businesses through
              authentic success stories
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced bottom half with improved testimonials */}
      <div className="relative z-20 -mt-32 sm:-mt-40 bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 shadow-2xl rounded-t-[3rem]">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </div>

          {/* Enhanced carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-6 transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full group">
                    <CardHeader className="pb-4 relative">
                      {/* Type badge with gradient */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${testimonial.color} shadow-lg`}
                      >
                        {testimonial.type}
                      </div>

                      {/* Quote icon */}
                      <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200 group-hover:text-gray-300 transition-colors" />
                    </CardHeader>

                    <CardContent className="py-6 min-h-[140px]">
                      {/* Star rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          ({testimonial.rating}/5)
                        </span>
                      </div>

                      {/* Testimonial text with better typography */}
                      <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium italic">
                        "{testimonial.text}"
                      </blockquote>
                    </CardContent>

                    <CardFooter className="pt-4 pb-6">
                      <div className="flex items-center space-x-3">
                        {/* Avatar placeholder with gradient */}
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {testimonial.name.charAt(0)}
                        </div>

                        {/* Name and title */}
                        <div>
                          <p className="font-semibold text-gray-900 text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation */}
          <div className="flex justify-center items-center mt-10 sm:mt-12">
            {/* Previous button with enhanced styling */}
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-orange-500 transition-colors" />
            </Button>

            {/* Enhanced dot indicators */}
            <div className="flex space-x-3 mx-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`relative transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                >
                  {currentIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Next button with enhanced styling */}
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-orange-500 transition-colors" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-2"
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
              />
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
