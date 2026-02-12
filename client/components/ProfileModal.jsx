import { motion, AnimatePresence } from 'framer-motion';
import { X, User, LogOut, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfileModal({ isOpen, onClose, isLoggedIn = false }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal - positioned as dropdown */}
          <motion.div
            className="absolute top-20 right-6 w-80 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoggedIn ? (
              <>
                {/* User Info */}
                <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 p-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">John Doe</h3>
                      <p className="text-gray-400 text-sm">john@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="divide-y divide-slate-700 py-2">
                  <Link
                    to="/bookings"
                    onClick={onClose}
                    className="px-4 py-3 text-gray-300 hover:text-pink-400 hover:bg-slate-800/50 transition-all flex items-center gap-3 group"
                  >
                    <User size={18} className="group-hover:text-pink-400" />
                    My Bookings
                  </Link>
                  <button className="w-full px-4 py-3 text-gray-300 hover:text-pink-400 hover:bg-slate-800/50 transition-all flex items-center gap-3 group text-left">
                    <Settings size={18} className="group-hover:text-pink-400" />
                    Settings
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all flex items-center gap-3 group text-left"
                  >
                    <LogOut size={18} className="group-hover:text-red-400" />
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4">Sign In to QuickShow</h3>
                <button
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 mb-3"
                >
                  Sign In
                </button>
                <button className="w-full border border-slate-600 text-gray-300 hover:bg-slate-800 font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                  Create Account
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
