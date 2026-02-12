import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Film, Users, Award, Globe } from 'lucide-react';

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

export default function About() {
  const features = [
    {
      icon: Film,
      title: 'Vast Movie Library',
      description: 'Access to thousands of movies across all genres and languages',
    },
    {
      icon: Users,
      title: 'Easy Booking',
      description: 'Simple and secure ticket booking with instant confirmation',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing and exclusive offers for our users',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Book tickets across multiple cities and countries',
    },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Emma Davis', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { name: 'James Wilson', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="pt-32 px-6 md:px-12 lg:px-16 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About QuickShow</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            QuickShow is your ultimate destination for booking movie tickets online. We're committed to making movie experiences accessible, affordable, and enjoyable for everyone.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-r from-slate-900/50 to-slate-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To revolutionize the movie ticket booking experience by making it seamless, secure, and accessible to everyone, anywhere.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We believe that going to the movies should be a hassle-free experience. That's why we've built QuickShow with the user in mind, combining cutting-edge technology with exceptional customer service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're a casual moviegoer or a die-hard film enthusiast, QuickShow has something for everyone.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1489599849228-8e929c266f0c?w=500&h=400&fit=crop"
                alt="Movie Theater"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose QuickShow?</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg p-8 border border-slate-800 hover:border-pink-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon size={40} className="text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Team</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="rounded-lg overflow-hidden mb-4 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-pink-500 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg p-8 text-center border border-pink-500/30"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">500K+</h3>
              <p className="text-gray-300">Happy Users</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg p-8 text-center border border-pink-500/30"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">50+</h3>
              <p className="text-gray-300">Cities Covered</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg p-8 text-center border border-pink-500/30"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">1M+</h3>
              <p className="text-gray-300">Bookings Done</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
