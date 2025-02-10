import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/social-media', label: 'Social Media' },
  { href: '/services/multimedia', label: 'Multimedia' },
  { href: '/services/strategy', label: 'Strategy' },
  { href: '/services/Political', label: 'Political Management' },
  { href: '/contact', label: 'Contact' }
];

interface HeaderProps {
  logoImageUrl?: string;  // Optional logo image URL
}

export function Header({ logoImageUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* Conditionally render image or icon */}
            {logoImageUrl ? (
              <img
                src={logoImageUrl}
                alt="Logo"
                className="h-8 w-8 object-contain"  // Maintain same size as the icon
              />
            ) : (
              <svg className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.5C6.48 3.5 2 7.98 2 12.5S6.48 21.5 12 21.5 22 17.02 22 12.5 17.52 3.5 12 3.5zm0 15c-1.39 0-2.7-.48-3.77-1.28l1.13-1.48c.7.61 1.58.96 2.64.96 2.11 0 3.83-1.72 3.83-3.83S14.11 10.5 12 10.5c-.69 0-1.34.2-1.89.54l-1.31-1.31c.95-.6 2.07-.95 3.2-.95 4.05 0 7.33 3.28 7.33 7.33s-3.28 7.33-7.33 7.33z" />
              </svg>
            )}
            <span className="text-xl font-bold text-white">Social Sphere</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${location.pathname === item.href ? 'text-red-500' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden bg-black border-t border-white/10 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block text-sm font-medium transition-colors hover:text-red-500 ${location.pathname === item.href ? 'text-red-500' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
