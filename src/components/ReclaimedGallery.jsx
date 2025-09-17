import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlooringGallery from "./FlooringGallery";
import StaircaseGallery from "./StaircaseGallery";
import CladdingGallery from "./CladdingGallery";
import ReclaimedTeakwoodGallery from "./ReclaimedTeakwoodGallery";

const galleryData = [
  {
    title: "Flooring",
    description: "Transform your space with our exquisite reclaimed wood flooring, each piece telling a story of history and craftsmanship.",
    component: FlooringGallery,
    images: [] // You'll need to add image data here for the modal
  },
  {
    title: "Staircase",
    description: "Make a statement with our custom-crafted reclaimed wood staircases, blending functionality with timeless beauty.",
    component: StaircaseGallery,
    images: [] // You'll need to add image data here for the modal
  },
  {
    title: "Cladding",
    description: "Elevate your building's exterior with our premium reclaimed wood cladding, offering durability and unique character.",
    component: CladdingGallery,
    images: [] // You'll need to add image data here for the modal
  },
  {
    title: "Reclaimed Teakwood",
    description: "Experience the luxury of reclaimed teakwood, perfect for bespoke furniture and architectural details that exude elegance.",
    component: ReclaimedTeakwoodGallery,
    images: []
  }
  // Add 
  // more categories as neede
];

const ReclaimedGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(0);

  const openModal = (sectionIndex, imageIndex) => {
    setSelectedImage({ sectionIndex, imageIndex });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleCategoryChange = (index) => {
    setDirection(index > activeCategory ? 1 : -1);
    setActiveCategory(index);
  };

  // Get the current gallery component
  const CurrentGalleryComponent = galleryData[activeCategory].component;

  return (
    <section className="bg-gradient-to-b from-[#1a1003] to-[#2a1a05] py-24 px-6 text-[#e6dcc5]">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-serif mb-6 text-[#f5ebd9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Applications of Reclaimed Wood
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-[#c9b178] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover the timeless beauty and sustainable elegance of our reclaimed wood collections, meticulously crafted for discerning homeowners.
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 border-b border-[#5d4b34]">
          {galleryData.map((section, index) => (
            <button
              key={index}
              className={`px-8 py-4 font-serif text-lg transition-all duration-300 relative ${
                activeCategory === index 
                  ? "text-[#e6d5a8]" 
                  : "text-[#9c8c63] hover:text-[#e6d5a8]"
              }`}
              onClick={() => handleCategoryChange(index)}
            >
              {section.title}
              {activeCategory === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9b178]"
                  layoutId="activeCategory"
                />
              )}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <motion.p 
          className="text-center text-[#c9b178] mb-12 max-w-4xl mx-auto text-lg italic"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {galleryData[activeCategory].description}
        </motion.p>

        {/* Render the current gallery component */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeCategory}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentGalleryComponent openModal={openModal} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-gradient-to-br from-[#2a1a05] to-[#3a2708] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#5d4b34] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={galleryData[selectedImage.sectionIndex].images[selectedImage.imageIndex].src}
                  alt={galleryData[selectedImage.sectionIndex].images[selectedImage.imageIndex].alt}
                  className="w-full h-72 md:h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-[#c9b178] hover:text-[#2a1a05] transition-all duration-300"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[#c9b178] text-sm uppercase tracking-widest">
                      {galleryData[selectedImage.sectionIndex].title}
                    </span>
                    <h3 className="text-3xl font-serif text-[#f5ebd9] mt-1">
                      {galleryData[selectedImage.sectionIndex].images[selectedImage.imageIndex].caption}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-0.5 bg-[#c9b178] mb-2 ml-auto"></div>
                    <span className="text-[#c9b178] text-sm">Premium Collection</span>
                  </div>
                </div>
                
                <p className="text-[#e6dcc5] mb-8 text-lg leading-relaxed">
                  {galleryData[selectedImage.sectionIndex].images[selectedImage.imageIndex].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-[#c9b178] font-serif text-xl mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {galleryData[selectedImage.sectionIndex].images[selectedImage.imageIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#c9b178] rounded-full mr-3"></div>
                        <span className="text-[#e6dcc5]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-[#5d4b34]">
                  <span className="text-[#c9b178] italic">Crafted with excellence</span>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-[#c9b178] text-[#2a1a05] font-medium rounded-full hover:bg-[#e6d5a8] transition-colors duration-300 flex items-center"
                  >
                    Close Details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReclaimedGallery;