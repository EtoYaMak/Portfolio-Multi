import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="newspaper-container">
        <div className="newspaper-border">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-jersey text-center mb-8">
              Correspondence Details
            </h2>

            <div className="space-y-8 font-jersey">
              <div className="text-center mb-8">
                <p className="text-lg">
                  For Professional Inquiries & Opportunities
                </p>
                <div className="border-b-2 border-[#2b2b2b] w-24 mx-auto my-4"></div>
              </div>

              <div className="grid gap-6">
                <div className="border-2 border-[#2b2b2b] p-6">
                  <h3 className="text-2xl mb-4">Direct Contact</h3>
                  <p className="mb-2 ">Email: your.email@example.com</p>
                  <p>Location: Your City, Country</p>
                </div>

                <div className="border-2 border-[#2b2b2b] p-6">
                  <h3 className="text-2xl mb-4">Professional Networks</h3>
                  <ul className="space-y-2">
                    <li>LinkedIn: /in/your-profile</li>
                    <li>GitHub: /your-username</li>
                    <li>Portfolio: www.yourportfolio.com</li>
                  </ul>
                </div>

                <div className="border-2 border-[#2b2b2b] p-6">
                  <h3 className="text-2xl mb-4">Availability</h3>
                  <p className="text-justify">
                    Open to discussing new opportunities and collaborations.
                    Feel free to reach out for project inquiries or professional
                    networking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
