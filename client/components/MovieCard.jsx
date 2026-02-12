import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <motion.div
        className="group cursor-pointer h-full"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative overflow-hidden rounded-lg bg-slate-800">
          {/* Image Container */}
          <div className="relative w-full aspect-video md:aspect-[3/4] overflow-hidden">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-4 flex flex-col justify-end"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {/* Studio Badge */}
            {movie.studio && (
              <span className="text-xs font-bold text-gray-300 tracking-widest mb-2 line-clamp-1">
                {movie.studio}
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-pink-400 transition-colors">
              {movie.title}
            </h3>

            {/* Rating */}
            {movie.rating && (
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-300">{movie.rating.replace('⭐ ', '')}</span>
              </div>
            )}

            {/* CTA Button - shown on hover */}
            <motion.button
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
