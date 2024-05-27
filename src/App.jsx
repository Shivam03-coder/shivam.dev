import "./App.css";
import React, { useEffect, useState } from "react";
import { Toolbar } from "@mui/material";
import Navbars from "./components/Layout/Navbars";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillPage from "./Pages/SkillPage";
import HomePage from "./Pages/HomePage";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App space-y-8 ">
      <Navbars
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Toolbar />
      <div className="h-full w-5/6 mx-auto">
        <HomePage setSelectedPage={setSelectedPage} />
      </div>

      <div className="w-5/6  mx-auto md:h-full ">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <SkillPage />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <ProjectsPage />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <ContactPage />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
