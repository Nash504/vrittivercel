import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/contact_page/HeroSection";
import HowVrittiWorks from "../../components/home_page/HowVrittiWorks";
import WhyChooseVritti from "../../components/home_page/WhyChooseVritti";
import SkillsOpportunity from "../../components/home_page/SkillsOpportunity";
import RealPeopleProgress from "../../components/home_page/RealPeopleProgress";
import JobPlatformSection from "../../components/home_page/JobPlatformSection";
import Footer from "../../components/Footer";
import Email from "../../components/contact_page/Email";
export default function VrittiLandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section>
        <Email />
      </section>

      <Footer />
    </div>
  );
}
