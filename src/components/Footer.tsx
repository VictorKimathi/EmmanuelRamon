import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Emmanuel Ramon Stembridge
            </h3>
            <p className="text-gray-300 mb-4">
              Freelance Finance Writer & Financial Literacy Educator
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="text-white hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPinIcon size={16} className="mr-2" />
                <span className="text-gray-300">Morrow, GA 30260</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={16} className="mr-2" />
                <a href="tel:2069291478" className="text-gray-300 hover:text-white transition-colors">
                  206-929-1478
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon size={16} className="mr-2" />
                <a href="mailto:emmanuelstembridge36@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  emmanuelstembridge36@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Emmanuel Ramon Stembridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;