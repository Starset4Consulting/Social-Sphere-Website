import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { wordAnimation } from '@/lib/animations';

export function Hero() {
  const words = ["Story", "Brand", "Vision", "Future"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://starset4consulting.github.io/Social-clients/image1.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={wordAnimation}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your{' '}
            <motion.span
              key={words[currentWord]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-red-600 inline-block"
            >
              {words[currentWord]}
            </motion.span>
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl text-gray-300 mb-8 glow-text"
            >
              Transform your digital presence with our comprehensive marketing solutions. We help businesses grow through innovative strategies and cutting-edge technology.
            </motion.p>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                variant="destructive"
                className="group w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* <Link to="/services/web-development">
            <Button
  size="lg"
  variant="outline"
  className="text-black border-black hover:bg-black/10 w-full sm:w-auto"
>
  Our Services
</Button>

            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
