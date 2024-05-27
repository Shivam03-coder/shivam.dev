import { Drawer, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Drawers({ selectedPage, setSelectedPage }) {
  const [IsDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div className="lg:hidden ">
      <Drawer
        anchor="left"
        open={IsDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        role="presentation"
      >
        <div
          id="DrawerBar"
          className="w-72 flex flex-col text-2xl 
         bg-black h-full text-[#b8ff97]  space-y-9 text-center pt-11"
          style={{
            fontFamily: "Nova Flat",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Nova Flat",
            }}
            variant="h3"
            component={"div"}
            id="H3NavBAr"
          >
            PORTFOLIO
          </Typography>
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
      </Drawer>
      <MenuIcon
        fontSize="large"
        className="text-[#b8ff97]"
        onClick={() => setIsDrawerOpen(true)}
      />
    </div>
  );
}

export default Drawers;
