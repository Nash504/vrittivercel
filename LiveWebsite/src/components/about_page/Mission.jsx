import React from "react";
import Image from "next/image";

// Placeholder for the mission graphic. User updated the path.
import missionGraphic from "../../assets/mission.png";

export default function MissionSection() {
  return (
    // Section container with padding and a light background to offset the dark card
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* The main container, with relative positioning */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden h-80 md:h-96">
          {/* The Image component acts as a background, filling the container */}
          <Image
            src={missionGraphic}
            alt="Illustration of a worker with a target"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />

          {/* Gradient overlay is now on the right side for text readability. */}

          {/* Text content, positioned absolutely. Flexbox pushes it to the right. */}
          <div className="relative z-20 flex items-center justify-end h-full p-8 md:p-12">
            <div className="w-full md:w-2/3 text-white text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
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
