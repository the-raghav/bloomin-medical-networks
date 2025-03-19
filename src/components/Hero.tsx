
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Stethoscope, GraduationCap, HeartPulse, Microscope } from "lucide-react";
import Globe from './Globe';

const Hero = () => {
  const [text, setText] = useState("The Future of Healthcare Starts Here");
  const phrases = [
    "The Future of Healthcare Starts Here",
    "Learn. Connect. Diagnose. Innovate.",
    "AI-Powered Medical Networking",
    "Join the Medical Revolution Today"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextIndex = (phraseIndex + 1) % phrases.length;
      
      if (isTyping) {
        setIsTyping(false);
        setTimeout(() => {
          setPhraseIndex(nextIndex);
          setText(phrases[nextIndex]);
          setIsTyping(true);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(typingInterval);
  }, [phraseIndex, isTyping, phrases]);

  const roles = [
    { 
      name: "Doctors", 
      icon: <Stethoscope className="h-8 w-8 mb-2 text-bloomin-cyan" />,
      description: "AI-assisted diagnosis & global case discussions" 
    },
    { 
      name: "Students", 
      icon: <GraduationCap className="h-8 w-8 mb-2 text-bloomin-cyan" />,
      description: "AI learning hub with mentorship & case studies" 
    },
    { 
      name: "Patients", 
      icon: <HeartPulse className="h-8 w-8 mb-2 text-bloomin-cyan" />,
      description: "AI symptom checker & instant doctor matching" 
    },
    { 
      name: "Researchers", 
      icon: <Microscope className="h-8 w-8 mb-2 text-bloomin-cyan" />,
      description: "Access datasets & AI model sandbox" 
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={`gradient-text ${isTyping ? 'type-cursor' : ''}`}>
                {text}
              </span>
            </h1>
            <p className="text-xl text-bloomin-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with medical professionals, leverage AI for diagnoses, and transform healthcare through our revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-bloomin-blue to-bloomin-indigo text-white font-medium rounded-full px-8 py-6 hover:from-bloomin-indigo hover:to-bloomin-blue transition-all duration-300 animate-pulse-glow text-lg">
                Join the Medical Revolution
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-white/30 hover:bg-white/10 text-lg">
                Explore Features
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
            <Globe />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="role-card flex flex-col items-center text-center p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-2 animate-float">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">{role.name}</h3>
              <p className="text-bloomin-gray">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
