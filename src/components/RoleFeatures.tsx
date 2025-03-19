
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Stethoscope, GraduationCap, HeartPulse, Microscope, CheckCircle } from "lucide-react";

const RoleFeatures = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const roleContent = {
    doctors: {
      title: "For Doctors",
      subtitle: "AI-Assisted Medicine",
      description: "Access powerful AI tools for diagnosis, connect with specialists worldwide, and stay at the forefront of medical innovation.",
      features: [
        "AI-Assisted Diagnosis with instant data-backed insights",
        "HIPAA-compliant telemedicine portal for virtual consultations",
        "Global case discussion boards for collaboration",
        "Access to cutting-edge medical research and trials"
      ],
      icon: <Stethoscope className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Join the Doctor Network"
    },
    students: {
      title: "For Medical Students",
      subtitle: "AI-Powered Learning Hub",
      description: "Accelerate your learning with AI, connect with mentors, and access real-world case studies to prepare for your medical career.",
      features: [
        "AI-powered learning with adaptive recommendations",
        "Internship & research placement opportunities",
        "Virtual case studies with simulated patient scenarios",
        "Mentorship connections with leading specialists"
      ],
      icon: <GraduationCap className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Start Learning with AI"
    },
    patients: {
      title: "For Patients",
      subtitle: "Personalized Health Management",
      description: "Get AI-powered health insights, connect with specialists, and take control of your healthcare journey with confidence.",
      features: [
        "AI symptom checker for preliminary diagnoses",
        "Instant specialist matching based on your condition",
        "Personalized health tracking and alerts",
        "Secure health record management and sharing"
      ],
      icon: <HeartPulse className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Check Your Health Now"
    },
    researchers: {
      title: "For Researchers",
      subtitle: "Innovation & Collaboration Hub",
      description: "Access secure datasets, collaborate on groundbreaking studies, and leverage AI to accelerate medical discoveries.",
      features: [
        "Access to anonymized medical datasets",
        "Federated learning sandbox for AI model training",
        "Research collaboration tools for global teamwork",
        "Publication and grant opportunity notifications"
      ],
      icon: <Microscope className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Access Research Hub"
    }
  };

  return (
    <section id="community" className="py-20 relative bg-bloomin-navy">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Bloomin for Everyone</span>
          </h2>
          <p className="text-bloomin-gray max-w-2xl mx-auto">
            Our platform serves multiple roles in the healthcare ecosystem, providing tailored features for each user's specific needs.
          </p>
        </div>

        <Tabs defaultValue="doctors" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {Object.entries(roleContent).map(([key, content]) => (
              <TabsTrigger 
                key={key} 
                value={key} 
                className={`data-[state=active]:gradient-bg data-[state=active]:text-white flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${activeTab === key ? 'text-white' : 'text-bloomin-gray'}`}
              >
                {activeTab === key && content.icon}
                {content.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(roleContent).map(([key, content]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="glass-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 animate-float inline-block">
                      {content.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text">
                      {content.title}
                    </h3>
                    <h4 className="text-lg sm:text-xl mb-4 text-white/80">
                      {content.subtitle}
                    </h4>
                    <p className="text-bloomin-gray mb-6">
                      {content.description}
                    </p>
                    <Button className="bg-gradient-to-r from-bloomin-blue to-bloomin-indigo text-white font-medium rounded-full px-6 py-2 hover:from-bloomin-indigo hover:to-bloomin-blue transition-all duration-300">
                      {content.cta}
                    </Button>
                  </div>
                  <div className="md:w-1/2 bg-gradient-to-br from-bloomin-navy-light to-black p-6 sm:p-8 md:p-10">
                    <h5 className="text-xl font-semibold mb-4 text-white">Key Features</h5>
                    <ul className="space-y-3">
                      {content.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-bloomin-cyan shrink-0 mt-0.5 mr-2" />
                          <span className="text-bloomin-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoleFeatures;
