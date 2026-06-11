"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MapPin, Phone, Instagram, Sparkles, Menu, X } from "lucide-react";
import Image from "next/image";

import HeroSection from "../components/HeroSection.js";
import AboutSection from "../components/AboutSection.js";
import ProjectsSection from "../components/ProjectsSection.js";
import LocationSection from "../components/LocationSection.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
