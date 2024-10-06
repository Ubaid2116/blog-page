"use client"
import Image from "next/image";
import banner from "@/images/bannerImg.jpg";
import { motion } from "framer-motion"; // For animations

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={banner}
        alt="banner image"
        className="w-full h-full object-cover" // Changed to object-cover for a better full-screen effect
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex flex-col items-center justify-center text-center px-4">
        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-[120px] font-bold text-white tracking-wide"
        >
          Tailor Smith
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-xl md:text-3xl lg:text-5xl text-gray-300 font-medium mt-4"
        >
          Traveler, Photographer
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          Explore My Journey
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
