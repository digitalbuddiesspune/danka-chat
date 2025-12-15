import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-20 px-4" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                By accessing and using the Danka website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Danka's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on Danka's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                3. Franchise Information
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                All franchise information provided on this website is for informational purposes only. Franchise opportunities are subject to availability and approval by Danka. We reserve the right to modify, suspend, or discontinue any franchise program at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                4. Disclaimer
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                The materials on Danka's website are provided on an 'as is' basis. Danka makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                5. Limitations
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                In no event shall Danka or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Danka's website, even if Danka or a Danka authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                6. Revisions and Errata
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                The materials appearing on Danka's website could include technical, typographical, or photographic errors. Danka does not warrant that any of the materials on its website are accurate, complete, or current. Danka may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                7. Contact Information
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;

