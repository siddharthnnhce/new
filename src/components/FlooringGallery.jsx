import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Direct image imports for flooring
import flooring1 from "../images/flooring/flooring-1.jpg";
import flooring2 from "../images/flooring/flooring-2.jpg";
import flooring3 from "../images/flooring/flooring-3.jpg";
import flooring4 from "../images/flooring/flooring-4.jpg";
import flooring5 from "../images/flooring/flooring-5.jpg";
import flooring6 from "../images/flooring/flooring-6.jpg";
import flooring7 from "../images/flooring/flooring-7.jpg";
import flooring8 from "../images/flooring/flooring-8.jpg";      

const FlooringGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const flooringImages = [
    { 
      src: flooring1, 
      alt: "Reclaimed wood flooring", 
      caption: "Teak Elegance",
      description: "Custom-designed reclaimed teak wood flooring for a 700 SFT living room, featuring a 75mm x 10mm random-pattern parquet layout. Finished with a high-abrasion-resistant matte coating to ensure durability against daily wear and tear, while preserving the natural elegance of solid teak.",
      features: ["Durable hardwood", "Eco-friendly", "Aged character"]
    },
    { 
      src: flooring2, 
      alt: "Rustic flooring", 
      caption: "Cinematic Calm",
      description: "Premium Burmese teak wood parquet flooring in a random pattern, tailored for a 400 SFT home theatre. Sized at 50mm x 10mm, the layout is finished with a matte top coat to minimize glare and enhance cinematic ambiance, blending acoustic comfort with timeless elegance.",
      features: ["Multiple wood species", "Unique patterns", "Durable finish", "Eco-friendly"]
    },
    { 
      src: flooring3, 
      alt: "Office Endurance", 
      caption: "Character-Filled Boards",
      description: "Fully customized reclaimed teak wood flooring for a 1000 SFT commercial office space, crafted in 62mm x 18mm planks. Engineered for high foot traffic, the surface is sealed with a water-based polyurethane lacquer in a matte finish, offering tough wear resistance and long-term durability without compromising on natural warmth.",
      features: ["Natural knots", "Unique grain patterns", "Rich coloration",]
    },
    { 
      src: flooring4, 
      alt: "Dining Elegance", 
      caption: "Wide Reclaimed Teak",
      description: "Exquisite chevron-pattern Burmese teak wood flooring for a 200 SFT dining area, crafted in standard 50mm x 10mm dimensions. The intricate layout enhances spatial rhythm and visual sophistication, making every meal setting feel refined and timeless",
      features: ["Premium teak wood", "Water resistant", "Wide planks", "Natural oil finish"]
    },
    { 
      src: flooring5, 
      alt: "- Temple Tones", 
      caption: "- Spiritual Ground",
      description: "Gracefully crafted Burmese teak wood flooring for a 200 SFT Pooja room, laid in standard 50mm x 10mm dimensions. Designed to elevate the spiritual ambiance, the surface is finished with a wear-resistant matte coating that softens light reflections and preserves the sanctity of the space.",
      features: ["Premium teak wood", "Water resistant", "Wide planks", "Natural oil finish"]
    },
    { 
      src: flooring6, 
      alt: "Wide plank flooring", 
      caption: "- Teak Harmony",
      description: "Double herringbone-pattern Burmese teak wood flooring for a spacious 450 SFT master bedroom. Crafted for visual depth and architectural rhythm, the layout is sealed with a matte-finish, low-VOC, water-based polyurethane lacquer—offering both aesthetic serenity and eco-conscious durability.",
      features: ["Premium teak wood", "Water resistant", "Wide planks", "Natural oil finish"]
    },
    { 
      src: flooring7, 
      alt: "Wide plank flooring", 
      caption: "- Living Grain",
      description: "Custom-crafted reclaimed teak wood parquet flooring for a 350 SFT living space, sized at 75mm x 10mm. Finished with a dead matte, wear-resistant polyurethane coating, this flooring blends timeless texture with modern durability—ideal for high-use residential environments seeking understated elegance.",
      features: ["Premium teak wood", "Water resistant", "Wide planks", "Natural oil finish"]
    },
    { 
      src: flooring8, 
      alt: "Wide plank flooring", 
      caption: "- Eco Play",
      description: "Custom-designed teak wood flooring for a 300 SFT children’s play area, laid in standard 50mm x 10mm dimensions. Finished with a VOC-free, water-based semi-gloss coating that enhances visual warmth while ensuring a safe, low-emission environment ideal for active, imaginative play.",
      features: ["Premium teak wood", "Water resistant", "Wide planks", "Natural oil finish"]
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
        {flooringImages.map((img, imageIndex) => (
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
                  src={flooringImages[selectedImageIndex].src}
                  alt={flooringImages[selectedImageIndex].alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-[#3a2708] mb-2">
                    {flooringImages[selectedImageIndex].caption}
                  </h2>
                  <div className="h-0.5 w-12 bg-[#c9b178] mb-4"></div>
                  
                  <p className="text-gray-700 mb-4">
                    {flooringImages[selectedImageIndex].description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#3a2708] mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {flooringImages[selectedImageIndex].features.map((feature, index) => (
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

export default FlooringGallery;