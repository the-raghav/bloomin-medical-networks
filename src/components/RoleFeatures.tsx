
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  GraduationCap, 
  HeartPulse, 
  Microscope, 
  CheckCircle,
  Building,
  Users
} from "lucide-react";

const RoleFeatures = () => {
  const [activeTab, setActiveTab] = useState("students");

  const roleContent = {
    students: {
      title: "For Medical Students",
      subtitle: "Study, Network & Grow",
      description: "Connect with peers, access expert insights, and leverage AI-powered study tools to accelerate your medical education journey.",
      features: [
        "Find study partners & groups based on specialization",
        "Ask questions & get expert insights from doctors",
        "Access structured learning roadmaps & exam prep",
        "Explore career & specialization paths",
        "Network & socialize through virtual meetups & forums"
      ],
      icon: <GraduationCap className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Start Learning with AI"
    },
    doctors: {
      title: "For Doctors",
      subtitle: "Network, Collaborate & Discuss",
      description: "Connect with verified doctors globally, discuss complex cases, and establish your professional presence in the medical community.",
      features: [
        "Global networking with verified doctors worldwide",
        "Medical case discussions & cross-specialty consultations",
        "Professional visibility through articles & case studies",
        "Research & collaboration opportunities",
        "AI assistance with cross-checking diagnoses & analytics"
      ],
      icon: <Stethoscope className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Join the Doctor Network"
    },
    patients: {
      title: "For Patients",
      subtitle: "AI Health Insights Verified by Doctors",
      description: "Get AI-powered health insights verified by real doctors, connect with specialists, and take control of your healthcare journey.",
      features: [
        "Doctor-verified AI symptom checker for preliminary diagnoses",
        "Find the right doctor based on your symptoms & conditions",
        "Personalized health tracking, diet & medication reminders",
        "Connect with patients facing similar health conditions",
        "Access expert-led health discussions & Q&A sessions"
      ],
      icon: <HeartPulse className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Check Your Health Now"
    },
    institutions: {
      title: "For Medical Institutions",
      subtitle: "Manage & Expand Influence",
      description: "Create and oversee student communities, showcase achievements, and collaborate on cutting-edge medical research globally.",
      features: [
        "Create & manage student discussion groups",
        "Build strong PR through institutional achievements",
        "Lead research & medical innovation initiatives",
        "Collaborate with global doctors & medical organizations",
        "Access verified clinical research partners worldwide"
      ],
      icon: <Building className="h-12 w-12 text-bloomin-cyan" />,
      cta: "Expand Your Institutional Reach"
    },
    researchers: {
      title: "For Medical Researchers",
      subtitle: "Find Partners & Collaborate",
      description: "Connect with doctors and institutions, find research partners, and collaborate on breakthrough medical studies and trials.",
      features: [
        "Join a collaborative research community of experts",
        "Explore emerging trends in medical research",
        "Partner with top institutions & industry experts",
        "Share & discuss research findings with peers",
        "Find funding & support for medical studies & trials"
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

        <Tabs defaultValue="students" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent mb-8">
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
