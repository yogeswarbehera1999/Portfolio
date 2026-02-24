import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
          
          {/* Quick Links - LEFT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social - RIGHT */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 md:justify-end">
              {[
                { Icon: Github, href: 'https://github.com/yogeswarbehera1999', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/yogeswarbehera/', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://x.com/YogeswarBehera', label: 'Twitter' },
                { Icon: Mail, href: 'mailto:yogeswar.personal@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - CENTER */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            © {currentYear} Yogeswar Behera. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};