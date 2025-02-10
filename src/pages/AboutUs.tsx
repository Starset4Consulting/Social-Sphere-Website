import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Globe, Users, Camera, Brush, Share2, Podcast, UserCheck, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: 7,
    label: 'Years Experience',
  },
  {
    icon: Users,
    value: 50,
    label: 'Happy Clients',
  },
];

const services = [
  {
    icon: Camera,
    title: 'Reels Editing',
    description: '15 reels/month packages with engaging content creation',
  },
  {
    icon: Brush,
    title: 'Design Services',
    description: 'Logo design, intro/outro videos, and creative poster designs',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Strategic planning and management of social platforms',
  },
  {
    icon: Podcast,
    title: 'Podcast Production',
    description: 'Professional podcast episodes with notable personalities',
  },
  {
    icon: UserCheck,
    title: 'Influencer Marketing Assistance',
    description: 'Connecting your brand with the right influencers to drive engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Boosting Campaigns',
    description: 'Paid advertising services with a budget range from ₹10,000 to ₹1,00,000, ensuring optimized results and ROI.',
  },
];

const podcastImages = [
  'https://starset4consulting.github.io/Social-clients/image15.jpg',
  'https://starset4consulting.github.io/Social-clients/image14.jpg',
  'https://starset4consulting.github.io/Social-clients/image13.jpg',
  'https://starset4consulting.github.io/Social-clients/image12.jpg',
  'https://starset4consulting.github.io/Social-clients/image11.jpg',
  'https://starset4consulting.github.io/Social-clients/image10.jpg',
  'https://starset4consulting.github.io/Social-clients/image9.jpg',
  'https://starset4consulting.github.io/Social-clients/image8.jpg',
  'https://starset4consulting.github.io/Social-clients/image7.jpg',
];

export function AboutUs() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="space-y-24"
        >
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Empowering Brands, Connecting People</h1>
            <p className="text-xl text-gray-400">
              Welcome to Social Sphere, where ideas meet innovation and brands are transformed into impactful digital identities. 
              Based in Hyderabad, we specialize in creating tailored strategies to help businesses grow, connect, and thrive in the competitive digital landscape.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-colors duration-300 border border-red-500/20"
              >
                <stat.icon className="h-10 w-10 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}+</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Who We Are Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center">Who We Are</h2>
            <p className="text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to empower businesses of all sizes, Social Sphere stands at the forefront of digital marketing, 
              offering a comprehensive suite of services designed to amplify your brand's reach and influence. With a commitment to 
              creativity and a results-driven approach, we have earned the trust of some of the most reputed institutions and 
              businesses in India.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white text-center">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300 border border-red-500/20"
                >
                  <service.icon className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Podcast Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Our Podcast - Social Sphere</h2>
            <p className="text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
              We've expanded into podcasting to give a voice to impactful stories and discussions. Our podcast features engaging 
              conversations with notable personalities like Majid Hussain (MLA of Nampally) and Kausar Mohiuddin, conducting field 
              shoots at iconic places like Charminar and Numaish.
            </p>
          </motion.div>

          {/* Podcast Thumbnails Grid */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Episodes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {podcastImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative w-full overflow-hidden rounded-lg group"
                >
                  <div className="relative pt-[100%]">
                    <img
                      src={`${image}`}
                      alt={`Podcast episode ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-contain bg-black/20"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">Episode {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Our Achievements</h2>
            <div className="bg-white/5 p-8 rounded-lg border border-red-500/20">
              <ul className="text-gray-400 space-y-6">
                {[
                  'Shaheen Group of Institutions: Elevating digital presence through impactful campaigns',
                  'Wisdom Group of Institutions: Enhancing reach in the education sector',
                  'George\'s International Fitness Studios: Showcasing fitness transformations',
                  'Mandi House: Creating a strong digital footprint',
                  'Bhalke Hospital: Developing innovative healthcare campaigns'
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-red-500 text-xl">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Our Vision',
                content: 'To become a leading digital marketing agency that helps businesses achieve their goals while fostering meaningful connections with their audience.'
              },
              {
                title: 'Our Mission',
                content: 'To deliver customized and effective digital marketing strategies that empower businesses to stand out in their industries.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="space-y-4 bg-white/5 p-8 rounded-lg border border-red-500/20 hover:bg-white/10 transition-colors duration-300"
              >
                <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                <p className="text-gray-400 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Customized Solutions',
                'Creative Excellence',
                'Experienced Team',
                'Proven Track Record'
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 p-6 rounded-lg text-center border border-red-500/20 hover:bg-white/10 transition-colors duration-300"
                >
                  <p className="text-white font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={fadeInUp} className="text-center space-y-6 bg-white/5 p-12 rounded-lg border border-red-500/20">
            <h2 className="text-3xl font-bold text-white">Join Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              At Social Sphere, we believe in the power of collaboration and innovation. Together, let's create a digital 
              identity that resonates with your audience and sets you apart from the competition.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 