import React from "react";
import { motion } from "framer-motion";
import { SkillsData } from "../Data/SkillsData";

function SkillPage() {
  return (
    <>
      <motion.div
        className="cardItems pb-10 md:py-20 grid md:grid-cols-3 lg:grid-cols-4  mx-auto gap-28 w-11/12"
        id="skills"
      >
        {SkillsData?.map((items) => (
          <div key={items.id} className="SkillCards text-black ">
            <span className="text-center items-center">
              <img src={items.img} alt="" className="mx-auto" />
            </span>
            <h3>{items.name}</h3>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default SkillPage;
