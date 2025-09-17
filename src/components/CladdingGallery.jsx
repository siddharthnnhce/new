import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Direct image imports for cladding
import cladding1 from "../images/cladding/cladding-1.jpg";
import cladding2 from "../images/cladding/cladding-2.jpg";
import cladding3 from "../images/cladding/cladding-3.jpg";

const CladdingGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const claddingImages = [
    { 
      src: cladding1, 
      alt: "Reclaimed wood cladding", 
      caption: "Living Texture",
      description: "Custom reclaimed teak wood exterior cladding for a premium 600 SFT bungalow, engineered to withstand Bangalore’s diverse climatic conditions. Sourced from reclaimed timber, each panel showcases striking variations in color, grain, and species—offering a naturally eye-catching façade. Fully customizable in size and pattern to meet demanding site-specific architectural requirements.",
      features: ["Weather-resistant", "Natural aging", "Unique patterns", "Easy installation"]
    },
    { 
      src: cladding2, 
      alt: "Rustic wood cladding", 
      caption: "Architectural Flow",
      description: "Custom reclaimed teak wood exterior cladding designed to flow seamlessly from wall to soffit, aligning with the architect’s creative vision for a premium Bangalore bungalow. Covering approximately 500 SFT, the 90mm x 100mm panels are mounted on a batten-backed grid system. Each piece showcases striking variations in color, grain, and species—offering a visually rich and timeless façade that celebrates reclaimed beauty.",
      features: ["Aged finish", "Character marks", "Durable surface", "Low maintenance"]
    },
    { 
      src: cladding3, 
      alt: "Modern wood cladding", 
      caption: "Architectural Soul",
      description: "A stunning bungalow fully adorned with reclaimed teak wood—from the main door to every household element—creating a unified, warm, and timeless aesthetic. The pitched roof is clad in rare 90mm x 5mm reclaimed teak panels, covering 2000 SFT and showcasing the material’s unmatched flexibility and character. Complementing this, 1000 SFT of reclaimed teak flooring spans rooms, bridges, and staircases in a 50mm x 10mm random pattern, reinforcing the home’s cohesive design language and artisanal charm.",
      features: ["Modern design", "Precision cut", "Uniform finish", "Architectural grade"]
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
        {claddingImages.map((img, imageIndex) => (
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
                  src={claddingImages[selectedImageIndex].src}
                  alt={claddingImages[selectedImageIndex].alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-[#3a2708] mb-2">
                    {claddingImages[selectedImageIndex].caption}
                  </h2>
                  <div className="h-0.5 w-12 bg-[#c9b178] mb-4"></div>
                  
                  <p className="text-gray-700 mb-4">
                    {claddingImages[selectedImageIndex].description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#3a2708] mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {claddingImages[selectedImageIndex].features.map((feature, index) => (
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

export default CladdingGallery;