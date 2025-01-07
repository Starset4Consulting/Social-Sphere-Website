// import { motion } from 'framer-motion';
import { Search, Target, FileSearch, PenTool, Link } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: Target,
    title: 'Keyword Research',
    description: "We conduct data-driven keyword analysis to identify terms that resonate with your ideal audience, ensuring your content is optimized for the phrases people are actively searching for."
  },
  {
    icon: FileSearch,
    title: 'Technical SEO',
    description: "Our experts enhance your website’s structure, improving its crawlability and ensuring it adheres to search engine guidelines for better rankings. From fixing broken links to optimizing loading times, we handle it all."
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: "Effective SEO is fueled by high-quality content. We develop and execute strategies to create engaging, optimized content that not only ranks well but also drives conversions and engages your audience."
  },
  {
    icon: Link,
    title: 'Link Building',
    description: "Our growth strategies focus on boosting product visibility and creating a scalable roadmap. By blending creativity with proven methods, we help your brand sustain momentum and achieve lasting growth."
  }
];

export function SEO() {
  return (
    <ServiceLayout
      icon={Search}
      title="Search Engine Optimization"
      description="At Social Sphere, we help your brand gain visibility and rank higher in search results with comprehensive SEO strategies tailored to your needs. Our approach goes beyond just optimizing for search engines like Google. We also specialize in platform-specific SEO, such as YouTube, ensuring your content reaches the right audience and achieves maximum impact."
      imageSrc="https://starset4consulting.github.io/Social-clients/image4.jpg?w=800&h=400&fit=crop"
    >
      <FeatureList features={features} />
    </ServiceLayout>
  );
}