
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RoleFeatures from '@/components/RoleFeatures';
import Testimonials from '@/components/Testimonials';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Page title
    document.title = "Bloomin - AI-Powered Medical Networking Platform";
  }, []);

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <RoleFeatures />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
