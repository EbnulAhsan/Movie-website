import { Facebook, Twitter, Instagram, Youtube, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-slate-950 border-t border-slate-800/50 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 md:px-12 lg:px-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                QuickShow
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate movie ticket booking platform. Book movies, watch shows, and enjoy amazing experiences.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Download */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Download App</h4>
            <div className="space-y-3">
              <button
                onClick={() => alert('iOS app download coming soon!')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium"
              >
                <Download size={16} />
                iOS App
              </button>
              <button
                onClick={() => alert('Android app download coming soon!')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium"
              >
                <Download size={16} />
                Android App
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 QuickShow. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Youtube, label: 'YouTube' },
            ].map(({ Icon, label }) => (
              <motion.button
                key={label}
                variants={itemVariants}
                className="p-2 bg-slate-800/50 hover:bg-pink-500/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} className="text-gray-300 hover:text-pink-500 transition-colors" />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
