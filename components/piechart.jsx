import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
];

const reapingRhymes = [
  "Scythe swings, portfolio sings! 📈🚀",
  "KILLO&apos;s here, zeroes beware! 🔥💀",
  "FUD slayer, gains player! 💪💰",
  "KILLO reaps, wallet leaps! 🌙🤑",
  "Bear market? KILLO slaughters it! 🐻☠️",
  "HODL tight, KILLO&apos;s might! 💎🙌"
];

const KilloGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Oi&display=swap');
          .oi-font {
            font-family: "Kavoon", cursive;
          }
        `}
      </style>
      <motion.h2
        className="text-5xl font-bold text-center mb-12 oi-font text-[#990000]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        KILLO&apos;s Reaping Gallery
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => handleInteraction(index)}
          >
            <Image
              src={photo}
              alt={`KILLO reaping ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm md:text-base font-bold text-center px-4 whitespace-pre-line">
                  {reapingRhymes[index]}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KilloGallery;
