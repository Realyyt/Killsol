import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/88.jpg",
  "/img/999.jpg",
  "/img/99.jpg",
];

const reaperTexts = [
  "Your time is up!",
  "Death comes for all",
  "Embrace the void",
  "The reaper awaits",
  "Your soul is mine",
  "No escape from fate",
  "The scythe swings",
  "Darkness falls",
  "The end is near",
  "Join the afterlife",
  "Reap what you sow",
  "Death's cold embrace",
];

const KilloGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Oi&display=swap');
          .oi-font {
            font-family: "Kavoon", cursive;
          }
        `}
      </style>
      <motion.h2
        className="text-4xl font-bold text-center mb-8 oi-font text-[#990000]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        KILLO Gallery
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Image
              src={photo}
              alt={`KILLO photo ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300"
            />
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-lg font-bold text-center px-4">
                  {reaperTexts[index]}
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
