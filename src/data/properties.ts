export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  county: string;
  size: string;
  type: 'land' | 'home';
  image: string;
  description: string;
  amenities: string[];
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Prime Agricultural Land in Nakuru',
    price: 'KSh 2,500,000',
    location: 'Bahati, Nakuru',
    county: 'Nakuru',
    size: '5 Acres',
    type: 'land',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    description: 'Fertile agricultural land perfect for farming or investment. Located near the main road with easy access.',
    amenities: ['Water Access', 'Road Access', 'Fertile Soil', 'Title Deed Ready'],
    featured: true
  },
  {
    id: '2',
    title: 'Modern Family Home in Karen',
    price: 'KSh 15,000,000',
    location: 'Karen, Nairobi',
    county: 'Nairobi',
    size: '0.5 Acres',
    type: 'home',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'Beautiful 4-bedroom home in the prestigious Karen area. Perfect for families.',
    amenities: ['4 Bedrooms', 'Swimming Pool', 'Garden', 'Security', 'Parking'],
    featured: true
  },
  {
    id: '3',
    title: 'Beachfront Land in Kilifi',
    price: 'KSh 8,000,000',
    location: 'Kilifi, Coast',
    county: 'Kilifi',
    size: '2 Acres',
    type: 'land',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    description: 'Stunning beachfront land with ocean views. Perfect for resort or residential development.',
    amenities: ['Ocean View', 'Beach Access', 'Tourist Area', 'Development Potential'],
    featured: true
  },
  {
    id: '4',
    title: 'Commercial Plot in Eldoret',
    price: 'KSh 4,200,000',
    location: 'Eldoret Town, Uasin Gishu',
    county: 'Uasin Gishu',
    size: '0.25 Acres',
    type: 'land',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    description: 'Prime commercial land in the heart of Eldoret. Ideal for business development.',
    amenities: ['Town Center', 'Commercial Zone', 'High Traffic', 'Utilities Available'],
    featured: false
  },
  {
    id: '5',
    title: 'Residential Plot in Kiambu',
    price: 'KSh 1,800,000',
    location: 'Ruiru, Kiambu',
    county: 'Kiambu',
    size: '0.125 Acres',
    type: 'land',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    description: 'Perfect residential plot in a growing neighborhood. Ready for construction.',
    amenities: ['Electricity', 'Water', 'Road Access', 'Residential Area'],
    featured: false
  },
  {
    id: '6',
    title: 'Luxury Villa in Diani',
    price: 'KSh 25,000,000',
    location: 'Diani Beach, Kwale',
    county: 'Kwale',
    size: '1 Acre',
    type: 'home',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    description: 'Luxurious beachfront villa with stunning ocean views and premium amenities.',
    amenities: ['5 Bedrooms', 'Ocean View', 'Swimming Pool', 'Private Beach', 'Fully Furnished'],
    featured: true
  }
];