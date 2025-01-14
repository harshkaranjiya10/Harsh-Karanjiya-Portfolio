import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DATA } from "../Data/Resume";
import { useState } from "react";

function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // Logic to toggle dark/light mode (you could toggle classes or use context here)
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="fixed bottom-0 w-full py-4 flex justify-center z-10">
      <motion.div
        className="flex items-center justify-between w-full max-w-sm h-14 rounded-full bg-gray-900 bg-opacity-90 cursor-pointer px-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {/* Left Section: Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a
            href={DATA.contact[3].href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
            aria-label="Mail"
          >
            <MailOutlineIcon style={{ color: "white" }} />
          </a>
          <a
            href={DATA.contact[0].href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon style={{ color: "white" }} />
          </a>
          <a
            href={DATA.contact[1].href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={{ color: "white" }} />
          </a>
          <a
            href={DATA.contact[2].href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon style={{ color: "white" }} />
          </a>
          <a
            href={DATA.contact[4].href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
            aria-label="Pinterest"
          >
            <PinterestIcon style={{ color: "white" }} />
          </a>
        </div>

        {/* Right Section: Dark/Light Mode */}
        <div className="flex items-center space-x-3 border-l-2 pl-2">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800 transition duration-300 cursor-pointer"
            aria-label="Dark Mode"
            onClick={toggleMode}
          >
            {darkMode ? (
              <LightModeIcon style={{ color: "white" }} />
            ) : (
              <DarkModeIcon style={{ color: "white" }} />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
