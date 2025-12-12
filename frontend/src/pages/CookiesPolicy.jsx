import React from "react";
import { motion } from "framer-motion";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-16 px-4" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Cookies Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Danka uses cookies for various purposes to enhance your experience on our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off</li>
                <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously</li>
                <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to deliver relevant advertisements and track campaign effectiveness</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                3. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">
                    Session Cookies
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    These are temporary cookies that are deleted when you close your browser. They help us remember your preferences during your visit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">
                    Persistent Cookies
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party cookies are governed by the respective privacy policies of those third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                5. Managing Cookies
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                You can manage cookies through your browser settings. Each browser is different, so check the "Help" menu of your browser to learn how to change your cookie preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-700 font-body leading-relaxed mt-2">
                Email: info@dankachaat.com<br />
                Phone: +91 788 788 2300<br />
                Address: Office No. 506, Sterling Center Opposite Arora Tower, MG Road, Camp Pune, Maharashtra 411001
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;

