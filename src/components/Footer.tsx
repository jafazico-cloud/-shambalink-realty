import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-savannah-green rounded-lg flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-ubuntu font-bold">ShambaLink</h3>
                <p className="text-sm text-warm-sand">Realty</p>
              </div>
            </Link>
            <p className="text-warm-sand mb-4">
              Connecting Kenya to the world through land and property investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-sand hover:text-sky-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-warm-sand hover:text-sky-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-warm-sand hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-warm-sand hover:text-white transition-colors">Browse Listings</Link></li>
              <li><Link to="/sell-land" className="text-warm-sand hover:text-white transition-colors">Sell Your Land</Link></li>
              <li><Link to="/diaspora-agents" className="text-warm-sand hover:text-white transition-colors">Diaspora Agents</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-warm-sand">
              <li>Land Sales</li>
              <li>Property Investment</li>
              <li>Title Verification</li>
              <li>Legal Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-warm-sand">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@shambalink.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-sand/20 mt-8 pt-8 text-center text-warm-sand">
          <p>&copy; 2025 ShambaLink Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;