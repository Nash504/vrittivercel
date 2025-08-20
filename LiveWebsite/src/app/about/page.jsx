import React from "react";

// Page-specific components
import CTA from "../../components/about_page/CTA";
import HeroSection from "../../components/about_page/HeroSection";
import Meet from "../../components/about_page/MeetTheTeam";
import Mission from "../../components/about_page/Mission";
import OurStory from "../../components/about_page/OurStory";
import Partners from "../../components/about_page/Partners";
import Footer from "../../components/Footer";
import WhyVritti from "../../components/about_page/WhyVritti";
export default function VrittiLandingPage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      {/* <Mission /> */}

      <OurStory />
      <WhyVritti />
      <Meet />
      <Partners />
      {/* <CTA /> */}

      <Footer />
    </div>
  );
}
