import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOVIES = [
  { id: 1, title: 'Guardians of the Galaxy' },
  { id: 2, title: 'The Matrix Resurrections' },
  { id: 3, title: 'Dune: Part Two' },
  { id: 4, title: 'Oppenheimer' },
  { id: 5, title: 'Killers of the Flower Moon' },
  { id: 6, title: 'Napoleon' },
  { id: 7, title: 'Barbie' },
  { id: 8, title: 'Asteroid City' },
];

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4"
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

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl bg-slate-900 rounded-lg overflow-hidden border border-slate-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-3 rounded-lg">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {filteredMovies.length > 0 ? (
                <div className="divide-y divide-slate-700">
                  {filteredMovies.map((movie) => (
                    <Link
                      key={movie.id}
                      to={`/movie/${movie.id}`}
                      onClick={onClose}
                      className="p-4 hover:bg-slate-800/50 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-white group-hover:text-pink-400 transition-colors">
                        {movie.title}
                      </span>
                      <span className="text-gray-500 group-hover:text-pink-400 transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-400">No movies found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
