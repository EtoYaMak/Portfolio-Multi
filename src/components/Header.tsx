import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.div
      className="p-4 newspaper-container mx-auto mt-4 max-w-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="newspaper-border text-center font-jersey ">
        <h1 className="text-3xl font-jersey mb-2">Muhammad Abdul Karim</h1>
        <h2 className="text-xl font-jersey">Full Stack Developer</h2>
        <nav className="mt-3">
          <ul className="flex justify-center space-x-8 uppercase text-sm">
            <li>
              <Link to="/" className="hover:underline font-jersey">
                Front Page
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline font-jersey">
                Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline font-jersey">
                Biography
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline font-jersey">
                Correspondence
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
