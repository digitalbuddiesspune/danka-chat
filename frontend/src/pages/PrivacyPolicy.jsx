import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Danka ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, postal address, and other contact information you provide when contacting us or applying for a franchise</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages</li>
                <li><strong>Cookies Data:</strong> Cookies and similar tracking technologies to track activity on our website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process franchise applications and inquiries</li>
                <li>To send you newsletters, marketing materials, and other communications</li>
                <li>To respond to your comments, questions, and requests</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4 mt-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer, such as a merger or acquisition</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;

