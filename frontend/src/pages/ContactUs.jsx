import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [collaborationForm, setCollaborationForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [collaborationSubmitted, setCollaborationSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedbackForm);
    setFeedbackSubmitted(true);
    setFeedbackForm({ name: "", email: "", message: "" });
    setTimeout(() => setFeedbackSubmitted(false), 5000);
  };

  const handleCollaborationSubmit = (e) => {
    e.preventDefault();
    console.log("Collaboration submitted:", collaborationForm);
    setCollaborationSubmitted(true);
    setCollaborationForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setCollaborationSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white py-12 sm:py-16 md:py-20 px-4 bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dtaitsw4r/image/upload/v1765268458/PaniPuri2_s9ybzu.jpg')`,
        }}
      >
        {/* Dark overlay with blur for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 px-2 drop-shadow-2xl"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}
          >
            We'd Love to Hear From You!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-body mb-3 sm:mb-4 max-w-3xl mx-auto px-2 drop-shadow-lg"
            style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          >
            Whether you want to own a Danka franchise, collaborate, or just
            share your love for chaat — our team is always happy to connect.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-body max-w-2xl mx-auto px-2 drop-shadow-lg"
            style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          >
            Let's start something exciting together — because every great
            business begins with a great conversation!
          </motion.p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">
              Get in Touch
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-orange-500 mx-auto mb-8"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 sm:mb-6 text-gray-800">
                Head Office:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-orange-500 text-white rounded-full p-2 sm:p-3 flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold font-body text-sm sm:text-base">
                      Phone:
                    </p>
                    <a
                      href="tel:+917887882300"
                      className="text-orange-600 hover:text-orange-700 text-base sm:text-lg font-semibold font-body break-all"
                    >
                      +91 788 788 2300
                    </a>
                    <span className="border-l border-2 border-orange-500 mx-4"></span>
                    <a
                      href="tel:+916262488809"
                      className="text-orange-600 hover:text-orange-700 text-base sm:text-lg font-semibold font-body break-all"
                    >
                      +91 626 248 8809
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-orange-500 text-white rounded-full p-2 sm:p-3 flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold font-body text-sm sm:text-base">
                      Email:
                    </p>
                    <a
                      href="mailto:info@dankachaat.com"
                      className="text-orange-600 hover:text-orange-700 text-base sm:text-lg font-semibold font-body break-all"
                    >
                      info@dankachaat.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-orange-500 text-white rounded-full p-2 sm:p-3 flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold font-body text-sm sm:text-base">
                      Address:
                    </p>
                    <p  className="text-orange-600 hover:text-orange-700 text-base sm:text-lg font-semibold font-body break-all">Office No. 506, Sterling Center Opposite Arora Tower, MG Road,Camp Pune, Maharashtra 411001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Franchise Enquiries Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading mb-4 text-gray-800">
                Franchise Enquiries
              </h2>
              <p className="text-lg font-body text-gray-700 mb-6">
                Dreaming of owning your own Danka outlet?
              </p>
              <p className="text-gray-600 font-body mb-8">
                Fill out our{" "}
                <Link
                  to="/#inquiry"
                  className="text-orange-600 hover:text-orange-700 font-semibold font-body underline"
                >
                  Franchise Enquiry Form
                </Link>{" "}
                and our team will get back to you within 48 hours.
              </p>
              <Link
                to="/#inquiry"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading mb-4 text-gray-800">
                Customer Feedback
              </h2>
              <p className="text-lg font-body text-gray-700 mb-6">
                We love hearing from our fans!
              </p>
              <p className="text-gray-600 font-body mb-8">
                Got feedback, suggestions, or just want to tell us how much you
                loved your panipuri? Drop us a message — we read every one.
              </p>

              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                {feedbackSubmitted && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold font-body">
                        Thank you for your feedback! We appreciate it.
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="feedbackName"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="feedbackName"
                    value={feedbackForm.name}
                    onChange={(e) =>
                      setFeedbackForm({ ...feedbackForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedbackEmail"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="feedbackEmail"
                    value={feedbackForm.email}
                    onChange={(e) =>
                      setFeedbackForm({
                        ...feedbackForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedbackMessage"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="feedbackMessage"
                    value={feedbackForm.message}
                    onChange={(e) =>
                      setFeedbackForm({
                        ...feedbackForm,
                        message: e.target.value,
                      })
                    }
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Share your thoughts, feedback, or suggestions..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations & Partnerships Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading mb-4 text-gray-800">
                Collaborations & Partnerships
              </h2>
              <p className="text-lg font-body text-gray-700 mb-6">
                Looking to collaborate with Danka for events, catering, or brand
                partnerships? Let's create something flavourful together!
              </p>

              <form onSubmit={handleCollaborationSubmit} className="space-y-6">
                {collaborationSubmitted && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold font-body">
                        Thank you! We'll get back to you soon.
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="collabName"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="collabName"
                    value={collaborationForm.name}
                    onChange={(e) =>
                      setCollaborationForm({
                        ...collaborationForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="collabEmail"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="collabEmail"
                    value={collaborationForm.email}
                    onChange={(e) =>
                      setCollaborationForm({
                        ...collaborationForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="collabCompany"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Company/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="collabCompany"
                    value={collaborationForm.company}
                    onChange={(e) =>
                      setCollaborationForm({
                        ...collaborationForm,
                        company: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="collabMessage"
                    className="block text-sm font-semibold font-body text-gray-700 mb-2"
                  >
                    Tell Us About Your Collaboration Idea
                  </label>
                  <textarea
                    id="collabMessage"
                    value={collaborationForm.message}
                    onChange={(e) =>
                      setCollaborationForm({
                        ...collaborationForm,
                        message: e.target.value,
                      })
                    }
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Describe your collaboration proposal..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Online Section */}
      <section className="py-16 px-4 text-white" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">Connect With Us Online</h2>
            <p className="text-xl font-body mb-8 max-w-2xl mx-auto">
              Stay updated on new outlets, offers, and all things Danka:
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.instagram.com/danka_panipuri?igsh=MWEzZmpyYXRtMGNiMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2b] bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2b]  bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2b] bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2b] bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
