// import { motion } from 'framer-motion';
import { Share2, MessageSquare, TrendingUp, Target, BarChart } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: MessageSquare,
    title: 'Community Management',
    description: "Engagement is key to building a loyal following. We actively engage with your community by responding to comments, messages, and mentions, fostering a sense of connection and trust with your audience."
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: "Our data-driven strategies boost social media presence and grow your audience organically by analyzing performance and identifying opportunities to reach your targets effectively."
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: "We create targeted social media advertising campaigns to promote your business and increase conversions. Our ads are optimized for performance to ensure your budget delivers maximum impact."
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: "We track the performance of your social media efforts with detailed insights and reporting, providing you with the data to understand how your content is performing and how it contributes to your overall marketing objectives."
  }
];

export function SocialMedia() {
  return (
    <ServiceLayout
      icon={Share2}
      title="Social Media Management"
      description="At Social Sphere, we specialize in building and engaging your community across social platforms with strategic content and campaigns that elevate your brand’s presence. Our tailored social media management services focus on curating and publishing content that resonates with your audience, while optimizing for algorithms to ensure maximum reach and engagement.  

      We also analyze current trends and best practices on various platforms to create content that aligns with popular formats and criteria, ensuring your posts are optimized to capture attention and stay relevant. Whether it's leveraging viral trends or tapping into trending hashtags, we design content that’s more likely to resonate with your audience and push your brand further into the spotlight.  
      
      We handle all aspects of your social media presence, from managing accounts and creating posts to content writing, scheduling, and publishing. We ensure your content is aligned with your brand’s voice, using relevant hashtags and trends to push your posts further into social media algorithms and attract the right audience.  
      "
      imageSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop"
    >
      <FeatureList features={features} />
    </ServiceLayout>
  );
}