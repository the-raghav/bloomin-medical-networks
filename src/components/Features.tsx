
import React from 'react';
import { Cpu, Braces, Brain, Dna, Stethoscope, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-bloomin-cyan" />,
      title: "AI Symptom Checker",
      description: "Advanced algorithms analyze symptoms to provide preliminary diagnoses and specialist recommendations."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-bloomin-cyan" />,
      title: "AI-Powered Medical Imaging",
      description: "Instantly analyze X-rays, MRIs, and CT scans to identify potential conditions with high accuracy."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-bloomin-cyan" />,
      title: "Predictive Health Risk Scoring",
      description: "Advanced risk prediction based on medical history, genetic factors, and lifestyle indicators."
    },
    {
      icon: <Dna className="h-8 w-8 text-bloomin-cyan" />,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient data and latest research."
    },
    {
      icon: <Braces className="h-8 w-8 text-bloomin-cyan" />,
      title: "Research Collaboration Tools",
      description: "Connect with researchers worldwide to collaborate on cutting-edge medical studies."
    },
    {
      icon: <Cpu className="h-8 w-8 text-bloomin-cyan" />,
      title: "Federated Learning Sandbox",
      description: "Train AI models on decentralized data while maintaining patient privacy and regulatory compliance."
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-bloomin-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Powered Healthcare Features</span>
          </h2>
          <p className="text-bloomin-gray max-w-2xl mx-auto">
            Our cutting-edge AI technology revolutionizes healthcare by providing accurate diagnoses, personalized treatment plans, and collaborative research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card relative overflow-hidden">
              <div className="card-shine"></div>
              <div className="p-6">
                <div className="mb-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
                <p className="text-bloomin-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
              Try Our AI Symptom Checker Demo
            </h3>
            <p className="text-bloomin-gray mb-6">
              Experience the power of our AI-driven diagnostic tool. Enter your symptoms and receive instant analysis.
            </p>
            <Button className="bg-gradient-to-r from-bloomin-blue to-bloomin-indigo text-white font-medium rounded-full px-6 py-2 hover:from-bloomin-indigo hover:to-bloomin-blue transition-all duration-300 animate-pulse-glow">
              Try AI Diagnosis Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
