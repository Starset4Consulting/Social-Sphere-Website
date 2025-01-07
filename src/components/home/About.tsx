import { motion } from 'framer-motion';
import { Globe, Users } from 'lucide-react';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { useState, useEffect } from 'react';

const stats = [
  {
    icon: Globe,
    value: 7, // Final value
    label: 'Years Experience',
  },
  {
    icon: Users,
    value: 50, // Final value
    label: 'Happy Clients',
  },
];

export function About() {
  const [animatedStats, setAnimatedStats] = useState(
    stats.map((stat) => ({
      ...stat,
      currentValue: 0, // Initialize the animated value to 0
    }))
  );

  useEffect(() => {
    const incrementValues = () => {
      setAnimatedStats((prevStats) =>
        prevStats.map((stat) => {
          const newValue = Math.min(stat.currentValue + 1, stat.value); // Increment until the target value
          return {
            ...stat,
            currentValue: newValue,
          };
        })
      );
    };

    const interval = setInterval(incrementValues, 80); // Adjust time for animation speed

    const checkCompletion = () => {
      if (animatedStats.every((stat) => stat.currentValue === stat.value)) {
        clearInterval(interval);
      }
    };

    const intervalCheck = setInterval(checkCompletion, 100);

    return () => {
      clearInterval(interval);
      clearInterval(intervalCheck);
    };
  }, [animatedStats]);

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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About Social Sphere</h2>
            <p className="text-gray-400 mb-8">
              At Social Sphere, we are passionate about helping businesses and individuals thrive in the digital age. Since 2017, we’ve been empowering clients with tailored solutions that transform their online presence, with over 50 satisfied clients who trust us to deliver results.
              <br />
              <br />
              Our expertise extends to supporting political parties across India, offering election campaigns and management services that drive success. We specialize in building engaging social media profiles that connect with audiences, crafting custom websites and applications that drive engagement and conversions, and implementing data-driven SEO strategies to boost online visibility.
              <br />
              <br />
              We also bring stories to life through professional podcast and video production, while our business strategy services help organizations chart sustainable growth paths. At Social Sphere, we provide comprehensive digital solutions designed to help you stand out and thrive in today’s competitive marketplace.
            </p>
          </div>

          {/* Centering the stats in a single row */}
          <div className="flex justify-center items-center gap-16">
            {animatedStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 bg-gray-800 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.currentValue}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
