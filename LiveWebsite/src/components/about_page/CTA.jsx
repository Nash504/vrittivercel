import React from "react";

// Note: You will need to provide the actual image for the background.
// I am assuming CTA.png is the background image shown in your screenshot.
import CTA from "../../assets/CTA.png";

export default function HeroSection() {
  const CTAStyle = {
    // This style block assumes 'CTA.png' is the desired background image.
    backgroundImage: `url(${CTA.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // Fallback to black for the dark theme
  };

  return (
    <section
      className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden text-white md:h-[70vh] md:justify-end"
      style={CTAStyle}
    >
      {/* Content Aligner */}
      <div className="z-10 w-full max-w-xl text-center md:mr-[5vw] md:text-left lg:-mr-[10vw]">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
          Ready to upskill,
          <span>
            <br />
          </span>{" "}
          get certified, or hire
          <span>
            <br />
          </span>{" "}
          truly job-ready talent?
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-sm sm:text-lg font-medium text-gray-300">
          Start your journey with Vritti today.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"></div>
      </div>
    </section>
  );
}
