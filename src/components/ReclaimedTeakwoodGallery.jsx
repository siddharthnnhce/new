import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Direct image imports for reclaimed teakwood
import teakwood1 from "../images/reclaimed-teakwood/teakwood-1.jpg";
import teakwood2 from "../images/reclaimed-teakwood/teakwood-2.jpg";
import teakwood3 from "../images/reclaimed-teakwood/teakwood-3.jpg";
import teakwood4 from "../images/reclaimed-teakwood/teakwood-4.jpg";
import teakwood5 from "../images/reclaimed-teakwood/teakwood-5.jpg";
import teakwood6 from "../images/reclaimed-teakwood/teakwood-6.jpg";
import teakwood7 from "../images/reclaimed-teakwood/teakwood-7.jpg";
import teakwood8 from "../images/reclaimed-teakwood/teakwood-8.jpg";
import teakwood9 from "../images/reclaimed-teakwood/teakwood-9.jpg";

const ReclaimedTeakwoodGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const teakwoodImages = [
    { 
      src: teakwood1, 
      alt: "Reclaimed teakwood planks", 
      caption: "Reclaimed. Refined. Remarkable",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Aged 50+ years", "Natural oil content", "Weather resistant", "Unique character"]
    },
    { 
      src: teakwood2, 
      alt: "Reclaimed teakwood texture", 
      caption: "Crafted by Time, Designed for Tomorrow.",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Natural texture", "Weathered finish", "Rich patina", "Durable surface"]
    },
    { 
      src: teakwood3, 
      alt: "Reclaimed teakwood grains", 
      caption: "Nature’s Legacy, Architect’s Vision.",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Unique grain patterns", "Natural variations", "Visual interest", "Artisanal quality"]
    },
    { 
      src: teakwood4, 
      alt: "Reclaimed teakwood finish", 
      caption: "Grain That Tells a Story",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Time-worn patina", "Natural aging", "Character marks", "Historical charm"]
    },
    { 
      src: teakwood5, 
      alt: "Sustainable Beauty in Every Detail.", 
      caption: "Sustainable Beauty in Every Detail.",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Premium grade", "Exceptional durability", "Long-lasting", "Investment quality"]
    },
    { 
      src: teakwood6, 
      alt: "Reclaimed teakwood application", 
      caption: "From Heritage to Home",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Multiple uses", "Indoor/outdoor", "Custom sizes", "Easy installation"]
    },
    { 
      src: teakwood7, 
      alt: "Timber That Transforms Spaces", 
      caption: "Timber That Transforms Spaces",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["Sustainable sourcing", "Eco-friendly", "Reduced waste", "Green building"]
    },
    { 
      src: teakwood8, 
      alt: "Reclaimed teakwood character", 
      caption: "Where Craft Meets Character.",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["One-of-a-kind", "Historical significance", "Storytelling element", "Conversation piece"]
    },
    { 
      src: teakwood9, 
      alt: "Reclaimed teakwood character", 
      caption: "Wood With a Past, Built to Last.",
      description: "We maintain a robust inventory of over 10,000 CFT of reclaimed wood—ready to be transformed into everything from main doors, door frames, shutters, and window systems to flooring, staircases, furniture, and both interior and exterior cladding. Our reclaimed timber is engineered to perform under the most demanding site conditions, including weather-exposed louvers, thinner slices, and large sliding-folding doors or windows. Every piece we craft is fully customized to meet the unique vision of architects and end users alike. Whether it's a bold façade, a sculpted staircase, or a seamless interior flow, our reclaimed wood adapts to any design challenge—delivering timeless beauty, structural integrity, and sustainable craftsmanship. From anything to almost everything in wood, we make imagination tangible.",
      features: ["One-of-a-kind", "Historical significance", "Storytelling element", "Conversation piece"]
    },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teakwoodImages.map((img, imageIndex) => (
          <motion.div
            key={imageIndex}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-[#3a2708] shadow-2xl"
            onClick={() => openModal(imageIndex)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Image Container */}
            <div className="overflow-hidden">
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-xl font-serif text-white mb-2">{img.caption}</h3>
              <div className="h-0.5 w-12 bg-[#c9b178] mb-3"></div>
              <p className="text-[#e6d5a8] text-sm">Click to view details</p>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#c9b178] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#c9b178] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <img
                  src={teakwoodImages[selectedImageIndex].src}
                  alt={teakwoodImages[selectedImageIndex].alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-[#3a2708] mb-2">
                    {teakwoodImages[selectedImageIndex].caption}
                  </h2>
                  <div className="h-0.5 w-12 bg-[#c9b178] mb-4"></div>
                  
                  <p className="text-gray-700 mb-4">
                    {teakwoodImages[selectedImageIndex].description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#3a2708] mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {teakwoodImages[selectedImageIndex].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReclaimedTeakwoodGallery;