import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import { TrendingUp, Flame } from 'lucide-react';

const TRENDING_MOVIES = [
  { id: 1, title: 'Guardians of the Galaxy', studio: 'MARVEL STUDIOS', rating: '⭐ 8.5/10', image: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=400&h=600&fit=crop', trend: 'up', trendValue: '+32%' },
  { id: 4, title: 'Oppenheimer', studio: 'UNIVERSAL', rating: '⭐ 8.4/10', image: 'https://images.unsplash.com/photo-1597045566677-8cc5ad9f64d6?w=300&h=450&fit=crop', trend: 'up', trendValue: '+28%' },
  { id: 3, title: 'Dune: Part Two', studio: 'WARNER BROS', rating: '⭐ 8.1/10', image: 'https://images.unsplash.com/photo-1533613220915-121e644e8eab?w=300&h=450&fit=crop', trend: 'up', trendValue: '+25%' },
  { id: 5, title: 'Killers of the Flower Moon', studio: 'APPLE TV', rating: '⭐ 8.0/10', image: 'https://images.unsplash.com/photo-1489599849228-8e929c266f0c?w=300&h=450&fit=crop', trend: 'up', trendValue: '+22%' },
  { id: 2, title: 'The Matrix Resurrections', studio: 'WARNER BROS', rating: '⭐ 7.2/10', image: 'https://images.unsplash.com/photo-1604088113235-9a51e28e7315?w=300&h=450&fit=crop', trend: 'up', trendValue: '+18%' },
  { id: 7, title: 'Barbie', studio: 'WARNER BROS', rating: '⭐ 7.9/10', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=450&fit=crop', trend: 'up', trendValue: '+15%' },
  { id: 6, title: 'Napoleon', studio: 'COLUMBIA', rating: '⭐ 6.9/10', image: 'https://images.unsplash.com/photo-1495099811223-4d98c6e9c869?w=300&h=450&fit=crop', trend: 'down', trendValue: '-5%' },
  { id: 8, title: 'Asteroid City', studio: 'FOCUS', rating: '⭐ 7.0/10', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', trend: 'down', trendValue: '-8%' },
];

const FEATURED_TRENDING = [
  {
    id: 1,
    title: 'Guardians of the Galaxy',
    description: 'The most watched movie this week with 32% increase in bookings',
    image: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=800&h=400&fit=crop',
    rank: '#1',
  },
  {
    id: 4,
    title: 'Oppenheimer',
    description: 'A historic drama gaining massive audience interest',
    image: 'https://images.unsplash.com/photo-1597045566677-8cc5ad9f64d6?w=800&h=400&fit=crop',
    rank: '#2',
  },
  {
    id: 3,
    title: 'Dune: Part Two',
    description: 'Epic sci-fi masterpiece continues to captivate audiences worldwide',
    image: 'https://images.unsplash.com/photo-1533613220915-121e644e8eab?w=800&h=400&fit=crop',
    rank: '#3',
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
    transition: { duration: 0.5 },
  },
};

export default function Trending() {
  const [timeFilter, setTimeFilter] = useState('week');

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
            <div className="flex items-center gap-3 mb-4">
              <Flame size={32} className="text-pink-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Trending Now</h1>
            </div>
            <p className="text-gray-400">Discover the most popular movies this {timeFilter}</p>
          </div>

          {/* Time Filter */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-white font-semibold mb-4">Filter by Time</p>
            <div className="flex gap-3 flex-wrap">
              {['today', 'week', 'month'].map((time) => (
                <motion.button
                  key={time}
                  onClick={() => setTimeFilter(time)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                    timeFilter === time
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Trending */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Top Trending</h2>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {FEATURED_TRENDING.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  variants={itemVariants}
                  className="relative h-48 md:h-56 rounded-lg overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl font-bold text-pink-500">{movie.rank}</span>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{movie.title}</h3>
                          <p className="text-gray-300 text-sm md:text-base">{movie.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* All Trending Movies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">All Trending Movies</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {TRENDING_MOVIES.map((movie) => (
                <motion.div key={movie.id} variants={itemVariants} className="relative">
                  <MovieCard movie={movie} />
                  {/* Trend Badge */}
                  <motion.div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 z-10 ${
                      movie.trend === 'up'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <TrendingUp size={16} />
                    {movie.trendValue}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
