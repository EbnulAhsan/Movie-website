import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import { ChevronDown } from 'lucide-react';

const ALL_MOVIES = [
  { id: 1, title: 'Guardians of the Galaxy', studio: 'MARVEL STUDIOS', rating: '⭐ 8.5/10', image: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=400&h=600&fit=crop' },
  { id: 2, title: 'The Matrix Resurrections', studio: 'WARNER BROS', rating: '⭐ 7.2/10', image: 'https://images.unsplash.com/photo-1604088113235-9a51e28e7315?w=300&h=450&fit=crop' },
  { id: 3, title: 'Dune: Part Two', studio: 'WARNER BROS', rating: '⭐ 8.1/10', image: 'https://images.unsplash.com/photo-1533613220915-121e644e8eab?w=300&h=450&fit=crop' },
  { id: 4, title: 'Oppenheimer', studio: 'UNIVERSAL', rating: '⭐ 8.4/10', image: 'https://images.unsplash.com/photo-1597045566677-8cc5ad9f64d6?w=300&h=450&fit=crop' },
  { id: 5, title: 'Killers of the Flower Moon', studio: 'APPLE TV', rating: '⭐ 8.0/10', image: 'https://images.unsplash.com/photo-1489599849228-8e929c266f0c?w=300&h=450&fit=crop' },
  { id: 6, title: 'Napoleon', studio: 'COLUMBIA', rating: '⭐ 6.9/10', image: 'https://images.unsplash.com/photo-1495099811223-4d98c6e9c869?w=300&h=450&fit=crop' },
  { id: 7, title: 'Barbie', studio: 'WARNER BROS', rating: '⭐ 7.9/10', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=450&fit=crop' },
  { id: 8, title: 'Asteroid City', studio: 'FOCUS', rating: '⭐ 7.0/10', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop' },
  { id: 9, title: 'The Brutalist', studio: 'A24', rating: '⭐ 8.2/10', image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=300&h=450&fit=crop' },
  { id: 10, title: 'Killers of the Flower Moon', studio: 'PARAMOUNT', rating: '⭐ 8.3/10', image: 'https://images.unsplash.com/photo-1478720568477-152d9e3fb27f?w=300&h=450&fit=crop' },
  { id: 11, title: 'Poor Things', studio: 'SEARCHLIGHT', rating: '⭐ 7.5/10', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop' },
  { id: 12, title: 'The American Society of Magical Negroes', studio: 'FOCUS', rating: '⭐ 6.8/10', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop' },
];

const GENRES = ['All', 'Action', 'Comedy', 'Drama', 'Thriller', 'Sci-Fi', 'Romance', 'Horror'];

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

export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [displayCount, setDisplayCount] = useState(8);
  const [sortBy, setSortBy] = useState('latest');

  const sortedMovies = [...ALL_MOVIES].sort((a, b) => {
    if (sortBy === 'rating') {
      return parseFloat(b.rating) - parseFloat(a.rating);
    }
    return 0;
  });

  const displayedMovies = sortedMovies.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      <div className="pt-32 px-6 md:px-12 lg:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Movies</h1>
            <p className="text-gray-400">Browse and book tickets for all available movies</p>
          </div>

          {/* Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Genre Filter */}
            <div className="mb-6">
              <p className="text-white font-semibold mb-4">Filter by Genre</p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {GENRES.map((genre) => (
                  <motion.button
                    key={genre}
                    variants={itemVariants}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedGenre === genre
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {genre}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Sort Filter */}
            <div>
              <p className="text-white font-semibold mb-4">Sort By</p>
              <motion.div
                className="flex gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  variants={itemVariants}
                  onClick={() => setSortBy('latest')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    sortBy === 'latest'
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  Latest
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => setSortBy('rating')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    sortBy === 'rating'
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  Top Rated
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Movies Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedMovies.map((movie) => (
              <motion.div key={movie.id} variants={itemVariants}>
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {displayCount < sortedMovies.length && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setDisplayCount(displayCount + 4)}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Load More Movies
                <ChevronDown size={20} />
              </button>
            </motion.div>
          )}

          {/* End Message */}
          {displayCount >= sortedMovies.length && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400">All {sortedMovies.length} movies loaded</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
