import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Drawers from "./Drawer";
import { Link } from "react-scroll";

function   Navbars({ selectedPage, setSelectedPage }) {

  return (
    <>
      <AppBar  className="Appbar mb-10 absolute">
        <Toolbar
          id="Navbar" 
          className="bg-transparent backdrop-blur-lg shadow-2xl flex flex-1"
        >
          <Typography
            sx={{
              fontFamily: "Nova Flat",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
            variant="h3"
            component={"div"}
            id="Navbar"
          >
            PORTFOLIO
          </Typography>

          <div
            className="flex  max-lg:hidden text-2xl justify-center items-center  space-x-14 "
            style={{
              fontFamily: "Nova Flat",
            }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="linkclass"

              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={() => setSelectedPage("home")}
            >
              HOME
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              className="linkclass"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={() => setSelectedPage("skills")}
            >
              SKILLS
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              className="linkclass"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={() => setSelectedPage("projects")}
            >
              PROJECTS
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="linkclass"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={() => setSelectedPage("contacts")}
            >
              CONTACT-ME
            </Link>
          </div>
          <Drawers
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Navbars;
