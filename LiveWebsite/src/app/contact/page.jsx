// page.jsx

import React from "react";
import HeroSection from "../../components/contact_page/HeroSection";
import Email from "../../components/contact_page/Email";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    // Set a white background for the page, which will be visible below the form
    <div className="bg-white">
      <HeroSection />
      <Email />
      <Footer />
    </div>
  );
}
