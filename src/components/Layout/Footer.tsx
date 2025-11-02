import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="col-span-1">
            <div className="mb-4 font-bold text-2xl">
              Just<span className="text-accent-600">Tranzact</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Providing comprehensive safety and energy solutions for businesses across industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Divisions */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/safety-solutions" className="text-neutral-300 hover:text-white transition-colors">
                  Just Tranzact Ltd.
                </Link>
              </li>
              <li>
                <Link to="/energy-solutions" className="text-neutral-300 hover:text-white transition-colors">
                  Just Tranzact Energy Ltd.
                </Link>
              </li>
              <li>
                <Link to="/safety-shop" className="text-neutral-300 hover:text-white transition-colors">
                  Portwest Safety Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@justtranzactlimited.com" className="text-neutral-300 hover:text-white transition-colors">
                  Info@justtranzactlimited.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+12345678900" className="text-neutral-300 hover:text-white transition-colors">
                  +234 817 662 0323
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-neutral-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Just Tranzact. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;