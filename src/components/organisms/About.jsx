import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "../molecules/ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] text-justify break-all"
      >
        Full-stack developer passionate about building modern web applications and workflow automation. Skilled in React, Next.js, Node.js/NestJS, and Flutter, I specialize in turning complex ideas into functional, interactive, and high-performance applications.<br></br>
        With hands-on experience building production-ready e-commerce platforms, API integrations, and business automation pipelines (such as n8n), I focus heavily on writing clean, maintainable code and delivering polished user experiences. I enjoy collaborating in team environments to build scalable software solutions that solve real-world problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
