import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // EmailJS credentials - replace with your actual IDs
  const SERVICE_ID = "service_ovhjm0d";
  const TEMPLATE_ID = "template_vs4j3bx";
  const PUBLIC_KEY = "tHbUnPkRA-9DYDN3r";

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if EmailJS credentials are available
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      showNotification('error', 'Configuration error. Please try again later.');
      return;
    }
    
    // Prepare template parameters according to your EmailJS template structure
    const templateParams = {
      title: "New Contact Form Submission",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email // This ensures replies go to the user's email
    };

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        // Show success message to user
        showNotification('success', 'Message sent successfully! We will get back to you soon.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        // Show error message to user
        showNotification('error', 'Failed to send message. Please try again or contact us directly.');
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-[#2a1a05] flex items-center justify-center p-8 py-16 relative">
      {/* Notification Toast */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
            notification.type === 'success' 
              ? 'bg-green-600 text-white' 
              : 'bg-red-600 text-white'
          }`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {notification.type === 'success' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                {notification.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setNotification({ show: false, type: '', message: '' })}
                className="inline-flex rounded-md p-1.5 hover:bg-opacity-25 focus:outline-none"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}

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
                    <p className="text-[#c9b178]">Sy NO 3/5, Venkateshapura village, Yalahanka hobli, Jakkur Post, Banglore-560064</p>
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
                    <p className="text-[#c9b178]">+91 9886656271</p>
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
                    <p className="text-[#c9b178]">msbros@hotmail.co.in</p>
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
                <a 
                  href="https://maps.app.goo.gl/Lu84synEwu7kjNqp6?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#3a2708] hover:bg-[#4a3718] text-[#c9b178] hover:text-[#e6dcc5] px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Open in Google Maps
                </a>
                <p className="text-sm opacity-75 mt-2">Sy NO 3/5, Venkateshapura village, Yalahanka hobli, Jakkur Post, Banglore-560064</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;