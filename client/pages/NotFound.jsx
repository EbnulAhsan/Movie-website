import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Oops! The page you're looking for doesn't exist. Let's get you back to watching amazing movies!
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
            <p className="text-gray-500 text-sm">
              Or explore <a href="#movies" className="text-pink-500 hover:text-pink-400">movies</a> and{' '}
              <a href="#trending" className="text-pink-500 hover:text-pink-400">
                trending shows
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
