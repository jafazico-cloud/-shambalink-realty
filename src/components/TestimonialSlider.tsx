import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={currentTestimonial.avatar} 
            alt={currentTestimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Stars */}
          <div className="flex justify-center md:justify-start mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          {/* Message */}
          <p className="text-gray-700 text-lg mb-4 italic">
            "{currentTestimonial.message}"
          </p>
          
          {/* Name and Location */}
          <div>
            <h4 className="font-semibold text-charcoal-gray">{currentTestimonial.name}</h4>
            <p className="text-gray-500">
              {currentTestimonial.location}
              {currentTestimonial.isOverseas && (
                <span className="ml-2 bg-sky-blue text-white px-2 py-1 rounded text-xs">
                  Diaspora
                </span>
              )}
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex space-x-2">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-savannah-green' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;