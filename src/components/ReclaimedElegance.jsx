import React, { useState, useEffect, useRef } from "react";
import ReclaimedGallery from "./ReclaimedGallery";
import Contact from "./Contact"; // Import the Contact component
import { motion, AnimatePresence } from "framer-motion";
import bgImage1 from "../images/hero-bg.jpg";
import bgImage2 from "../images/hero-bg-1.jpg";
import bgImage3 from "../images/hero-bg-2.jpg";
import bgImage4 from "../images/hero-bg-4.jpg";

const ReclaimedElegance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef(null); // Create a ref for the gallery section
  const contactRef = useRef(null); // Create a ref for the contact section
  
  // Array of background images
  const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4];
  
  // Content for each slide
  const slides = [
    {
      title: "What is Reclaimed Teakwood?",
      content: "Reclaimed teakwood is simply put teakwood that has been given a second life. Sourced from historic structures like government offices, schools, railway buildings, and heritage homes, this premium wood comes from naturally fully grown trees, not plantation-based trees like today's alternatives.",
    },
    {
      title: "Why Choose Reclaimed Wood?",
      content: "Reclaimed teakwood retains all the desirable characteristics like high oil content, natural aroma, rich color, and beautiful grains. By repurposing this wood, we preserve our forests and reduce environmental impact, making it a sustainable and socially responsible alternative to new wood.",
    },
    {
      title: "What is Greenwood?",
      content: "Greenwoods is one of Bengaluru's foremost names in reclaimed woods. A trusted name for decades, we offer premium quality processed reclaimed wood for all kinds of household purposes from doors and frames to flooring, cladding, paneling, and interior decoration.",
    },
    {
      title: "Our Craftsmanship",
      content: "We consciously treat and process reclaimed wood by reconstructing damages, filling bolt/nail/screw holes and dents with suitable wood-grade epoxy, and sanding multiple times to achieve seamless uniformity. Our commitment to quality ensures excellence in every product.",
    },
    {
      title: "Environmental Commitment",
      content: "Greenwoods is passionately and honestly dedicated to building a sustainable green environment. By choosing reclaimed wood, you're preserving approximately 50 years of tree growth with each piece, contributing to a greener planet for future generations.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to scroll to gallery
  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to contact
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {bgImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentSlide % bgImages.length ? 1 : 0 
              }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={image}
                alt={`Reclaimed wood texture ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2a1a05]/90 via-[#3a2708]/85 to-[#2a1a05]/90"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(42,26,5,0.6)_100%)]"></div>
              
              {/* Subtle wood grain pattern overlay */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  rgba(139, 69, 19, 0.1),
                  rgba(139, 69, 19, 0.1) 1px,
                  transparent 1px,
                  transparent 4px
                )`,
              }}></div>
            </motion.div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl px-6">
          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-serif tracking-wide text-[#e6dcc5] drop-shadow-lg mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Reclaimed <span className="font-sans font-extrabold text-[#f5f0e6]">Teakwood</span>
          </motion.h1>

          {/* Slideshow Content */}
          <div className="relative h-64 md:h-72">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-2xl md:text-3xl font-serif text-[#e6dcc5] mb-6">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl font-light text-[#e6dcc5] max-w-2xl leading-relaxed">
                  {slides[currentSlide].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-[#c9b178] scale-110" 
                    : "bg-[#c9b178] bg-opacity-40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-[#c9b178] text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-[#c9b178] text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* Scroll Down Indicator - Fixed with proper accessibility */}
        <button
          className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center text-[#c9b178] cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:ring-opacity-50 rounded-lg p-2"
          onClick={scrollToGallery}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToGallery();
            }
          }}
          aria-label="Scroll to gallery section"
        >
          <span className="text-sm uppercase tracking-widest mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-8 rounded-full border border-[#c9b178] border-opacity-50 flex items-center justify-center"
          >
            <span className="text-lg">↓</span>
          </motion.div>
        </button>

        {/* Contact Button - Fixed position */}
        <motion.button
          onClick={scrollToContact}
          className="fixed right-6 top-6 z-50 bg-[#3a2708] hover:bg-[#4a3718] text-[#c9b178] px-6 py-3 rounded-full shadow-lg font-medium transition-all duration-300 border border-[#c9b178] border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:ring-opacity-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Contact us"
        >
          Contact Us
        </motion.button>

        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 opacity-20 text-3xl"></div>
        <div className="absolute bottom-20 right-10 opacity-20 text-3xl"></div>
        <div className="absolute top-1/3 right-1/4 opacity-15 text-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 opacity-15 text-xl"></div>
      </section>

      {/* Gallery Section with ref */}
      <div ref={galleryRef}>
        <ReclaimedGallery />
      </div>

      {/* Contact Section with ref - Using the imported Contact component */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default ReclaimedElegance;