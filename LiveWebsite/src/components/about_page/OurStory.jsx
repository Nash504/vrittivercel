import React from "react";

// Import the Card and CardContent components from your UI library
import { Card, CardContent } from "../ui/card";

// Component for the numbered challenge cards
const ChallengeCard = ({ number, text }) => (
  <Card className="flex-1">
    <CardContent className="flex items-center gap-6 p-8">
      <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
        {number}
      </div>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </CardContent>
  </Card>
);

export default function OurStorySection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Founded by energy sector veterans and passionate educators, Vritti
            was created to solve two critical challenges:
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <ChallengeCard
            number="01"
            text="Job seekers needed more than just a job board—they needed skills, support, and real, verified opportunities."
          />
          <ChallengeCard
            number="02"
            text="Companies needed a faster, more reliable way to hire truly work-ready people—without the usual hiring risks."
          />
        </div>

        {/* Solution Card */}
        <Card className="bg-orange-500 text-white shadow-lg">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8">
            <h3 className="text-4xl font-bold flex-shrink-0">Our solution?</h3>
            <p className="text-lg leading-relaxed">
              Upskilling, certification, and a rigorous pre-interview process.
              We help every candidate—and every company—move forward with
              confidence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
