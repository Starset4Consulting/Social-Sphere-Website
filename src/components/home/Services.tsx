import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Search,
  Share2,
  Video,
  BarChart3,
  Speech,
} from 'lucide-react';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const services = [
  {
    icon: Globe,
    title: 'Website Application',
    description: 'Custom web solutions that drive engagement and conversions.',
    link: '/services/web-development',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Data-driven SEO strategies to improve your online visibility.',
    link: '/services/seo',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engaging social media presence that connects with your audience.',
    link: '/services/social-media',
  },
  {
    icon: Video,
    title: 'Podcast & Video',
    description: 'Professional multimedia content that tells your story.',
    link: '/services/multimedia',
  },
  {
    icon: BarChart3,
    title: 'Business Strategy',
    description: 'Strategies for sustainable growth.',
    link: '/services/strategy',
  },
  {
    icon: Speech,
    title: 'Political Management',
    description: "Work's on effective strategies for party growth.",
    link: '/services/Political',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                custom={index}
                className="group perspective w-full h-64"
              >
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-white/10 border border-gray-700 rounded-lg flex flex-col justify-between p-6 backface-hidden">
                    <div>
                      {React.createElement(service.icon, {
                        className: 'h-12 w-12 text-red-500 mb-4',
                      })}
                      <h3 className="text-white text-lg font-bold">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-red-500 text-white rounded-lg flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                    <p className="text-lg font-bold mb-4">
                      Explore {service.title} in-depth for tailored solutions!
                    </p>
                    <Link
                      to={service.link}
                      className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-red-500 transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
