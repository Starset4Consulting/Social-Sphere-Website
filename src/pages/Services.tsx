import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Share2, 
  Video, 
  BarChart3,
  CheckCircle 
} from 'lucide-react';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const services = [
  {
    icon: Globe,
    title: 'Website Application Development',
    description: 'Create stunning, responsive websites that drive results.',
    features: [
      'Custom Web Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'UI/UX Design',
      'Website Maintenance',
    ],
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Improve your visibility and rank higher in search results.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Build and engage your community across social platforms.',
    features: [
      'Content Creation',
      'Community Management',
      'Social Media Strategy',
      'Paid Advertising',
      'Analytics & Reporting',
    ],
  },
  {
    icon: Video,
    title: 'Podcast & Video Production',
    description: 'Create professional multimedia content that engages.',
    features: [
      'Video Production',
      'Podcast Recording',
      'Content Strategy',
      'Post-Production',
      'Distribution',
    ],
  },
  {
    icon: BarChart3,
    title: 'Business Strategy & Campaigns',
    description: 'Develop effective strategies for sustainable growth.',
    features: [
      'Market Analysis',
      'Campaign Planning',
      'Performance Tracking',
      'ROI Optimization',
      'Growth Strategy',
    ],
  },
  {
    icon: BarChart3,
    title: 'Political Management',
    description: "Work's on effective strategies for party growth.",
    features: [
      // 'Public Opinion Surveys',
      'Election Management',
      'Campaign Strategies',
      'Social Media Outreach',
      'Public Opinion Surveys',
    ],
  },
];

export function Services() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                {React.createElement(service.icon, {
                  className: 'h-16 w-16 text-red-500 mb-6',
                })}
                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-gray-400 mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}?w=800&h=450&fit=crop`}
                    alt={service.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
