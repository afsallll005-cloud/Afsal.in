"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Brands from "@/components/Brands/Brands";
import EveryFrame from "@/components/EveryFrame/EveryFrame";
import HowIWork from "@/components/HowIWork/HowIWork";
import FAQ from "@/components/FAQ/FAQ";
import CTABanner from "@/components/CTABanner/CTABanner";
import Footer from "@/components/Footer/Footer";
import "./Home.css";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="vl-portfolio-root">
      <Navbar />
      <Hero onOpenContact={() => setContactModalOpen(true)} />
      <About />
      <Works />
      <Services />
      {/* <Testimonials /> */}
      <Brands />
      {/* <EveryFrame /> */}
      {/* <HowIWork /> */}
      <FAQ />
      <CTABanner onOpenContact={() => setContactModalOpen(true)} />
      <Footer
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
      />
    </main>
  );
}