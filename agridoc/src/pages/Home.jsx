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

const images = [agri2, agri3, agri1, agri5, agri6, agri7, agri8, agri9, agri10, agri11, agri12,agri13,agri14,agri15,agri16];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentGradient = gradients[currentImage % gradients.length];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePredict = () => {
    if (!file || !prompt) {
      alert("Please upload an image and enter a prompt.");
      return;
    }

    // You can later send file + prompt to your backend here
    console.log("Image:", file);
    console.log("Prompt:", prompt);
    alert("Prediction in progress...");
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="text-center z-10 px-4 pb-4">
        <h1
          className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${currentGradient} text-transparent bg-clip-text mb-10 drop-shadow-2xl`}
          style={{ lineHeight: "1.3" }}
        >
          Welcome to AgriDoc AI
        </h1>

        {/* Upload & Prompt Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-xl mx-auto">
          <h2 className="text-white text-lg font-semibold mb-4">
            Upload an Image for Diagnosis
          </h2>

          {/* File Input */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full mb-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/30 file:text-white hover:file:bg-white/50 transition duration-300"
          />

          <p className="text-white text-sm mb-2 opacity-80">
            Supported formats: JPG, PNG. Max size: 5MB.
          </p>

          {/* Prompt Text Input */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the issue (e.g., yellow spots on leaves)..."
            className="w-full p-3 rounded-lg text-sm bg-white/10 text-white placeholder-white/60 border border-white/20 mb-4"
            rows={3}
          />

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-2 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Predict
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
