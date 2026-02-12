import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrailerModal from '../components/TrailerModal';
import { Star, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

const CAST_MEMBERS = [
  { id: 1, name: 'Chris Pratt', role: 'Peter Quill', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 2, name: 'Zoe Saldana', role: 'Gamora', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 3, name: 'Dave Bautista', role: 'Drax', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 4, name: 'Vin Diesel', role: 'Groot', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 5, name: 'Bradley Cooper', role: 'Rocket', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 6, name: 'Karen Gillan', role: 'Nebula', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 7, name: 'Pom Klementieff', role: 'Mantis', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
];

const CINEMAS = [
  { id: 1, name: 'IMAX', price: 250, format: '2D' },
  { id: 2, name: '4DX', price: 320, format: '4D' },
  { id: 3, name: 'Standard', price: 180, format: '2D' },
  { id: 4, name: 'Premium', price: 280, format: '2D' },
];

const SIMILAR_MOVIES = [
  { id: 2, title: 'The Matrix Resurrections', image: 'https://images.unsplash.com/photo-1604088113235-9a51e28e7315?w=300&h=450&fit=crop' },
  { id: 3, title: 'Dune: Part Two', image: 'https://images.unsplash.com/photo-1533613220915-121e644e8eab?w=300&h=450&fit=crop' },
  { id: 4, title: 'Oppenheimer', image: 'https://images.unsplash.com/photo-1597045566677-8cc5ad9f64d6?w=300&h=450&fit=crop' },
  { id: 5, title: 'Killers of the Flower Moon', image: 'https://images.unsplash.com/photo-1489599849228-8e929c266f0c?w=300&h=450&fit=crop' },
];

export default function MovieDetail() {
  const { id } = useParams();
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const movie = {
    id: id,
    title: 'Guardians of the Galaxy',
    studio: 'MARVEL STUDIOS',
    rating: 8.5,
    duration: '150 min',
    genre: 'Action, Adventure, Comedy',
    description: 'A ragtag team of intergalactic outlaws must pull together to stop an evil power from destroying the universe. Following the events of the first film, the Guardians must face off against Ego, Peter Quill\'s biological father, and a mysterious new enemy.',
    image: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=400&h=600&fit=crop',
  };

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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Main Content */}
      <div className="pt-32 px-6 md:px-12 lg:px-16 pb-16">
        {/* Movie Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Poster */}
          <div className="md:col-span-1">
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={movie.image} alt={movie.title} className="w-full h-auto" />
            </motion.div>
          </div>

          {/* Details */}
          <motion.div
            className="md:col-span-2 flex flex-col justify-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="text-sm font-bold text-gray-300 tracking-widest mb-3">
              {movie.studio}
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
              {movie.title}
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Clock size={18} className="text-gray-400" />
                <span className="text-white font-semibold">{movie.duration}</span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-6 leading-relaxed">
              {movie.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-gray-400 mb-2">Genre</p>
              <p className="text-white text-lg font-medium">{movie.genre}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <button
                onClick={() => setIsWatchlisted(!isWatchlisted)}
                className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isWatchlisted
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                    : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white'
                }`}
              >
                {isWatchlisted ? '✓ In Watchlist' : 'Add to Watchlist'}
              </button>
              <button
                onClick={() => {
                  navigator.share?.({
                    title: movie.title,
                    text: 'Check out this amazing movie!',
                    url: window.location.href,
                  });
                }}
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Share
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Cast Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Cast</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CAST_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="rounded-full overflow-hidden mb-3 bg-slate-800 w-full aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm line-clamp-2">{member.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Cinema Selection */}
        <motion.section
          className="mb-16 bg-gradient-to-r from-slate-900/50 to-slate-950 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Choose Cinema</h2>
          <p className="text-gray-400 mb-8">Select your preferred cinema format</p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CINEMAS.map((cinema) => (
              <motion.button
                key={cinema.id}
                variants={itemVariants}
                onClick={() => setSelectedCinema(cinema.id)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-center ${
                  selectedCinema === cinema.id
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-slate-700 bg-slate-800/30 hover:border-pink-500/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{cinema.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{cinema.format}</p>
                <p className="text-pink-500 font-bold text-lg">₹{cinema.price}</p>
              </motion.button>
            ))}
          </motion.div>

          {selectedCinema && (
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link to={`/seat-selection/${id}`}>
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Select Seats
                </button>
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* Similar Movies */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">You May Also Like</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SIMILAR_MOVIES.map((movie) => (
              <motion.div
                key={movie.id}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-slate-800">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{movie.title}</h3>
                    <Link to={`/movie/${movie.id}`}>
                      <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <Footer />

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        movieTitle={movie.title}
      />
    </div>
  );
}
