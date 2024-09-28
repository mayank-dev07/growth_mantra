// components/AutoCarousel.tsx

"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Card {
  id: number;
  title: string;
  imageSrc: string; // Image source path
}

const cards: Card[] = [
  { id: 1, title: "Data-Driven Strategy Formulation", imageSrc: "/Strategy.png" },
  { id: 2, title: "Data-Powered Retention Growth", imageSrc: "/Increase Graph.png" },
  { id: 3, title: "Amplify Customer Lifetime Value", imageSrc: "/Customer.png" },
  { id: 4, title: "Conversion-Focused Optimization", imageSrc: "/CaroselConversion.png" },
];

const AutoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <motion.div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }} // Move 50% for each card (as two cards are visible)
      >
        {cards.map((card) => (
          <div key={card.id} className="min-w-[50%] flex-shrink-0 p-4">
            <div className="bg-[#576D2C] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 ">
              <div className="relative h-20 w-20 mx-auto mb-7 mt-5"> {/* Smaller image size and increased margin-bottom */}
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain" // Use 'contain' to keep the aspect ratio
                  className="rounded-t-lg"
                  onError={(e) => console.error(`Failed to load image: ${card.imageSrc}`, e)}
                />
              </div>
              <div className="p-4 mb-7">
                <h2 className="text-xl font-semibold text-white text-center">{card.title}</h2> {/* Centered title */}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoCarousel;
