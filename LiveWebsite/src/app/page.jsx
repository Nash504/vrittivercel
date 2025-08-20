"use client";
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/home_page/HeroSection";
import HowVrittiWorks from "../components/home_page/HowVrittiWorks";
import WhyChooseVritti from "../components/home_page/WhyChooseVritti";
import SkillsOpportunity from "../components/home_page/SkillsOpportunity";
import RealPeopleProgress from "../components/home_page/RealPeopleProgress";
import JobPlatformSection from "../components/home_page/JobPlatformSection";
import Footer from "../components/Footer";

export default function VrittiLandingPage() {
  return (
    <div className="min-h-screen">
      <div>
        <HeroSection />
      </div>

      <section className="py-8">
        <HowVrittiWorks />
      </section>

      <section className="py-8">
        <WhyChooseVritti />
      </section>

      <section className="py-8">
        <SkillsOpportunity />
      </section>

      <section>
        <RealPeopleProgress />
      </section>

      <section>
        <JobPlatformSection />
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
