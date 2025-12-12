import React from "react";
import { motion } from "framer-motion";

const DataProcessing = () => {
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
            Data Processing Policy
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
                1. Data Controller
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Danka is the data controller responsible for the processing of your personal data. We are committed to processing your personal data in accordance with applicable data protection laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                2. Legal Basis for Processing
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li><strong>Consent:</strong> When you have given clear consent for us to process your personal data for specific purposes</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract or to take steps at your request before entering into a contract</li>
                <li><strong>Legal Obligation:</strong> When processing is necessary for compliance with a legal obligation</li>
                <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate interests or those of a third party</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                3. Data Processing Activities
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We process personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li>Processing franchise applications and inquiries</li>
                <li>Managing customer relationships and communications</li>
                <li>Providing and improving our services</li>
                <li>Marketing and promotional activities (with your consent)</li>
                <li>Compliance with legal obligations</li>
                <li>Website analytics and improvement</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                4. Data Retention
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. When determining the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm, and the purposes for which we process it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                5. Data Sharing and Transfers
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li>Service providers who assist us in operating our business</li>
                <li>Business partners and affiliates</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Third parties in connection with a business transfer</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                When we transfer data internationally, we ensure appropriate safeguards are in place to protect your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Under applicable data protection laws, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body space-y-2 ml-4">
                <li><strong>Right of Access:</strong> You can request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> You can request limitation of how we process your data</li>
                <li><strong>Right to Data Portability:</strong> You can request transfer of your data to another service provider</li>
                <li><strong>Right to Object:</strong> You can object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time where processing is based on consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                7. Data Security
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security assessments, and staff training.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                8. Automated Decision Making
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We do not use automated decision-making processes, including profiling, that produce legal effects concerning you or similarly significantly affect you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about our data processing practices or wish to exercise your rights, please contact us at:
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

export default DataProcessing;

