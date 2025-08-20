import React from "react";
import {
  User,
  GraduationCap,
  Award,
  BadgeCheck,
  Handshake,
} from "lucide-react";

export default function SkillsOpportunity() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-950">
          Bridging Skills & Opportunity—For Everyone
        </h2>
        <p className="text-black mb-12 sm:mb-16 max-w-3xl mx-auto text-sm font-medium sm:text-base">
          Vritti isn't just about finding jobs—we empower individuals to build
          valuable skills and confidence, and present only the most job-ready
          candidates to employers. For organizations, Vritti means a trusted,
          always-ready talent pipeline.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-x-4 lg:gap-y-10">
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">Individual</h3>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">Training</h3>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">
              Certification
            </h3>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">
              Verified Profile
            </h3>
          </div>

          <div className="text-center col-span-2 sm:col-span-1">
            <div className="bg-gray-100 rounded-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">
              Matched with Employer
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
