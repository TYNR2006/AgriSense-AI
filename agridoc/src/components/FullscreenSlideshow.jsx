import React, { useEffect, useState } from "react";

// Add your image imports here
import mountain from "../assets/mountain.png";
import diseased from "../assets/diseased_crop.jpg";
import healthy from "../assets/healthy_crop.png";
import land1 from "../assets/land_type1.png";
import land2 from "../assets/land_type2.png";

const images = [mountain, diseased, healthy, land1, land2];

const BackgroundSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`bg-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
