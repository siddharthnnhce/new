import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen bg-[#2a1a05] flex items-center justify-center p-8 py-16">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#e6dcc5] mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#c9b178] mx-auto mb-6"></div>
          <p className="text-lg text-[#c9b178] max-w-2xl mx-auto">
            Ready to bring the timeless beauty of reclaimed teakwood to your space? 
            Contact us for consultations, quotes, and expert advice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-[#e6dcc5] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#3a2708] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#c9b178]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#e6dcc5]">Address</h4>
                    <p className="text-[#c9b178]">123 Woodcraft Avenue</p>
                    <p className="text-[#c9b178]">Bengaluru, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3a2708] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#c9b178]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#e6dcc5]">Phone</h4>
                    <p className="text-[#c9b178]">+91 98765 43210</p>
                    <p className="text-[#c9b178]">+91 91234 56789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3a2708] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#c9b178]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#e6dcc5]">Email</h4>
                    <p className="text-[#c9b178]">info@greenwoods.com</p>
                    <p className="text-[#c9b178]">sales@greenwoods.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3a2708] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#c9b178]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#e6dcc5]">Business Hours</h4>
                    <p className="text-[#c9b178]">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#c9b178]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-serif text-[#e6dcc5] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-[#3a2708] p-3 rounded-full text-[#c9b178] hover:bg-[#4a3718] transition-colors duration-300"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#3a2708] p-8 rounded-lg border border-[#c9b178] border-opacity-20"
          >
            <h3 className="text-2xl font-serif text-[#e6dcc5] mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#e6dcc5] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2a1a05] border border-[#c9b178] border-opacity-30 rounded-lg text-[#e6dcc5] focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#e6dcc5] mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2a1a05] border border-[#c9b178] border-opacity-30 rounded-lg text-[#e6dcc5] focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[#e6dcc5] mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2a1a05] border border-[#c9b178] border-opacity-30 rounded-lg text-[#e6dcc5] focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:border-transparent"
                  placeholder="+91 12345 67890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#e6dcc5] mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2a1a05] border border-[#c9b178] border-opacity-30 rounded-lg text-[#e6dcc5] focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#c9b178] text-[#3a2708] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d9c188] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9b178] focus:ring-opacity-50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-serif text-[#e6dcc5] mb-6 text-center">Find Us</h3>
          <div className="bg-[#3a2708] p-6 rounded-lg border border-[#c9b178] border-opacity-20">
            <div className="aspect-w-16 aspect-h-9 bg-[#2a1a05] rounded flex items-center justify-center">
              <div className="text-center text-[#c9b178] p-8">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg">Interactive map would be displayed here</p>
                <p className="text-sm opacity-75 mt-2">123 Woodcraft Avenue, Bengaluru</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;