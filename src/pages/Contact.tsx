import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp } from '@/lib/animations';
import { useForm, ValidationError } from '@formspree/react';

// Formspree endpoint (use the correct endpoint for your form)
const FORM_ID = 'mbllppaa';

export function Contact() {
  // Use Formspree hook for form submission handling
  const [state, handleSubmit] = useForm(FORM_ID);

  // If form submission is successful, show a Thank You message
  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-16 bg-black">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Thank you for contacting us!</h1>
          <p className="text-white">We have received your message and will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
          
          {/* Formspree Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-white">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="bg-white/5 text-white"
                required
              />
            </div>
            
            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 text-white"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-white">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                className="bg-white/5 text-white"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button type="submit" variant="destructive" size="lg" className="w-full" disabled={state.submitting}>
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Google Maps Section */}
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Find Us On The Map</h2>
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8259861603424!2d78.463257!3d17.384953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9779d347fcc1%3A0xee7d73da3e828357!2sDarussalam%20Educational%20Trust!5e1!3m2!1sen!2sin!4v1736265697913!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps?q=17.384953,78.463257&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
