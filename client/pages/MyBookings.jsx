import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, MapPin, Ticket, Download } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const BOOKINGS = [
  {
    id: 1,
    movieTitle: 'Guardians of the Galaxy',
    movieImage: 'https://images.unsplash.com/photo-1636933562439-df0d5762fc90?w=150&h=200&fit=crop',
    cinema: 'PVR Cinemas, Delhi',
    date: '2024-02-15',
    time: '7:00 PM',
    seats: ['A1', 'A2'],
    price: 500,
    status: 'Confirmed',
    bookingId: 'QB123456',
  },
  {
    id: 2,
    movieTitle: 'The Matrix Resurrections',
    movieImage: 'https://images.unsplash.com/photo-1604088113235-9a51e28e7315?w=150&h=200&fit=crop',
    cinema: 'INOX Mumbai',
    date: '2024-02-18',
    time: '9:30 PM',
    seats: ['C5', 'C6', 'C7'],
    price: 750,
    status: 'Confirmed',
    bookingId: 'QB789012',
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

export default function MyBookings() {
  const { toast } = useToast();
  const [expandedBooking, setExpandedBooking] = useState(null);

  const handleDownload = (bookingId) => {
    toast({
      title: 'Download Started',
      description: `Your ticket for booking ${bookingId} is being downloaded...`,
    });
  };

  const handleViewDetails = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
    if (expandedBooking !== bookingId) {
      toast({
        title: 'Booking Details',
        description: `Showing details for booking ${bookingId}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      <div className="pt-32 px-6 md:px-12 lg:px-16 pb-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">My Bookings</h1>
            <p className="text-gray-400">View and manage all your movie tickets</p>
          </div>

          {/* Bookings List */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {BOOKINGS.length > 0 ? (
              BOOKINGS.map((booking) => (
                <motion.div
                  key={booking.id}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-slate-900/50 to-slate-950/50 rounded-lg border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                    {/* Movie Image */}
                    <div className="md:col-span-1">
                      <img
                        src={booking.movieImage}
                        alt={booking.movieTitle}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>

                    {/* Booking Details */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{booking.movieTitle}</h2>
                        <p className="text-gray-400 mb-4 flex items-center gap-2">
                          <MapPin size={16} />
                          {booking.cinema}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          {/* Date */}
                          <div>
                            <p className="text-gray-500 text-xs font-semibold tracking-widest mb-1">
                              DATE
                            </p>
                            <p className="text-white font-semibold flex items-center gap-2">
                              <Calendar size={16} />
                              {new Date(booking.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>

                          {/* Time */}
                          <div>
                            <p className="text-gray-500 text-xs font-semibold tracking-widest mb-1">
                              TIME
                            </p>
                            <p className="text-white font-semibold">{booking.time}</p>
                          </div>

                          {/* Seats */}
                          <div>
                            <p className="text-gray-500 text-xs font-semibold tracking-widest mb-1">
                              SEATS
                            </p>
                            <p className="text-white font-semibold flex flex-wrap gap-1">
                              {booking.seats.map((seat) => (
                                <span key={seat} className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">
                                  {seat}
                                </span>
                              ))}
                            </p>
                          </div>

                          {/* Status */}
                          <div>
                            <p className="text-gray-500 text-xs font-semibold tracking-widest mb-1">
                              STATUS
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                              {booking.status}
                            </span>
                          </div>
                        </div>

                        {/* Booking ID */}
                        <p className="text-gray-500 text-xs">
                          Booking ID: <span className="text-gray-400 font-mono">{booking.bookingId}</span>
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 flex flex-col justify-between items-start md:items-end gap-4">
                      <div className="text-right w-full">
                        <p className="text-gray-400 text-sm mb-1">Total Price</p>
                        <p className="text-3xl font-bold text-pink-500">₹{booking.price}</p>
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <button
                          onClick={() => handleDownload(booking.bookingId)}
                          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
                        >
                          <Download size={16} />
                          Download
                        </button>
                        <button
                          onClick={() => handleViewDetails(booking.id)}
                          className="border border-slate-600 text-gray-300 hover:bg-slate-800/50 font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-full"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center py-16"
                variants={itemVariants}
              >
                <Ticket size={64} className="mx-auto text-gray-600 mb-4 opacity-50" />
                <h2 className="text-2xl font-bold text-gray-400 mb-2">No bookings yet</h2>
                <p className="text-gray-500 mb-6">Start by exploring movies and booking your tickets</p>
                <motion.a
                  href="/"
                  className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Movies
                </motion.a>
              </motion.div>
            )}
          </motion.div>

          {/* Stats */}
          {BOOKINGS.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg p-6 border border-slate-800 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Total Bookings</p>
                <p className="text-3xl font-bold text-pink-500">{BOOKINGS.length}</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg p-6 border border-slate-800 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Total Spent</p>
                <p className="text-3xl font-bold text-pink-500">
                  ₹{BOOKINGS.reduce((sum, b) => sum + b.price, 0)}
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg p-6 border border-slate-800 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Total Tickets</p>
                <p className="text-3xl font-bold text-pink-500">
                  {BOOKINGS.reduce((sum, b) => sum + b.seats.length, 0)}
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
