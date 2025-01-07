import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface ServiceLayoutProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  children: React.ReactNode;
}

export function ServiceLayout({
  icon: Icon,
  title,
  description,
  imageSrc,
  children
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-16"
        >
          <div className="text-center">
            <Icon className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-auto rounded-lg "
            />
            <div className="absolute inset-200 bg-black/50" />
          </div>

          {children}
        </motion.div>
      </div>
    </div>
  );
}