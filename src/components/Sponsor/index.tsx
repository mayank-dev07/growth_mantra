"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const cards = [
  { imageSrc: "/assets/Client_Logo/Bank_of_Baroda.png" },
  { imageSrc: "/assets/Client_Logo/DailyHunt.png" },
  { imageSrc: "/assets/Client_Logo/EDreams_logo.png" },
  { imageSrc: "/assets/Client_Logo/GameBerry.png" },
  { imageSrc: "/assets/Client_Logo/Gyan_dairy.png" },
  { imageSrc: "/assets/Client_Logo/ICICI.png" },
  { imageSrc: "/assets/Client_Logo/Jio.png" },
  { imageSrc: "/assets/Client_Logo/Lybrate.png" },
  { imageSrc: "/assets/Client_Logo/MayaData.png" },
  { imageSrc: "/assets/Client_Logo/Paytm.png" },
  { imageSrc: "/assets/Client_Logo/PC_Jewellers.png" },
  { imageSrc: "/assets/Client_Logo/SBI.png" },
  { imageSrc: "/assets/Client_Logo/Vardhman-Pharma_logo.png" },
];

export default function Sponsor() {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const totalWidth = container.scrollWidth / 2;
      controls.start({
        x: [-0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: cards.length * 3,
            ease: "linear",
          },
        },
      });
    }
  }, [controls]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none z-10"></div>

      <motion.div
        className="flex"
        animate={controls}
        ref={carouselRef}
        style={{ display: "flex", whiteSpace: "wrap" }}
      >
        {cards.concat(cards).map((card, index) => (
          <div key={index} className="w-full flex px-12">
            <div className="shadow-[0_10px_15px_-3px_rgba(255,255,255,0.4),0_4px_6px_-4px_rgba(255,255,255,0.2)] rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-fit">
              <div className="relative h-20 w-20 mx-auto mb-7 mt-5">
                <Image
                  src={card.imageSrc}
                  alt="sponsor"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg "
                  onError={(e) =>
                    console.error(`Failed to load image: ${card.imageSrc}`, e)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
