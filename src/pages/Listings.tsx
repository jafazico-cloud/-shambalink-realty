import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import SearchBar, { SearchFilters } from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Listings = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: 'all'
  });
  const [sortBy, setSortBy] = useState('featured');

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.county.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    // Filter by price range
    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[^\d]/g, ''));
        const min = filters.minPrice ? parseInt(filters.minPrice) : 0;
        const max = filters.maxPrice ? parseInt(filters.maxPrice) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Sort properties
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-warm-sand py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal-gray mb-4">Property Listings</h1>
          <p className="text-gray-600">
            Discover prime real estate opportunities across Kenya
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={setFilters} />
        </div>

        {/* Sort and Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-600">
              Showing {filteredProperties.length} properties
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Sort by:</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-savannah-green"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              No properties found
            </h3>
            <p className="text-gray-500 mb-8">
              Try adjusting your search criteria to find more properties.
            </p>
            <button
              onClick={() => setFilters({ location: '', minPrice: '', maxPrice: '', propertyType: 'all' })}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;