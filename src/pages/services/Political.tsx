import { Vote, Goal, MessageCircle, Smartphone, Speech } from 'lucide-react';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { FeatureList } from '@/components/services/FeatureList';

const features = [
  {
    icon: Vote,
    title: 'Election Management',
    description: "Streamlined planning and execution of all election-related activities, ensuring smooth operations throughout the campaign."
  },
  {
    icon: Goal,
    title: 'Campaign Strategies',
    description: "Innovative ideas for publicity, rallies, and events that resonate with the public and amplify your vision."
  },
  {
    icon: Smartphone,
    title: 'Social Media Outreach',
    description: "Leveraging digital platforms to enhance your online presence, engage with voters, and build popularity."
  },
  {
    icon: MessageCircle,
    title: 'Public Opinion Surveys',
    description: "Accurate and insightful surveys to gauge voter sentiment, identify key issues, and shape campaign strategies accordingly."
  }
];

export function Political() {
  return (
    <ServiceLayout
      icon={Speech}
      title="Political Management"
      description="At Social Sphere, we specialize in comprehensive election management services for political parties across India. Our expertise lies in orchestrating successful campaigns, driving effective publicity, and managing all election-related duties to ensure a seamless and impactful electoral journey.  

      From crafting innovative campaign strategies to conducting surveys that gauge public opinion, we provide end-to-end solutions that help political leaders connect with their constituents. With a mix of traditional methods and modern tools, including social media outreach and event management, we ensure your message reaches every corner of your electorate.  "
      imageSrc="https://starset4consulting.github.io/Social-clients/image2.jpg"
    >
      <FeatureList features={features} />

      {/* YouTube Video Section */}
      <div className="mt-8 p-6 bg-black-100 rounded-lg shadow-lg">
        <div className="relative pb-[56.25%] bg-gray-100"> {/* Same as the background color */}
          <iframe
            className="absolute inset-0 w-full h-full border-none"
            src="https://www.youtube.com/embed/PDpnR9_3NPc?autoplay=1&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </ServiceLayout>
  );
}
