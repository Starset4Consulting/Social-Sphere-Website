import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fadeInUp, staggerChildren } from '@/lib/animations';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {features.map((feature, index) => (
        <motion.div key={feature.title} variants={fadeInUp} custom={index}>
          <Card className="bg-white/5 border-red-500/20 hover:border-red-500/40 transition-colors">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle className="text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}