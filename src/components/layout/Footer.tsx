import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Sphere</h3>
            <p className="text-sm mb-4">
              A dynamic platform connecting individuals and businesses through cutting-edge services in web development, social media, SEO, and more. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571341516238&mibextid=ZbWKwL" className="text-white hover:text-red-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/socials_phere?t=XT2XOTcVqj1Y7XfJnWlcZw&s=09" className="text-white hover:text-red-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/socials_phere?igsh=MXFmcnE0MXZoN3k4MA==" className="text-white hover:text-red-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-sm text-red-500 hover:text-red-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-sm text-red-500 hover:text-red-500">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-sm text-red-500 hover:text-red-500">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services/multimedia" className="text-sm text-red-500 hover:text-red-500">
                  Multimedia
                </Link>
              </li>
              <li>
                <Link to="/services/strategy" className="text-sm text-red-500 hover:text-red-500">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/Political" className="text-sm text-red-500 hover:text-red-500">
                  Political Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-red-500 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-red-500 hover:text-red-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-red-500 hover:text-red-500">
                  About us
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">
              <strong>Email:</strong> contact@social-sphere.in
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +91 9112245559
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/80 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Social Sphere. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
