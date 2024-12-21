import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const depth = getRouteDepth(location.pathname);

  const pageVariants = {
    initial: {
      y: "100%",
      rotateX: 45,
      zIndex: depth,
      transformOrigin: "top",
      boxShadow: "0 -10px 20px rgba(0,0,0,0.2)",
    },
    animate: {
      y: 0,
      rotateX: 0,
      zIndex: depth,
      transformOrigin: "top",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      y: "-100%",
      rotateX: -45,
      zIndex: depth - 1,
      transformOrigin: "bottom",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="absolute inset-0 h-full"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

const getRouteDepth = (pathname: string): number => {
  const routes = ["/", "/projects", "/about", "/contact"];
  const index = routes.indexOf(pathname);
  return (index === -1 ? 1 : index + 1) * 10; // Multiply by 10 for more z-index spacing
};

export default PageTransition;
