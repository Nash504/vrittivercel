import React from "react";
import {
  MoveUpRight,
  TrendingUp,
  BadgeCheck,
  Briefcase,
  UserCheck,
  Zap,
  Goal,
} from "lucide-react";

// Import the background image asset
import Choose from "../../assets/Choose.png";

// A reusable component for the feature items
const FeatureItem = ({ IconComponent, title, description }) => (
  <div className="text-center">
    <div className="rounded-lg w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center mx-auto p-3">
      <IconComponent className="w-8 h-8 text-orange-500" />
    </div>
    <h3 className="font-bold mb-2 text-sm sm:text-base">{title}</h3>
    <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
  </div>
);

export default function WhyChooseVritti() {
  const chooseStyle = {
    backgroundImage: `url(${Choose.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      style={chooseStyle}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Vritti?
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-8 lg:gap-y-12 mb-8 sm:mb-12">
          {/* Item 1: Upskilling that Pays Off */}
          <FeatureItem
            IconComponent={TrendingUp}
            title="Upskilling that Pays Off"
            description="Courses designed by oil & gas experts, focused on skills employers need now."
          />

          {/* Item 2: Verified Certification & Pre-Interview */}
          <FeatureItem
            IconComponent={BadgeCheck}
            title="Verified Certification & Pre-Interview"
            description="Every candidate is certified and personally interviewed by Vritti for readiness and professionalism."
          />

          {/* Item 3: Access to Real Jobs */}
          <FeatureItem
            IconComponent={Briefcase}
            title="Access to Real Jobs"
            description="Placement is the natural outcome of your learning—no generic postings, just real opportunities."
          />

          {/* Item 4: Employer-Trusted Talent */}
          <FeatureItem
            IconComponent={UserCheck}
            title="Employer-Trusted Talent"
            description="Organizations know every Vritti candidate is motivated, prepared, and ready to contribute on day one."
          />

          {/* Item 5: Transparent, Fast, and Reliable */}
          <FeatureItem
            IconComponent={Zap}
            title="Transparent, Fast, and Reliable"
            description="Clear pathways for learners and seamless hiring for employers."
          />

          {/* Item 6: Long-Term Growth */}
          <FeatureItem
            IconComponent={Goal}
            title="Long-Term Growth"
            description="Keep upskilling and advancing—Vritti supports your career for the long haul."
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold inline-flex items-center text-sm sm:text-base group">
            Upskill Now
            <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
