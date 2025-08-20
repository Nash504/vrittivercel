"use client";
import React from "react";
import Image from "next/image";

// Import the mission graphic
import missionGraphic from "../../assets/mission.png";

export default function MissionSection() {
  return (
    // Section container with padding
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto sm:-mt-32">
        {/* The main container with relative positioning for the overlay and text */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-4xl shadow-2xl h-80 md:h-96">
          {/* The Image component acts as a background, filling the container.
            It's given a z-index of 0 to sit at the very back.
          */}
          <Image
            src={missionGraphic}
            alt="Illustration of a worker with a target"
            layout="fill"
            objectFit="cover"
            className="z-0"
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />

          {/* Gradient overlay for text readability.
            It starts semi-transparent on the right and fades to transparent on the left.
            It sits on top of the image (z-10) but below the text (z-20).
          */}
          <div className="absolute inset-0  z-10" />

          {/* Text content container.
            Flexbox is used to center the content vertically and push it to the right.
          */}
          <div className="relative z-20 flex h-full items-center justify-end p-8 md:p-12">
            <div className="w-full md:w-2/3 lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                Our Mission
              </h2>
              <p className="text-lg font-medium text-gray-200 leading-relaxed">
                To bridge the gap between talent and opportunity by building a
                pipeline of skilled, industry-ready professionals—and connecting
                them with organizations that value quality, safety, and
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
