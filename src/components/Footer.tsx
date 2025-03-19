
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog", "Contact"]
    },
    {
      title: "Features",
      links: ["AI Diagnosis", "Medical Networking", "Learning Hub", "Research Tools", "Telemedicine"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Guides", "API", "Case Studies", "Support"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Data Security", "Accessibility"]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" }
  ];

  return (
    <footer className="bg-bloomin-navy-light pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold gradient-text">Bloomin</a>
            </div>
            <p className="text-bloomin-gray mb-6 max-w-md">
              Revolutionizing healthcare through AI-powered networking, diagnosis, and collaboration tools for medical professionals worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-bloomin-gray hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-bloomin-gray hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="sm:col-span-2">
              <h4 className="text-xl font-bold mb-2 gradient-text">Join Our Newsletter</h4>
              <p className="text-bloomin-gray mb-4 sm:mb-0">
                Stay updated with the latest in AI healthcare and exclusive insights.
              </p>
            </div>
            <div>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-l-full bg-white/10 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="gradient-bg rounded-r-full">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-bloomin-gray text-sm mb-4 sm:mb-0">
              © {currentYear} Bloomin. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
