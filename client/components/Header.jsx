import { Link } from 'react-router-dom';
import { Search, User, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SearchModal from './SearchModal';
import ProfileModal from './ProfileModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 to-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-pink-500 transition-colors">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            QuickShow
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">
            Home
          </Link>
          <Link to="/movies" className="text-gray-300 hover:text-white transition-colors font-medium">
            Movies
          </Link>
          <Link to="/trending" className="text-gray-300 hover:text-white transition-colors font-medium">
            Trending
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
            About
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-slate-800/50 rounded-full transition-colors"
          >
            <Search size={20} className="text-gray-300 hover:text-white" />
          </button>
          <Link to="/bookings">
            <button className="p-2 hover:bg-slate-800/50 rounded-full transition-colors">
              <Heart size={20} className="text-gray-300 hover:text-white" />
            </button>
          </Link>
          <button
            onClick={() => setIsProfileOpen(true)}
            className="p-2 hover:bg-slate-800/50 rounded-full transition-colors"
          >
            <User size={20} className="text-gray-300 hover:text-white" />
          </button>
          <button
            onClick={() => setIsProfileOpen(true)}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hidden sm:block"
          >
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-800 px-6 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              to="/trending"
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => {
                setIsProfileOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2 px-6 rounded-full w-full"
            >
              Sign In
            </button>
          </div>
        </motion.nav>
      )}

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </motion.header>
  );
}
