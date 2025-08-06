// components/JobPlatformSection.js
import Image from "next/image";
import YellowVrittiLogo from "../../assets/YellowVrittiLogo.png";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

// Data for the team members.
const teamMembers = [
  {
    name: "Ronak Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    name: "Ronak Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    name: "Ronak Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

// A dedicated sub-component for the team member card for cleaner code.
const TeamMemberCard = ({ name, description }) => (
  <Card className="bg-[#28292d] border-none text-white flex flex-col overflow-hidden">
    <CardHeader>
      <Image
        src={YellowVrittiLogo}
        alt={`${name}'s profile`}
        className="w-full h-24 object-cover"
      />
    </CardHeader>
    <CardContent className="bg-black/10 backdrop-blur-lg ">
      <h3 className="text-lg font-bold mb-3">{name}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function JobPlatformSection() {
  const jobStyle = {
    backgroundImage: `url(${YellowVrittiLogo.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };
  return (
    <section style={jobStyle}>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Section Title - Text color is white to be visible on the dark background */}
        <h2 className="text-4xl font-bold text-blue-950 mb-12">
          Meet the Team
        </h2>

        {/* Grid container for the team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>

        {/* Pagination Dots for Carousel */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          <button
            aria-label="Go to slide 1"
            className="w-3 h-3 bg-orange-500 rounded-full"
          ></button>
          <button
            aria-label="Go to slide 2"
            className="w-3 h-3 bg-gray-400 rounded-full"
          ></button>
          <button
            aria-label="Go to slide 3"
            className="w-3 h-3 bg-gray-400 rounded-full"
          ></button>
        </div>
      </div>
    </section>
  );
}
