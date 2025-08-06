import React from "react";
import Navbar from "../Navbar";

// Note: You will need to provide the actual image for the background.
// I am assuming the path is correct based on your original code.
import Contact from "../../assets/Contact.jpeg";

export default function HeroSection() {
  const heroStyle = {
    // This style block assumes 'Contact.jpeg' is the desired background image.
    backgroundImage: `url(${Contact.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000000", // Fallback to black for the dark theme
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
      style={heroStyle}
    >
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-grow items-center justify-start">
        <div className="max-w-4xl px-4 text-left lg:px-20">
          {/* Hero Text from the Image */}
          <p className="text-2xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-orange-500">Have a question, </span>{" "}
            partnership inquiry, or need support?
          </p>
          <p className="mt-4 max-w-2xl text-md text-gray-300">
            Reach out to the Vritti team and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}
