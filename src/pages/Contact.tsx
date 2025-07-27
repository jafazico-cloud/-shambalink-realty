import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-warm-sand py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal-gray mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you with all your real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-charcoal-gray">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      ShambaLink Realty<br />
                      Westlands, Nairobi<br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-savannah-green rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      +254 700 123 456<br />
                      +254 722 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      info@shambalink.co.ke<br />
                      sales@shambalink.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4 text-charcoal-gray">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+254700123456"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Phone className="text-green-600" size={20} />
                  <span className="text-green-700 font-medium">Call Now</span>
                </a>
                
                <a 
                  href="https://wa.me/254700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="w-5 h-5 bg-green-500 rounded"></div>
                  <span className="text-green-700 font-medium">WhatsApp</span>
                </a>
                
                <a 
                  href="mailto:info@shambalink.co.ke"
                  className="flex items-center space-x-3 p-3 bg-sky-blue/10 rounded-lg hover:bg-sky-blue/20 transition-colors"
                >
                  <Mail className="text-sky-blue" size={20} />
                  <span className="text-sky-blue font-medium">Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-savannah-green mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-6 text-charcoal-gray">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="input-field"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="input-field"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="input-field"
                          placeholder="+254 700 123 456"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          className="input-field"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="buying">I want to buy property</option>
                          <option value="selling">I want to sell property</option>
                          <option value="diaspora">Diaspora agent inquiry</option>
                          <option value="investment">Investment opportunities</option>
                          <option value="general">General inquiry</option>
                          <option value="support">Technical support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        className="input-field"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-charcoal-gray mb-8">Find Our Office</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p>Google Maps integration coming soon</p>
                <p className="text-sm mt-2">
                  <strong>Location:</strong> Westlands, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;