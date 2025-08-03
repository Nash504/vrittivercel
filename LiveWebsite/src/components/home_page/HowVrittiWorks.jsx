import React from "react";
import { Users } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import BuilderDude from "../../assets/BuilderDude.png"; // Adjust the path as necessary
export default function HowVrittiWorks() {
  const builderStyle = {
    backgroundImage: `url(${BuilderDude.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // Optional: Keep the original background color as a fallback
    backgroundColor: "#1A202C",
  };
  const steps = [
    {
      step: "01",
      title: "Hands-on Expert-Led Training",
      description:
        "Learn from industry professionals with years of hands-on experience in oil and gas operations.",
    },
    {
      step: "02",
      title: "Access Verified Job Opportunities",
      description:
        "Connect with verified employers and access exclusive job opportunities in the oil and gas sector.",
    },
    {
      step: "03",
      title: "Get Certified by VRITTI",
      description:
        "Earn industry-recognized certifications that validate your skills and enhance your employability.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Vritti Works: <br />
            <span className="text-orange-500">Your Pathway to Success</span>
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6">
            <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm">
              FOR INDIVIDUALS
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm">
              FOR EMPLOYERS
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="bg-orange-100 rounded-2xl p-2">
                <div
                  className="bg-white rounded-xl p-4 h-full flex items-center justify-center min-h-[16rem] sm:min-h-[32rem]"
                  style={builderStyle}
                ></div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm group">
                Start Your Upskilling Journey
                <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((item) => (
              <Card
                key={item.step}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 shadow-2xl"
              >
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center font-bold text-xs sm:text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
