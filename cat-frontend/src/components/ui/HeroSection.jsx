import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-500 to-blue-300 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.h1
          className="text-white text-6xl lg:text-8xl font-extrabold opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          Welcome to Cat Haven
        </motion.h1>
      </div>

      {/* Flying Cat */}
      <motion.img
        src="https://images.unsplash.com/photo-1587823207416-6900512ba412"
        alt="Flying Cat"
        className="w-64 h-64 lg:w-80 lg:h-80 object-contain absolute z-10"
        initial={{ x: "-100%", rotate: -45 }}
        animate={{ x: "100%", rotate: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center space-y-6">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to <span className="text-yellow-300">Cat Haven</span>
        </motion.h1>
        <motion.p
          className="text-white text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the cutest cats ready to become your lifelong companions.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link className="px-6 py-3 bg-yellow-300 text-blue-700 rounded-lg shadow-lg hover:bg-yellow-400 transition" to={"cat-posts"}>
            Browse Cats
          </Link>
          <Link className="px-6 py-3 bg-white text-blue-700 rounded-lg shadow-lg hover:bg-gray-200 transition" to={"shelters"}>
            Explore Shelters
          </Link>
        </motion.div>
      </div> 
    </div>
  );
};

export default HeroSection;
