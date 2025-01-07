import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Update logos array to only include 4 images
const logos = [
  'https://starset4consulting.github.io/Social-clients/bhalkelogo-scaled.jpg',
  'https://starset4consulting.github.io/Social-clients/logo.png',
  'https://starset4consulting.github.io/Social-clients/shaheen.jpg',
  'https://starset4consulting.github.io/Social-clients/wisdom.jpg',
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Trusted Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the companies we’ve worked with and helped grow.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
            autoplay: true,
            interval: 2000,  // Adjust slide interval as needed
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4"> {/* Adjusted the basis to show 4 items */}
                <div className="flex justify-center items-center p-4">
                  <img src={logo} alt={`Logo ${index}`} className="h-12 w-auto object-contain" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </section>
  );
}
