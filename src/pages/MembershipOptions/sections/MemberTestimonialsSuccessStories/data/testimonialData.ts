
import { Testimonial } from '../types';

/**
 * Sample testimonial data
 * In a production environment, this would typically come from an API
 */
export const testimonialData: Testimonial[] = [
  {
    id: '1',
    type: 'video',
    memberName: 'Sarah Johnson',
    memberTitle: 'Chief Marketing Officer',
    memberCompany: 'TechVision Inc.',
    membershipTier: 'executive',
    memberAvatar: '/assets/testimonials/sarah-johnson.jpg',
    content: 'HeliHop\'s Executive membership has completely transformed how I travel for business. I used to spend hours dealing with commercial flights and connections. Now I\'m in and out of meetings across three cities in a single day with zero hassle.',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    posterImage: '/assets/testimonials/sarah-video-thumbnail.jpg',
    useCase: 'Business Travel',
    testimonialDate: '2023-06-15'
  },
  {
    id: '2',
    type: 'written',
    memberName: 'David Chen',
    memberTitle: 'Entrepreneur',
    membershipTier: 'plus',
    memberAvatar: '/assets/testimonials/david-chen.jpg',
    content: 'As someone who values both time and experience, HeliHop Plus has been the perfect middle ground. I get the flexibility I need for weekend getaways and occasional business trips without the premium price of executive travel. The booking process is seamless, and the helicopter transfers have saved me countless hours sitting in traffic. I\'ve been able to squeeze in morning meetings in the city and still make it to my beach house by noon - something that was impossible before.',
    useCase: 'Mixed Use',
    testimonialDate: '2023-04-22'
  },
  {
    id: '3',
    type: 'success-story',
    memberName: 'Emily Rodriguez',
    memberTitle: 'Regional Sales Director',
    memberCompany: 'GlobalTech Solutions',
    membershipTier: 'essentials',
    memberAvatar: '/assets/testimonials/emily-rodriguez.jpg',
    content: 'Even with the Essentials plan, I\'ve been able to drastically improve my sales performance. Instead of wasting time on the road between client meetings, I can now pack in twice as many face-to-face interactions. My closing rate has improved by 35% because I arrive fresh and focused instead of stressed from travel. The HeliHop membership pays for itself every month!',
    beforeAfterMetric: {
      metric: 'Weekly Client Meetings',
      before: '8-10',
      after: '18-20'
    },
    useCase: 'Business Development',
    testimonialDate: '2023-07-05'
  },
  {
    id: '4',
    type: 'video',
    memberName: 'Michael Thompson',
    memberTitle: 'Travel Influencer',
    membershipTier: 'plus',
    memberAvatar: '/assets/testimonials/michael-thompson.jpg',
    content: 'As a content creator, I\'m always looking for unique experiences to share with my audience. HeliHop delivers that wow factor every single time. The aerial views have taken my content to a new level - literally! My followers can\'t get enough of the stunning perspectives.',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    posterImage: '/assets/testimonials/michael-video-thumbnail.jpg',
    useCase: 'Leisure & Content Creation',
    testimonialDate: '2023-05-18'
  },
  {
    id: '5',
    type: 'written',
    memberName: 'Jennifer Lee',
    memberTitle: 'Real Estate Developer',
    memberCompany: 'Horizon Properties',
    membershipTier: 'executive',
    memberAvatar: '/assets/testimonials/jennifer-lee.jpg',
    content: 'Time is my most valuable asset in real estate development. With HeliHop Executive, I can inspect multiple properties across different counties in a single day. When a time-sensitive opportunity arises, I can be on-site within hours rather than rearranging my entire schedule. This advantage has allowed me to secure several high-value properties before competitors could even arrange site visits. The ROI is undeniable - my first month of membership paid for itself with a single deal that wouldn\'t have been possible without HeliHop\'s speed and flexibility.',
    useCase: 'Property Management',
    testimonialDate: '2023-02-10'
  },
  {
    id: '6',
    type: 'success-story',
    memberName: 'Robert Patel',
    memberTitle: 'Medical Director',
    memberCompany: 'Metropolitan Health Network',
    membershipTier: 'plus',
    memberAvatar: '/assets/testimonials/robert-patel.jpg',
    content: 'As a doctor overseeing multiple clinics, my time is literally a matter of life and death. HeliHop has allowed me to be present for critical consultations across our network of hospitals without the exhaustion of road travel. I\'ve been able to increase my patient consultations while actually reducing my working hours - giving me precious time back with my family.',
    beforeAfterMetric: {
      metric: 'Time Spent Commuting',
      before: '15+ hours/week',
      after: '3-4 hours/week'
    },
    useCase: 'Healthcare',
    testimonialDate: '2023-03-29'
  },
  {
    id: '7',
    type: 'written',
    memberName: 'Sophia Williams',
    memberTitle: 'Luxury Event Planner',
    membershipTier: 'essentials',
    memberAvatar: '/assets/testimonials/sophia-williams.jpg',
    content: 'Even the Essentials tier has been a game-changer for my event planning business. I can scout multiple venues in different locations in record time, and the "wow factor" of arriving by helicopter impresses clients immediately. It\'s the perfect blend of practicality and luxury that aligns with my brand. I initially worried it would be an unnecessary expense, but it\'s actually helped me win more contracts with clients who value efficiency and style.',
    useCase: 'Event Management',
    testimonialDate: '2023-05-02'
  },
  {
    id: '8',
    type: 'video',
    memberName: 'James Wilson',
    memberTitle: 'CEO',
    memberCompany: 'Innovate Capital',
    membershipTier: 'executive',
    memberAvatar: '/assets/testimonials/james-wilson.jpg',
    content: 'In venture capital, being first matters. HeliHop gives me the ability to meet founders face-to-face across multiple cities when opportunities arise, often beating competitors who are still figuring out their travel arrangements. In this industry, personal connections drive deals, and HeliHop helps me build those connections with unprecedented efficiency.',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    posterImage: '/assets/testimonials/james-video-thumbnail.jpg',
    useCase: 'Investment Management',
    testimonialDate: '2023-01-15'
  },
  {
    id: '9',
    type: 'success-story',
    memberName: 'Olivia Garcia',
    memberTitle: 'Production Supervisor',
    memberCompany: 'Global Media Productions',
    membershipTier: 'plus',
    memberAvatar: '/assets/testimonials/olivia-garcia.jpg',
    content: 'Our film production schedule was always at the mercy of traffic conditions when moving between locations. With HeliHop, we\'ve revolutionized our shooting schedule. We can now film at multiple locations in a single day, reducing our overall production time and budget. The aerial transport has also unexpectedly given our camera crew amazing establishing shots that would have required separate helicopter rentals.',
    beforeAfterMetric: {
      metric: 'Production Schedule',
      before: '6 weeks',
      after: '3.5 weeks'
    },
    useCase: 'Media Production',
    testimonialDate: '2023-06-20'
  }
];
