export interface Testimonial {
  id: string;
  name: string;
  location: string;
  message: string;
  rating: number;
  avatar: string;
  isOverseas: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Grace Wanjiku',
    location: 'Nakuru, Kenya',
    message: 'ShambaLink helped me sell my family land quickly and at a fair price. Their team was professional and guided me through every step.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    isOverseas: false
  },
  {
    id: '2',
    name: 'David Johnson',
    location: 'London, UK',
    message: 'As a Kenyan living in the UK, I found ShambaLink invaluable for investing back home. They made the entire process seamless and transparent.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    isOverseas: true
  },
  {
    id: '3',
    name: 'Peter Kiprotich',
    location: 'Eldoret, Kenya',
    message: 'Excellent service! They verified all the documents and ensured everything was legitimate before we proceeded. Highly recommended.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    isOverseas: false
  },
  {
    id: '4',
    name: 'Sarah Mitchell',
    location: 'Toronto, Canada',
    message: 'ShambaLink connected me with the perfect investment opportunity in Nairobi. Their diaspora agent program is fantastic!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    isOverseas: true
  },
  {
    id: '5',
    name: 'Mary Akinyi',
    location: 'Kisumu, Kenya',
    message: 'Professional, reliable, and trustworthy. They helped me find the perfect plot for my dream home. Thank you ShambaLink!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    isOverseas: false
  }
];