import React from "react";
import "../assets/css/Footer.css"
;import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiChevronRight,
  FiHeart
} from "react-icons/fi";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";

const Footer = () => {
   

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    
    { name: "Custom Cakes", path: "/#" },
    { name: "Occasions", path: "/#" },
   
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/#" },
    { name: "Terms & Conditions", path: "/#" },
    { name: "FAQ", path: "/#" },
 
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: "Facebook", url: "#" },
    { icon: <FiInstagram />, name: "Instagram", url: "#" },
    { icon: <FiTwitter />, name: "Twitter", url: "#" },
    { icon: <BsWhatsapp />, name: "WhatsApp", url: "#" },
    { icon: <BsTelegram />, name: "Telegram", url: "#" },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "123 Sweet Street Baner Pune, 410001" },
    { icon: <FiPhone />, text: "+91 7447234298" },
    { icon: <FiMail />, text: "ashish@gmail.com" },
    { icon: <FiClock />, text: "Mon-Sun: 8AM - 10PM" },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-r from-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                T<span className="text-pink-500">CAKE</span>
              </h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              We bake happiness into every creation. From custom wedding cakes 
              to daily treats, our passion is making your celebrations sweeter 
              with quality ingredients and artistic designs.
            </p>
            
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 group-hover:translate-x-1 group-hover:font-medium"
                  >
                    <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 group-hover:translate-x-1 group-hover:font-medium"
                  >
                    <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-linear-to-r hover:from-pink-600 hover:to-rose-600 hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2025 TCAKE Bakery. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <span>Made with</span>
              <FiHeart className="text-pink-500 animate-pulse" />
              <span>for sweet celebrations</span>
            </div>
             
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-linear-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;