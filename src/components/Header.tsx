import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MapPin, Users, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/listings', label: 'Listings', icon: <MapPin size={20} /> },
    { path: '/sell-land', label: 'Sell Land', icon: null },
    { path: '/diaspora-agents', label: 'Diaspora Agents', icon: <Users size={20} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={20} /> }
  ];

  return (
    <header className="bg-earth-brown text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-savannah-green rounded-lg flex items-center justify-center">
              <Home className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-ubuntu font-bold">ShambaLink</h1>
              <p className="text-xs text-warm-sand">Realty</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-savannah-green text-white'
                    : 'text-warm-sand hover:text-white hover:bg-earth-brown/50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 py-3 px-4 rounded-lg mb-2 transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-savannah-green text-white'
                    : 'text-warm-sand hover:text-white hover:bg-earth-brown/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;