import { BarChart3, LineChart, PieChart, Target, TrendingUp } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: LineChart,
    title: 'Market Analysis',
    description:
      "From conceptualizing a product logo and crafting compelling taglines to designing innovative campaigns, we ensure every element aligns with your brand identity. Our campaigns are meticulously planned and executed, leveraging both online platforms and offline avenues such as events and exhibitions to engage your target audience.",
  },
  {
    icon: Target,
    title: 'Campaign Planning',
    description:
      "We focus on pushing your brand image across diverse platforms, from social media to traditional media outlets. By integrating digital efforts with offline strategies, such as organizing or participating in events, we ensure your brand gains the recognition it deserves.",
  },
  {
    icon: PieChart,
    title: 'Performance Tracking',
    description:
      "Comprehensive performance monitoring is at the core of our process. We use detailed analytics to track campaign effectiveness, identify areas for improvement, and optimize strategies for better results.",
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description:
      "Our growth strategies enhance product visibility and provide a scalable roadmap, combining creativity with proven methods to drive sustained success.",
  },
];

export function Strategy() {
  return (
    <ServiceLayout
      icon={BarChart3}
      title="Business Strategy & Campaigns"
      description="At Social Sphere, we craft effective strategies and campaigns that drive sustainable growth and elevate your brand’s presence across multiple platforms. Our expertise spans both online and offline domains, ensuring your brand captures attention, builds recognition, and achieves long-term success.  

      We begin with in-depth market research and competitor analysis to understand your industry landscape. This allows us to identify opportunities and create tailored strategies that position your brand for maximum impact."
      imageSrc="https://starset4consulting.github.io/Social-clients/image5.jpg"
    >
      {/* Using the image directly with necessary styling */}
      {/* <div className="relative w-full rounded-lg overflow-hidden">
        <img
          src="https://starset4consulting.github.io/Social-clients/image3.jpg"
          alt="Business Strategy"
          className="object-cover w-full h-auto rounded-lg"
        />
      </div> */}

      {/* Feature List */}
      <FeatureList features={features} />
    </ServiceLayout>
  );
}
