// HowVrittiWorks.jsx

// 1. Add "use client" because Tabs are interactive
"use client";

import React from "react";
import { Users } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import BuilderDude from "../../assets/BuilderDude.png";
import Link from "next/link";
// 2. Import the Tabs components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function HowVrittiWorks() {
  const builderStyle = {
    backgroundImage: `url(${BuilderDude.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };

  // Content for the "Individuals" tab
  const individualSteps = [
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

  // 3. Added new placeholder content for the "Employers" tab
  const employerSteps = [
    {
      step: "01",
      title: "Submit Your Requirements",
      description:
        "Tell us the specific skills and qualifications you're looking for in a candidate.",
    },
    {
      step: "02",
      title: "Receive Pre-Interviewed Candidates",
      description:
        "We provide a shortlist of skilled candidates who have already passed our rigorous pre-interview process.",
    },
    {
      step: "03",
      title: "Hire with Confidence",
      description:
        "Select from a pool of job-ready talent, reducing your hiring time and costs significantly.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* 4. Wrap the entire content area in the main Tabs component */}
      <Tabs defaultValue="individuals" className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 text-center md:text-left">
            How Vritti Works: <br />
            Your Pathway to Success
          </h2>
          {/* 5. Replace the buttons with the TabsList and styled TabsTriggers */}
          <TabsList className="grid grid-cols-2 gap-2 sm:gap-4  bg-gray-200 rounded-lg">
            <TabsTrigger
              value="individuals"
              className="px-4 sm:px-6 mb-2 rounded-md text-xs sm:text-sm font-semibold data-[state=active]:bg-amber-500 data-[state=active]:text-white"
            >
              FOR INDIVIDUALS
            </TabsTrigger>
            <TabsTrigger
              value="employers"
              className="px-4 sm:px-6  mb-2 rounded-md text-xs sm:text-sm font-semibold data-[state=active]:bg-amber-500 data-[state=active]:text-white"
            >
              FOR EMPLOYERS
            </TabsTrigger>
          </TabsList>
        </div>
        {/* --- CONTENT FOR "INDIVIDUALS" TAB --- */}
        {/* --- CONTENT FOR "EMPLOYERS" TAB --- */}{" "}
        <TabsContent value="individuals">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="spce-y-6 sm:space-y-8">
              <div className="relative">
                <div className=" rounded-2xl p-2">
                  <div
                    className="bg-white rounded-xl p-4 h-full flex items-center justify-center min-h-[16rem] sm:min-h-[32rem]"
                    style={builderStyle}
                  ></div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="https://org.vrittigroup.com/auth/user/register">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm group">
                    Start Your Upskilling Journey
                    <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {individualSteps.map((item) => (
                <Card
                  key={item.step}
                  className="flex items-start justify-between p-6 sm:p-8 shadow-lg rounded-2xl"
                >
                  <div className="flex-1 pr-6">
                    <h3 className="font-bold text-lg sm:text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="bg-amber-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center font-bold text-lg sm:text-xl">
                    {item.step}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        {/* --- CONTENT FOR "EMPLOYERS" TAB --- */}
        <TabsContent value="employers">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* You can replace this image or keep it */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <div className=" rounded-2xl p-2">
                  <div
                    className="bg-white rounded-xl p-4 h-full flex items-center justify-center min-h-[16rem] sm:min-h-[32rem]"
                    style={builderStyle}
                  ></div>
                </div>
              </div>
              <div className="flex justify-center ">
                <Link href="https://org.vrittigroup.com/auth/user/register">
                  <Button className="bg-amber-500 hover:bg-amber-600 gap-4 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm group">
                    Find Pre-Vetted Talent
                    <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {employerSteps.map((item) => (
                <Card
                  key={item.step}
                  className="flex items-start justify-between p-6 sm:p-8 shadow-lg rounded-2xl"
                >
                  <div className="flex-1 pr-6">
                    <h3 className="font-bold text-lg sm:text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="  bg-amber-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center font-bold text-lg sm:text-xl">
                    {item.step}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
