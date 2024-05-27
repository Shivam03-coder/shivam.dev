import React from "react";
import { motion } from "framer-motion";
import MYProfile from "../assets/Images/Image.png";
import { Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import SocoalMediaHandles from "../components/Layout/SocoalMediaHandles";
import { Link } from "react-scroll";

function HomePage({ setSelectedPage }) {
  return (
    <>
      <section
        className="LandingPage pb-10 md:pt-20 flex items-center justify-center "
        id="home"
      >
        <section className="flex justify-between max-lg:text-center  items-center h-full gap-16 ">
          {/* IMAGE SECTION */}
          <motion.div
            className="grid lg:grid-cols-2 gap-7 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="my-auto max-lg::order-2">
              <Typography variant="h3" className="tracking-wider ">
                <Typewriter
                  className="font-semibold text-black "
                  words={[
                    " Developer",
                    " Designer",
                    " Photographer",
                    " Thinker",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  cursorColor="white"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </Typography>
              <p className=" max-lg:hidden mt-6 font-normal text-2xl ">
                I am a{" "}
                <span className="text-[#b8ff97] font-semibold ">
                  FULL STACK DEVELOPER
                </span>{" "}
                . My primary goal is to create functional and visually appealing
                websites that meet the needs of clients and users. I have a
                strong understanding of MERN technologies.
                <span className="text-[#fb3eeb] font-bold "></span>
                which allows me to build full stack responsive and interactive
                websites.
              </p>
              <div className="buttons py-5  space-x-5 mx-auto mt-10">
                <Link
                  className="rounded-[8px] cursor-pointer shadow-3xl font-bold py-2 px-4 bg-[#c5fdac] text-black "
                  onClick={() => setSelectedPage("contact")}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  CONTACT ME
                </Link>
                <a href="https://drive.google.com/file/d/1zIlQqXyiMF6YDBp-5toU4cUHoOavk_W1/view?usp=sharing" className="rounded-[8px] cursor-pointer shadow-3xl font-bold py-2 px-4 bg-[#c5fdac] text-black ">
                  RESUME
                </a>
              </div>
              <div className="icons max-lg:hidden mx-auto mt-10">
                <SocoalMediaHandles />
              </div>
            </div>
            <div className="Image">
              <img
                className=" z-10 py-auto max-lg:shadow-none rounded-full shadow-3xl w-80 hover:filter 
              transition-all duration-500
              grayscale-[17] hover:grayscale-[0] mx-auto"
                src={MYProfile}
                alt=""
                id="MyProfilePhoto"
              />
              <div className="icons lg:hidden text-center mx-auto mt-20">
                <SocoalMediaHandles />
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
