
import { Testimonial } from '../types';

/**
 * Sample testimonial data for the Member Testimonials section
 * This would typically come from an API in a production environment
 */
export const testimonialData: Testimonial[] = [
  {
    id: '1',
    type: 'video',
    memberName: 'Sarah Johnson',
    memberTitle: 'CEO, Tech Innovations',
    memberTier: 'platinum',
    content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual testimonial video
    useCase: 'business',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    type: 'text',
    memberName: 'Michael Chen',
    memberTitle: 'Financial Analyst',
    memberTier: 'gold',
    memberImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'HeliHop has transformed my business travel experience. What used to be a three-hour commute now takes just 20 minutes. I\'ve gained back countless hours that I can now dedicate to my work and family. The reliability and convenience are unmatched.',
    date: '2023-09-15',
    useCase: 'business'
  },
  {
    id: '3',
    type: 'text',
    memberName: 'Emma Rodriguez',
    memberTitle: 'Travel Blogger',
    memberTier: 'silver',
    memberImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'As someone who loves exploring different parts of the city for my blog, HeliHop has been a game-changer. The silver membership is perfect for my occasional needs, and the app makes booking so simple. I love being able to capture aerial views for my content!',
    date: '2023-08-22',
    useCase: 'leisure'
  },
  {
    id: '4',
    type: 'video',
    memberName: 'Robert Patel',
    memberTitle: 'Emergency Physician',
    memberTier: 'platinum',
    content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual testimonial video
    useCase: 'emergency',
    thumbnailUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '5',
    type: 'text',
    memberName: 'Jennifer Williams',
    memberTitle: 'Real Estate Developer',
    memberTier: 'gold',
    memberImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'HeliHop allows me to visit multiple properties across the city in a single day - something that was impossible before. My productivity has doubled, and my clients are impressed with the efficiency. Worth every penny of my gold membership.',
    date: '2023-07-10',
    useCase: 'business'
  },
  {
    id: '6',
    type: 'text',
    memberName: 'David Thompson',
    memberTitle: 'Family Man & Software Engineer',
    memberTier: 'standard',
    content: 'My family and I used HeliHop for a special weekend trip, and it made our day so memorable! The kids were thrilled by the helicopter ride, and we managed to visit three different attractions without the usual travel fatigue. Even as a standard member, the experience was top-notch and the staff was incredibly accommodating for our children.',
    date: '2023-10-05',
    useCase: 'family'
  },
  {
    id: '7',
    type: 'text',
    memberName: 'Sophia Garcia',
    memberTitle: 'Event Planner',
    memberTier: 'silver',
    memberImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'I coordinate high-end events all over the city, and HeliHop has been essential for site visits and last-minute supplier meetings. The silver tier gives me just the right amount of flexibility for my varying schedule. My clients are always impressed when I arrive via helicopter!',
    date: '2023-09-30',
    useCase: 'business'
  },
  {
    id: '8',
    type: 'text',
    memberName: 'James Wilson',
    memberTitle: 'Retired Executive',
    memberTier: 'platinum',
    content: 'After 40 years of sitting in traffic, I decided my retirement years were too valuable to waste. My platinum membership with HeliHop means I can meet friends for lunch across town, attend medical appointments, and visit my grandchildren all in one day, without the stress of driving. It\'s given me a new lease on life and expanded what\'s possible in my day.',
    date: '2023-08-18',
    useCase: 'leisure'
  },
  {
    id: '9',
    type: 'video',
    memberName: 'Lisa Chang',
    memberTitle: 'Corporate Lawyer',
    memberTier: 'gold',
    content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual testimonial video
    useCase: 'business',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];
  