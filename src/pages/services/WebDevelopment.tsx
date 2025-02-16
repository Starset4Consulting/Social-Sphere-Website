// import { motion } from 'framer-motion';
import { Globe, Code, Layout, Smartphone, Wrench } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: "We create bespoke websites using modern technologies, ensuring they are visually appealing, functional, and scalable. Whether for a corporate site, portfolio, or custom platform, we turn your vision into reality."
  },

  {
    icon: Layout,
    title: 'E-commerce Solutions',
    description: "Boost your online business with intuitive, secure e-commerce platforms. Our solutions include smooth payment integration, inventory management, and user-friendly interfaces to drive sales."
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: "Enhance user experience with fast, app-like web applications that work seamlessly, even offline. PWAs combine reliability, speed, and engagement to elevate your digital reach."
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: "Refresh your website’s look or ensure it performs at its best. From modern designs to regular updates and security enhancements, we’ll keep your platform running smoothly."
  }
];

export function WebDevelopment() {
  return (
    <ServiceLayout
      icon={Globe}
      title="Web Development"
      description="At Social Sphere, we deliver versatile web solutions tailored to your needs. From fast, visually stunning websites built with React to Android applications for businesses, we ensure your digital presence is impactful and functional. Our services also include website redesigns and maintenance to keep your platform fresh, secure, and optimized."
      imageSrc="https://www.elexoft.com/blogs/wp-content/uploads/2021/05/technology-stack-for-web-application-main.jpg?w=800&h=400&fit=crop"
    >
      <FeatureList features={features} />
    </ServiceLayout>
  );
}