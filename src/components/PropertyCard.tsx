import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Ruler } from 'lucide-react';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <div className="absolute top-3 left-3 bg-savannah-green text-white px-2 py-1 rounded text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-earth-brown text-white px-2 py-1 rounded text-sm font-semibold capitalize">
          {property.type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-charcoal-gray">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-600">
            <Ruler size={16} className="mr-1" />
            <span className="text-sm">{property.size}</span>
          </div>
          <div className="text-xl font-bold text-savannah-green">
            {property.price}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        
        <Link 
          to={`/property/${property.id}`}
          className="block w-full text-center btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;