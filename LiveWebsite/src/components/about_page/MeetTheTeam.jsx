"use client";

import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";
import useIsMobile from "../../hooks/useIsMobile";
// Carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import YellowVritti from "../../assets/YellowVrittiLogo.png";
// Example placeholder image (replace with your assets)
const memberImage =
  "https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg";

// Team members data
const teamMembers = [
  {
    name: "Ronak Dev",
    imageSrc: memberImage,
    description:
      "Lorem ipsum elit, sed do eiusmodagna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    name: "Jessica Miller",
    imageSrc: memberImage,
    description:
      "Lorem ipsum do tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    name: "Samuel Chen",
    imageSrc: memberImage,
    description:
      "Lorem ipsum do tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
];

// Glass card design
const TeamMemberCard = ({ name, description, imageSrc }) => (
  <Card className="relative border-none rounded-2xl overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-[1.02]">
    {/* Image */}
    <div className=" w-full h-92">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Overlay */}
    <div
      className="absolute bottom-0 left-0 right-0 p-6 
      bg-gradient-to-t from-black/70 via-black/40 to-transparent 
      backdrop-blur-md"
    >
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  </Card>
);

export default function MeetTheTeamSection() {
  const isMobile = useIsMobile();
  const BgStyle = {
    backgroundImage: `url(${isMobile ? YellowVritti.src : YellowVritti.src})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // Fallback color
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
            Meet the Team
          </h2>
          <div className="hidden sm:block"></div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <TeamMemberCard
                    name={member.name}
                    description={member.description}
                    imageSrc={member.imageSrc}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px]" />
          <CarouselNext className="absolute right-[-20px]" />
        </Carousel>
      </div>
    </section>
  );
}
