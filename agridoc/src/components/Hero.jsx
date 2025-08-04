import React, { useEffect, useState } from "react";

import agri2 from "../assets/agri-2.png";
import agri3 from "../assets/agri-3.png";
import agri1 from "../assets/agri-1.png";
import agri5 from "../assets/agri-5.png";
import agri6 from "../assets/agri-6.png";
import agri7 from "../assets/agri-7.png";
import agri8 from "../assets/agri-8.png";
import agri9 from "../assets/agri-9.png";
import agri10 from "../assets/agri-10.png";
import agri11 from "../assets/agri-11.png";
import agri12 from "../assets/agri-12.png";
import agri13 from "../assets/agri-13.png";
import agri14 from "../assets/agri-14.png";
import agri15 from "../assets/agri-15.png";
import agri16 from "../assets/agri-16.png";

const gradients = [
  "from-green-400 via-yellow-400 to-blue-500",
  "from-orange-400 via-red-400 to-yellow-500",
  "from-blue-400 via-green-300 to-teal-500",
  "from-red-400 via-pink-500 to-purple-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-teal-400 via-cyan-500 to-blue-600",
  "from-purple-400 via-fuchsia-500 to-pink-500",
];
const images = [ agri2, agri3, agri1, agri5,agri6,agri7,agri8,agri9,agri10,agri11, agri12,agri13,agri14,agri15,agri16];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can send the file to backend here
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0">
      {/* Rotating Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Centered Text + Browse Button */}
      <div className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Welcome to AgriDoc AI
        </h1>

        <label className="text-5xl font-extrabold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-green-400 via-yellow-400 via-red-400 to-blue-500">
          Upload The Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default Hero;
