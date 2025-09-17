import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Direct image imports for staircase
import staircase1 from "../images/staircase/staircase-1.jpg";
import staircase2 from "../images/staircase/staircase-2.jpg";
import staircase3 from "../images/staircase/staircase-3.jpg";
import staircase4 from "../images/staircase/staircase-4.jpg";
import staircase5 from "../images/staircase/staircase-5.jpg";
import staircase6 from "../images/staircase/staircase-6.jpg";
import staircase7 from "../images/staircase/staircase-7.jpg";

const StaircaseGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const staircaseImages = [
    { 
      src: staircase1, 
      alt: "Reclaimed wood staircase", 
      caption: "- Everyday Timber",
      description: "Custom-designed solid wood planks with a substantial 32mm thickness, tailored to site-specific conditions and individual client preferences. Engineered for everyday use, the flooring delivers a bold, elegant presence with enduring strength and timeless appeal.",
      features: ["2-inch thickness", "Reinforced structure", "Non-slip surface", "Custom sizes"]
    },
    { 
      src: staircase2, 
      alt: "Rustic staircase", 
      caption: "- Seamless Steps",
      description: "Solid teak wood single planks without joints, crafted at 13 inches depth and 18mm thickness, featuring double nosing for a beautifully contoured front edge. Ideal for stair treads, this design offers seamless elegance, structural integrity, and a refined visual statement.",
      features: ["Handcrafted", "Unique characteristics", "Rustic finish", "Artisanal quality"]
    },
    { 
      src: staircase3, 
      alt: "Vintage staircase", 
      caption: "Warm Edges",
      description: "Custom teak wood handrail designed to complement the refined aesthetic of full-size solid teak planks. Crafted for visual harmony and tactile elegance, it extends the natural warmth and premium finish of the flooring into vertical architectural elements.",
      features: ["Natural patina", "Vintage aesthetic", "Weathered edges", "Historical authenticity"]
    },
    { 
      src: staircase4, 
      alt: "Wooden staircase", 
      caption: "Timeless Craft",
      description: "Custom solid teak wood planks with 18mm thickness, enhanced by double-thick nosing on all three exposed sides to achieve a distinguished vintage aesthetic. Designed for spaces that celebrate timeless craftsmanship and bold architectural detailing.",
      features: ["Sophisticated design", "Sustainable materials", "Rich tones", "Focal point design"]
    },
    { 
      src: staircase5, 
      alt: "Wooden staircase", 
      caption: "Teak Flow",
      description: "Solid teak wood blocks designed to seamlessly continue the flooring aesthetic across stair treads, laid in a 50mm x 10mm random pattern. Each tread features a 15mm stepped nosing on all sides to create a visually thicker, sculpted edge—blending structural elegance with handcrafted detail.",
      features: ["Sophisticated design", "Sustainable materials", "Rich tones", "Focal point design"]
    },
    { 
      src: staircase6, 
      alt: "Wooden staircase", 
      caption: "Architect’s Vision",
      description: "Custom solid wood planks with 40mm thickness and a single joint, engineered to achieve 14-inch depth and 4 feet 6 inches width for stair treads and landings. Designed to fulfill the architect’s vision, this configuration delivers a bold, sculptural presence with seamless continuity and enduring strength.",
      features: ["Sophisticated design", "Sustainable materials", "Rich tones", "Focal point design"]
    },
    { 
      src: staircase7, 
      alt: "Wooden staircase", 
      caption: "Elegant Reclaimed Stairs",
      description: "Our elegant reclaimed wood stairs combine sophisticated design with sustainable materials. The rich tones and grain patterns create a stunning focal point in any entryway.",
      features: ["Sophisticated design", "Sustainable materials", "Rich tones", "Focal point design"]
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
        {staircaseImages.map((img, imageIndex) => (
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
                  src={staircaseImages[selectedImageIndex].src}
                  alt={staircaseImages[selectedImageIndex].alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-[#3a2708] mb-2">
                    {staircaseImages[selectedImageIndex].caption}
                  </h2>
                  <div className="h-0.5 w-12 bg-[#c9b178] mb-4"></div>
                  
                  <p className="text-gray-700 mb-4">
                    {staircaseImages[selectedImageIndex].description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#3a2708] mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {staircaseImages[selectedImageIndex].features.map((feature, index) => (
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

export default StaircaseGallery;