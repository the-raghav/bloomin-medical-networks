
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Cpu, 
  Users, 
  Microscope, 
  Phone, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home className="nav-icon" /> },
    { name: 'Features', icon: <Cpu className="nav-icon" /> },
    { name: 'Community', icon: <Users className="nav-icon" /> },
    { name: 'Research', icon: <Microscope className="nav-icon" /> },
    { name: 'Contact', icon: <Phone className="nav-icon" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg py-3 scrolled shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="font-bold mr-2">
                <span className="text-2xl font-extrabold text-white">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Bloomin</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.name.toLowerCase()}`}
                className="text-white hover:text-purple-300 flex items-center transition-colors duration-300"
              >
                {item.icon}
                <span className={`ml-1 nav-text ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                  {item.name}
                </span>
              </a>
            ))}
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="border-purple-400 text-white hover:bg-purple-400/20 transition-all duration-300"
              >
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium rounded-full px-6 hover:opacity-90 transition-all duration-300">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-purple-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-gradient-to-b from-purple-900/80 to-blue-900/80 m-2 mt-3 p-4 rounded-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase()}`}
                className="text-white hover:text-purple-300 flex items-center transition-colors duration-300 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2">
              <Button 
                variant="outline" 
                className="border-purple-400 text-white hover:bg-purple-400/20 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium rounded-full px-6 hover:opacity-90 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
