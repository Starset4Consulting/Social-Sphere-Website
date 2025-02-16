// import { motion } from 'framer-motion';
import { Video, Mic, Film, Edit, Share } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: Film,
    title: 'Video Production',
    description: "Our professional video production services help you craft compelling video content that elevates your brand. From concept to execution, we ensure every video aligns with your messaging and resonates with your audience."
  },
  {
    icon: Mic,
    title: 'Podcast Recording',
    description: "We provide high-quality podcast production, including recording, editing, and mixing, to create a polished final product that sounds professional and engaging."
  },
  {
    icon: Edit,
    title: 'Post-Production',
    description: "Our expert editing services ensure your content is refined and polished. We handle all aspects of post-production, including sound editing, video cuts, and adding special effects, to create the perfect final product."
  },
  {
    icon: Share,
    title: 'Distribution',
    description: "We also strategize content distribution across platforms, ensuring your videos and podcasts reach the right audience at the right time. From YouTube to social media channels, we optimize your content for maximum visibility."
  }
];

export function Multimedia() {
  return (
    <ServiceLayout
      icon={Video}
      title="Podcast & Video Production"
      description="At Social Sphere, we specialize in creating professional multimedia content that tells your brand's story and engages your audience. With over four years of experience, we’ve helped numerous channels and brands produce high-quality videos and podcasts that make an impact.  

      We offer comprehensive production services, including video creation, voiceovers, editing, and more. Whether you need polished promotional videos, engaging social media content, or high-quality podcast recordings, our team is equipped to handle every aspect of the production process from start to finish.  
      
      "
      imageSrc="https://poblenouurbandistrict.com/wp-content/uploads/2019/08/photo-1478737270239-2f02b77fc618.jpeg?w=800&h=400&fit=crop"
    >
      <FeatureList features={features} />
    </ServiceLayout>
  );
}