import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const SellLand = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    location: '',
    landSize: '',
    price: '',
    description: '',
    amenities: [] as string[],
    titleDeed: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const amenityOptions = [
    'Water Access',
    'Electricity Available',
    'Road Access',
    'Fertile Soil',
    'Near Town Center',
    'Tourist Area',
    'Development Potential',
    'Ocean View',
    'Mountain View'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const handleAmenityChange = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, titleDeed: file }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-sand py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <CheckCircle className="w-16 h-16 text-savannah-green mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-charcoal-gray mb-4">
                Thank You!
              </h1>
              <p className="text-gray-600 mb-6">
                Your property listing has been submitted successfully. Our team will review 
                your submission and contact you within 24 hours.
              </p>
              <div className="bg-warm-sand p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-savannah-green" size={16} />
                    <span>Property verification and documentation review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-savannah-green" size={16} />
                    <span>Professional photography arrangement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-savannah-green" size={16} />
                    <span>Listing goes live on our platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-savannah-green" size={16} />
                    <span>Marketing to our buyer network</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary mr-4"
              >
                List Another Property
              </button>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-sand py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-charcoal-gray mb-4">
              Sell Your Land
            </h1>
            <p className="text-xl text-gray-600">
              Looking to sell? Let's help you reach the right buyer.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Sell With ShambaLink?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-savannah-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Free Listing</h3>
                <p className="text-gray-600">No upfront costs to list your property</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">Access to diaspora and local buyers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">Professional guidance throughout the process</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Owner Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Owner Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
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
                      placeholder="e.g., +254700123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Property Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g., Nakuru, Bahati"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Land Size *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g., 5 Acres, 0.5 Acres"
                      value={formData.landSize}
                      onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Price (KSh) *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g., 2,500,000"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Description *
                  </label>
                  <textarea
                    className="input-field"
                    rows={4}
                    placeholder="Describe your property, its features, and any additional information..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                <p className="text-gray-600 mb-4">Select all that apply to your property:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenityOptions.map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="rounded border-gray-300 text-savannah-green focus:ring-savannah-green"
                      />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Title Deed Upload */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Title Deed *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-600 mb-4">
                      Click to upload or drag and drop your title deed
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="titleDeed"
                      required
                    />
                    <label htmlFor="titleDeed" className="btn-secondary cursor-pointer">
                      Choose File
                    </label>
                    {formData.titleDeed && (
                      <p className="mt-2 text-sm text-savannah-green">
                        ✓ {formData.titleDeed.name}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Accepted formats: PDF, JPG, JPEG, PNG (Max 10MB)
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="text-yellow-600 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> By submitting this form, you confirm that you are the 
                      legitimate owner of this property and have the right to sell it. All information 
                      provided will be verified before listing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-12 py-4">
                  Submit Property Listing
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Our team will review your submission and contact you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellLand;