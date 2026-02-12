import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import TrailerModal from '../components/TrailerModal';
import { ChevronRight } from 'lucide-react';

// Sample movie data - in production this would come from an API
const MOVIES = [
  {
    id: 1,
    title: 'Guardians of the Galaxy',
    studio: 'MARVEL STUDIOS',
    rating: '⭐ 8.5/10',
    image: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=400&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'The Matrix Resurrections',
    studio: 'WARNER BROS',
    rating: '⭐ 7.2/10',
    image: 'https://images.unsplash.com/photo-1604088113235-9a51e28e7315?w=300&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Dune: Part Two',
    studio: 'WARNER BROS',
    rating: '⭐ 8.1/10',
    image: 'https://images.unsplash.com/photo-1533613220915-121e644e8eab?w=300&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Oppenheimer',
    studio: 'UNIVERSAL',
    rating: '⭐ 8.4/10',
    image: 'https://images.unsplash.com/photo-1597045566677-8cc5ad9f64d6?w=300&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Killers of the Flower Moon',
    studio: 'APPLE TV',
    rating: '⭐ 8.0/10',
    image: 'https://images.unsplash.com/photo-1489599849228-8e929c266f0c?w=300&h=450&fit=crop',
  },
  {
    id: 6,
    title: 'Napoleon',
    studio: 'COLUMBIA',
    rating: '⭐ 6.9/10',
    image: 'https://images.unsplash.com/photo-1495099811223-4d98c6e9c869?w=300&h=450&fit=crop',
  },
  {
    id: 7,
    title: 'Barbie',
    studio: 'WARNER BROS',
    rating: '⭐ 7.9/10',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=450&fit=crop',
  },
  {
    id: 8,
    title: 'Asteroid City',
    studio: 'FOCUS',
    rating: '⭐ 7.0/10',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
  },
];

const TRENDING = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    image: 'https://images.unsplash.com/photo-1594909122845-11beda3ee59d?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Avatar: Way of Water',
    image: 'https://images.unsplash.com/photo-1606924842584-bae2fcf4fda6?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    title: 'The Last Jedi',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    title: 'Inception',
    image: 'https://images.unsplash.com/photo-1506377872002-4b2f3b94e27f?w=100&h=100&fit=crop',
  },
];

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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Index() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen max-h-[700px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=1200&h=700&fit=crop"
            alt="Guardians of the Galaxy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-end pb-20 px-6 md:px-12 lg:px-16">
          <motion.div
            className="max-w-2xl z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-sm font-semibold text-gray-300 tracking-widest">
                MARVEL STUDIOS
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Guardians of the Galaxy
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-8 text-lg max-w-md leading-relaxed"
            >
              A ragtag team of intergalactic outlaws must pull together to stop an evil
              power from destroying the universe.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center flex-wrap"
            >
              <Link
                to="/movie/1"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsTrailerOpen(true)}
                className="border-2 border-gray-400 text-gray-300 font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Watch Trailer
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Now Showing Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Now Showing</h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-pink-500 hover:text-pink-400 font-semibold flex items-center gap-2 transition-colors"
          >
            See All <ChevronRight size={20} />
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {MOVIES.slice(0, displayCount).map((movie) => (
            <motion.div key={movie.id} variants={itemVariants}>
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>

        {displayCount < MOVIES.length && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setDisplayCount(displayCount + 4)}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Load More
            </button>
          </motion.div>
        )}
      </section>

      {/* Trending Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trending
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Featured trending item */}
          <motion.div
            className="lg:col-span-8 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={TRENDING[0].image}
              alt={TRENDING[0].title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>

          {/* Small trending items */}
          <motion.div
            className="lg:col-span-4 grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TRENDING.slice(1).map((movie) => (
              <motion.div
                key={movie.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Footer />

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        movieTitle="Guardians of the Galaxy"
      />
    </div>
  );
}
