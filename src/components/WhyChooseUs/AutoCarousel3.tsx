"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  imageSrc: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Data-Driven Strategy Formulation",
    imageSrc: "/Strategy.png",
  },
  {
    id: 2,
    title: "Data-Powered Retention Growth",
    imageSrc: "/Increase Graph.png",
  },
  {
    id: 3,
    title: "Amplify Customer Lifetime Value",
    imageSrc: "/Customer.png",
  },
  {
    id: 4,
    title: "Conversion-Focused Optimization",
    imageSrc: "/CaroselConversion.png",
  },
];

const AutoCarousel: React.FC = () => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startCarousel = async () => {
      const container = carouselRef.current;
      if (container) {
        const totalWidth = container.scrollWidth / 2;

        controls.start({
          x: -totalWidth,
          transition: {
            duration: cards.length * 5,
            ease: "linear",
          },
        });

        setTimeout(() => {
          controls.set({ x: 0 });
          startCarousel();
        }, cards.length * 5000);
      }
    };

    startCarousel();
  }, [controls]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Whitish shading on the left and right edges */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none z-10"></div>

      <motion.div
        className="flex"
        animate={controls}
        ref={carouselRef}
        style={{ display: "flex", whiteSpace: "wrap" }}
      >
        {cards.concat(cards).map((card, index) => (
          <div key={index} className="min-w-[60%] md:min-w-[45%] flex p-4">
            <div className="bg-[#16213E] shadow-[0_10px_15px_-3px_rgba(255,255,255,0.4),0_4px_6px_-4px_rgba(255,255,255,0.2)] rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-full md:w-11/12">
              <div className="relative h-20 w-20 mx-auto mb-7 mt-5">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                  onError={(e) =>
                    console.error(`Failed to load image: ${card.imageSrc}`, e)
                  }
                />
              </div>
              <div className="p-4 mb-7">
                <h2 className="text-xl font-semibold text-white text-center">
                  {card.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoCarousel;
