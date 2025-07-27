import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Globe, Shield, Clock, Target, Award } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { properties } from '../data/properties';

const Home = () => {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Buy Land. Sell Land. <br />
              <span className="text-savannah-green">Connect Kenya to the World.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-warm-sand">
              Your trusted partner in Kenyan real estate, connecting local landowners with global investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/listings" className="btn-primary text-lg px-8 py-4">
                Browse Properties
              </Link>
              <Link to="/sell-land" className="btn-secondary text-lg px-8 py-4">
                Sell Your Land
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-warm-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-charcoal-gray">
              Find Your Perfect Property
            </h2>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal-gray">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/listings" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Properties</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-warm-sand">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal-gray">
            Why Choose ShambaLink?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-savannah-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Listings</h3>
              <p className="text-gray-600">Get your property listed and visible to buyers within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Title Verification</h3>
              <p className="text-gray-600">All properties are verified for legitimate ownership and clear titles.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Kenyan real estate markets and regulations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-savannah-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Connect with diaspora investors and international buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Sellers & Diaspora Agents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Sellers */}
            <div className="bg-warm-sand p-8 rounded-lg">
              <div className="w-16 h-16 bg-earth-brown rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal-gray">For Land Sellers</h3>
              <p className="text-gray-700 mb-6">
                Ready to sell your land? Join thousands of satisfied sellers who have successfully 
                sold their properties through our platform. We provide comprehensive support from 
                listing to closing.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-savannah-green" size={20} />
                  <span>Free property valuation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-savannah-green" size={20} />
                  <span>Professional photography</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-savannah-green" size={20} />
                  <span>Legal documentation support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-savannah-green" size={20} />
                  <span>Targeted marketing to buyers</span>
                </li>
              </ul>
              <Link to="/sell-land" className="btn-secondary">
                List Your Property
              </Link>
            </div>

            {/* For Diaspora Agents */}
            <div className="bg-sky-blue/10 p-8 rounded-lg">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal-gray">For Diaspora Investors</h3>
              <p className="text-gray-700 mb-6">
                Living abroad but want to invest in Kenyan real estate? Our diaspora program 
                connects you with verified properties and trusted local partners.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-blue" size={20} />
                  <span>Remote property viewing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-blue" size={20} />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-blue" size={20} />
                  <span>Local representative support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-blue" size={20} />
                  <span>Investment guidance</span>
                </li>
              </ul>
              <Link to="/diaspora-agents" className="bg-sky-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
                Join Our Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-warm-sand">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal-gray">
            What Our Clients Say
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-warm-sand">
            Whether you're buying, selling, or investing, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings" className="bg-savannah-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
              Browse Properties
            </Link>
            <Link to="/contact" className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;