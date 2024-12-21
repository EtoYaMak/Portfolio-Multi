import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import "./index.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="page-stack w-full h-full">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Header />
        </div>
        <main className="flex-1 relative w-full max-w-5xl mx-auto px-4 py-4 min-h-[calc(100vh-200px)]">
          <AnimatePresence mode="wait">
            <AnimatedRoutes />
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};

export default App;
