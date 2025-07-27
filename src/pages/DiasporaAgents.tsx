import React, { useState } from 'react';
import { Globe, TrendingUp, Shield, Users, DollarSign, Award, CheckCircle } from 'lucide-react';

const DiasporaAgents = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    experience: '',
    investment: '',
    motivation: ''
  });

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you within 48 hours.');
    setShowApplicationForm(false);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      experience: '',
      investment: '',
      motivation: ''
    });
  };

  return (
    <div className="min-h-screen bg-warm-sand">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We Connect You <span className="text-savannah-green">Home</span>
            </h1>
            <p className="text-xl mb-8">
              Join our network of diaspora agents and help Kenyans abroad invest in their homeland
            </p>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Partner With Us Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-gray mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-600">
              ShambaLink's Diaspora Agent Program connects experienced professionals living abroad 
              with authentic Kenyan real estate opportunities. Earn while helping your community invest back home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-600">
                Connect with Kenyans worldwide and help them invest in verified properties back home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-savannah-green rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Commission</h3>
              <p className="text-gray-600">
                Receive competitive commissions for every successful property transaction you facilitate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-earth-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Properties</h3>
              <p className="text-gray-600">
                All properties are thoroughly vetted and verified for legitimate ownership and clear titles.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Mock */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-charcoal-gray mb-12">
            Agent Dashboard Preview
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-savannah-green to-green-600 text-white p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Total Earnings</p>
                    <h3 className="text-2xl font-bold">KSh 2,450,000</h3>
                  </div>
                  <DollarSign size={32} />
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-blue to-blue-600 text-white p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Properties Managed</p>
                    <h3 className="text-2xl font-bold">23</h3>
                  </div>
                  <Award size={32} />
                </div>
              </div>

              <div className="bg-gradient-to-r from-earth-brown to-yellow-600 text-white p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100">Client Referrals</p>
                    <h3 className="text-2xl font-bold">47</h3>
                  </div>
                  <Users size={32} />
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h4 className="text-lg font-semibold mb-4">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>New client inquiry from Toronto</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Property viewing scheduled - Nakuru land</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Sale completed - KSh 150,000 commission earned</span>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-charcoal-gray mb-12">
            Why Join Our Network?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Agent Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-savannah-green mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Competitive Commissions</h4>
                    <p className="text-gray-600">Earn 3-5% commission on all successful transactions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-savannah-green mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Training & Support</h4>
                    <p className="text-gray-600">Comprehensive training on Kenyan real estate laws and processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-savannah-green mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Marketing Materials</h4>
                    <p className="text-gray-600">Professional brochures, presentations, and digital assets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-savannah-green mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Local Support Team</h4>
                    <p className="text-gray-600">Dedicated team in Kenya to handle viewings and documentation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Client Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-sky-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Remote Property Viewing</h4>
                    <p className="text-gray-600">Virtual tours and video calls with on-ground representatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-sky-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Secure Payment Processing</h4>
                    <p className="text-gray-600">International wire transfers and mobile money integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-sky-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Legal Documentation</h4>
                    <p className="text-gray-600">Complete handling of title transfers and legal processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-sky-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Investment Guidance</h4>
                    <p className="text-gray-600">Market analysis and investment recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-charcoal-gray mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">How do I become a ShambaLink agent?</h3>
              <p className="text-gray-600">
                Submit your application through our form below. We'll review your background and schedule 
                an interview. Successful candidates undergo a week-long training program before being certified.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">What qualifications do I need?</h3>
              <p className="text-gray-600">
                We look for professionals with experience in real estate, finance, or sales. Most importantly, 
                you should have strong networks within the Kenyan diaspora community and a passion for helping others.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">How much can I earn as an agent?</h3>
              <p className="text-gray-600">
                Our top agents earn between KSh 500,000 to KSh 2,000,000 annually. Earnings depend on your network, 
                dedication, and the volume of transactions you facilitate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Do I need to be physically present in Kenya?</h3>
              <p className="text-gray-600">
                No! Our program is designed for diaspora professionals. You can work entirely remotely, 
                with our local team handling all physical aspects of property transactions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-earth-brown text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-warm-sand">
              Join our growing network of successful diaspora agents today.
            </p>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="bg-savannah-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 text-lg"
            >
              Apply Now
            </button>
          </div>
        </section>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Diaspora Agent Application</h3>
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={applicationData.fullName}
                    onChange={(e) => setApplicationData({ ...applicationData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={applicationData.country}
                    onChange={(e) => setApplicationData({ ...applicationData, country: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience *
                </label>
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Describe your experience in real estate, sales, or related fields..."
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Interest *
                </label>
                <select
                  className="input-field"
                  value={applicationData.investment}
                  onChange={(e) => setApplicationData({ ...applicationData, investment: e.target.value })}
                  required
                >
                  <option value="">Select your primary interest</option>
                  <option value="residential">Residential Properties</option>
                  <option value="commercial">Commercial Properties</option>
                  <option value="agricultural">Agricultural Land</option>
                  <option value="mixed">Mixed Portfolio</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join ShambaLink? *
                </label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="Tell us about your motivation and how you can contribute to our network..."
                  value={applicationData.motivation}
                  onChange={(e) => setApplicationData({ ...applicationData, motivation: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button type="submit" className="flex-1 btn-primary">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
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
  );
};

export default DiasporaAgents;