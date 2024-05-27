import React from "react";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SocoalMediaHandles() {
  return (
    <>
      <motion.div className="SocoalMediaHandles space-x-7 ">
        <a
          href="https://instagram.com/_shivam_anand__?igshid=YTQwZjQ0NmI0OA=="
          className="href"
        >
          <InstagramIcon
            fontSize="large"
            id="socialMedia_icons"
            className="text-[#B931FC]  "
          />
        </a>
        <a href="hhttps://twitter.com/ShivamA02580516" className="href">
          <TwitterIcon
            fontSize="large"
            id="socialMedia_icons"
            className="text-[#687EFF]  "
          />
        </a>
        <a href="https://github.com/Shivam03-coder" className="href">
          <GitHubIcon
            fontSize="large"
            id="socialMedia_icons"
            className="text-[#D2E0FB]  "
          />
        </a>
        <a href="https://github.com/Shivam03-coder" className="href">
          <LinkedInIcon
            fontSize="large"
            id="socialMedia_icons"
            className="text-[#46a6ff]  "
          />
        </a>
      </motion.div>
    </>
  );
}

export default SocoalMediaHandles;
