import React, { useEffect, useState } from "react";

const images = [
  { src: "/assets/mountain.png", alt: "Mountain" },
  { src: "/assets/diseased_crop.jpg", alt: "Diseased Crop" },
  { src: "/assets/healthy_crop.png", alt: "Healthy Crop" },
  { src: "/assets/land_type1.png", alt: "Land Type" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-black rounded-xl overflow-hidden shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute w-auto max-h-[400px] object-contain transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
