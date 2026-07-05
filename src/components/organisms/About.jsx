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
        Full-stack developer passionate about 3D web experiences and automation. Skilled in React, Next.js, Node.js/NestJS, Flutter, and Three.js, I specialize in turning ideas into interactive, performant applications.<br></br>
        With hands-on experience building production-ready e-commerce platforms, automation workflows, and modern web applications, I bring a strong focus on clean code, scalable architecture, and exceptional user experiences. Whether it&apos;s crafting immersive 3D interfaces with Three.js or streamlining business processes through intelligent automation, I&apos;m dedicated to delivering solutions that make a real impact.
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
