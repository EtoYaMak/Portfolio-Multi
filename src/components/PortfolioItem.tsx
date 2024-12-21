import React from "react";
import { motion } from "framer-motion";

interface PortfolioItemProps {
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-jersey mb-2 uppercase">{title}</h2>
      <div className="w-12 h-0.5 bg-[#2b2b2b] mb-4"></div>
      <p className="text-base font-jersey text-justify leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default PortfolioItem;
