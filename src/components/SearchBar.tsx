import React, { useState } from 'react';
import { Search, MapPin, DollarSign } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  minPrice: string;
  maxPrice: string;
  propertyType: 'all' | 'land' | 'home';
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: 'all'
  });

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Enter location (e.g., Nairobi, Nakuru)"
            className="input-field pl-10"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>

        {/* Price Range */}
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select
            className="input-field pl-10 appearance-none"
            value={`${filters.minPrice}-${filters.maxPrice}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-');
              setFilters({ ...filters, minPrice: min, maxPrice: max });
            }}
          >
            <option value="-">Any Price</option>
            <option value="0-1000000">Below KSh 1M</option>
            <option value="1000000-5000000">KSh 1M - 5M</option>
            <option value="5000000-10000000">KSh 5M - 10M</option>
            <option value="10000000-20000000">KSh 10M - 20M</option>
            <option value="20000000-">Above KSh 20M</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <select
            className="input-field"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value as any })}
          >
            <option value="all">All Properties</option>
            <option value="land">Land Only</option>
            <option value="home">Homes Only</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="btn-primary flex items-center justify-center space-x-2"
        >
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;