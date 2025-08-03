import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/home_page/HeroSection";
import HowVrittiWorks from "../../components/home_page/HowVrittiWorks";
import WhyChooseVritti from "../../components/home_page/WhyChooseVritti";
import SkillsOpportunity from "../../components/home_page/SkillsOpportunity";
import RealPeopleProgress from "../../components/home_page/RealPeopleProgress";
import JobPlatformSection from "../../components/home_page/JobPlatformSection";
import Footer from "../../components/Footer";

export default function VrittiLandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-8">
        <HowVrittiWorks />
      </section>

      <section className="py-8">
        <WhyChooseVritti />
      </section>

      <Footer />
    </div>
  );
}
