import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Ruler, Home, Share2, Heart, Phone, Mail, CheckCircle } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentData, setPaymentData] = useState({
    phone: '',
    amount: '2000'
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-warm-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal-gray mb-4">Property Not Found</h1>
          <Link to="/listings" className="btn-primary">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock M-PESA payment
    alert(`Mock M-PESA Payment: Sending request to pay KSh ${paymentData.amount} from ${paymentData.phone}. In a real implementation, this would integrate with Safaricom's Daraja API.`);
    setShowPaymentForm(false);
  };

  return (
    <div className="min-h-screen bg-warm-sand py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/" className="hover:text-savannah-green">Home</Link>
            <span>/</span>
            <Link to="/listings" className="hover:text-savannah-green">Listings</Link>
            <span>/</span>
            <span className="text-charcoal-gray">{property.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-charcoal-gray mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={20} className="mr-2" />
                    <span>{property.location}, {property.county}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-warm-sand rounded-lg">
                  <div className="text-2xl font-bold text-savannah-green mb-1">{property.price}</div>
                  <div className="text-gray-600">Price</div>
                </div>
                <div className="text-center p-4 bg-warm-sand rounded-lg">
                  <div className="text-2xl font-bold text-savannah-green mb-1">{property.size}</div>
                  <div className="text-gray-600">Size</div>
                </div>
                <div className="text-center p-4 bg-warm-sand rounded-lg">
                  <div className="text-2xl font-bold text-savannah-green mb-1 capitalize">{property.type}</div>
                  <div className="text-gray-600">Type</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="text-savannah-green" size={16} />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Location: {property.location}, {property.county}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              
              <button
                onClick={() => setShowPaymentForm(true)}
                className="w-full btn-primary mb-4"
              >
                Reserve Property - KSh 2,000
              </button>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  <Phone size={20} />
                  <span>Call Agent</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-sky-blue text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  <Mail size={20} />
                  <span>Email Inquiry</span>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-field"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="input-field"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="input-field"
                />
                <button type="submit" className="w-full btn-secondary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* M-PESA Payment Modal */}
        {showPaymentForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">Reserve Property</h3>
              <p className="text-gray-600 mb-6">
                Pay KSh 2,000 to reserve this property for 7 days.
              </p>
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    M-PESA Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., 254700123456"
                    className="input-field"
                    value={paymentData.phone}
                    onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (KSh)
                  </label>
                  <input
                    type="text"
                    value={paymentData.amount}
                    className="input-field"
                    readOnly
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Simulated Daraja API - This is a demo payment system
                </p>
                <div className="flex space-x-4">
                  <button type="submit" className="flex-1 btn-primary">
                    Pay Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPaymentForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;