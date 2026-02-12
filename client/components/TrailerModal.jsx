import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function TrailerModal({ isOpen, onClose, movieTitle }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl bg-slate-950 rounded-lg overflow-hidden border border-slate-800"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Video Container */}
            <div className="w-full aspect-video bg-black relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DbAWscasBKk"
                title={`${movieTitle} - Official Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 border-t border-slate-800 flex justify-between items-center">
              <h3 className="text-white font-semibold">{movieTitle} - Official Trailer</h3>
              <button
                onClick={onClose}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
