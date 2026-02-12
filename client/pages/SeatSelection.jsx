import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const SEAT_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const SEATS_PER_ROW = 12;

// Generate seat data
const generateSeats = () => {
  const seats = [];
  SEAT_ROWS.forEach((row) => {
    for (let i = 1; i <= SEATS_PER_ROW; i++) {
      const id = `${row}${i}`;
      const isBooked = Math.random() > 0.7; // 30% booked randomly
      seats.push({
        id,
        row,
        number: i,
        isBooked,
        isSelected: false,
      });
    }
  });
  return seats;
};

export default function SeatSelection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleSeat = (seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    if (seat && !seat.isBooked) {
      setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((s) => s !== seatId)
          : [...prev, seatId]
      );
    }
  };

  const totalPrice = selectedSeats.length * 250; // ₹250 per seat

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      <div className="pt-32 px-6 md:px-12 lg:px-16 pb-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Select Your Seat</h1>
            <p className="text-gray-400">Pick your favorite seats for an amazing experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Seat Map */}
            <div className="lg:col-span-3">
              <motion.div
                className="bg-gradient-to-b from-slate-900/50 to-slate-950/50 rounded-lg p-8 border border-slate-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Screen */}
                <div className="text-center mb-12">
                  <div className="relative h-2 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent rounded-full mx-auto w-4/5 mb-4"></div>
                  <p className="text-gray-400 text-sm font-semibold tracking-widest">SCREEN</p>
                </div>

                {/* Seat Grid */}
                <div className="flex justify-center">
                  <div className="space-y-3">
                    {SEAT_ROWS.map((row) => (
                      <motion.div
                        key={row}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: SEAT_ROWS.indexOf(row) * 0.02 }}
                      >
                        <span className="w-6 text-right text-gray-400 font-semibold text-sm">{row}</span>
                        <div className="flex gap-2">
                          {seats
                            .filter((s) => s.row === row)
                            .map((seat) => (
                              <motion.button
                                key={seat.id}
                                onClick={() => toggleSeat(seat.id)}
                                className={`w-8 h-8 rounded transition-all duration-300 text-xs font-bold ${
                                  seat.isBooked
                                    ? 'bg-slate-700 cursor-not-allowed opacity-50'
                                    : selectedSeats.includes(seat.id)
                                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/50'
                                    : 'bg-slate-700 hover:bg-pink-500/30 text-gray-300'
                                }`}
                                whileHover={!seat.isBooked ? { scale: 1.15 } : {}}
                                whileTap={!seat.isBooked ? { scale: 0.95 } : {}}
                              >
                                {seat.number}
                              </motion.button>
                            ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <motion.div
                  className="flex justify-center gap-8 mt-12 pt-8 border-t border-slate-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-slate-700 rounded"></div>
                    <span className="text-gray-400 text-sm">Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded"></div>
                    <span className="text-gray-400 text-sm">Selected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-slate-700 rounded opacity-50"></div>
                    <span className="text-gray-400 text-sm">Booked</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-b from-slate-900/50 to-slate-950/50 rounded-lg p-6 border border-slate-800 sticky top-32">
                <h3 className="text-white font-bold text-lg mb-6">Booking Summary</h3>

                {/* Selected Seats */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Selected Seats</p>
                  {selectedSeats.length > 0 ? (
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-white font-semibold flex flex-wrap gap-2">
                        {selectedSeats.map((seat) => (
                          <span key={seat} className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">
                            {seat}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm italic">No seats selected</p>
                  )}
                </div>

                {/* Price Details */}
                <div className="space-y-3 mb-6 border-t border-slate-700 pt-4">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>{selectedSeats.length} Ticket(s)</span>
                    <span>₹{selectedSeats.length * 250}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Taxes & Fees</span>
                    <span>₹{Math.round(totalPrice * 0.18)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-slate-700">
                    <span>Total</span>
                    <span>₹{totalPrice + Math.round(totalPrice * 0.18)}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  disabled={selectedSeats.length === 0 || isProcessing}
                  onClick={async () => {
                    setIsProcessing(true);
                    // Simulate payment processing
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    toast({
                      title: 'Booking Confirmed!',
                      description: `Successfully booked ${selectedSeats.length} seat(s). Your booking details have been sent to your email.`,
                    });
                    setIsProcessing(false);
                    setTimeout(() => navigate('/bookings'), 1000);
                  }}
                  className={`w-full py-3 px-4 rounded-full font-semibold transition-all duration-300 ${
                    selectedSeats.length > 0 && !isProcessing
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white cursor-pointer'
                      : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                </button>

                {/* Back Button */}
                <Link
                  to={`/movie/${id}`}
                  className="block text-center mt-3 text-pink-500 hover:text-pink-400 font-semibold text-sm"
                >
                  Back to Movie
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
