import React from "react";
import { motion } from "framer-motion";
import { automationProjects, toolColors } from "../../constants";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";

const AutomationProjects = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Automation Solutions</p>
        <h2 className={styles.sectionHeadText}>Automation Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify break-all"
      >
        Automation solutions and business workflows built with <span className="font-bold text-orange-600">n8n</span>, designed for effectiveness, reliability, and productivity.
      </motion.p>
      <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {automationProjects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition group cursor-pointer"
            onClick={() => navigate(`/automation/${proj.id}`)}
            style={{ position: "relative" }}
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.name + ' workflow'}
                className="rounded-xl w-full h-36 object-cover mb-2 border border-gray-200 group-hover:scale-105 transition"
                style={{ background: "#f3f3f3" }}
              />
            )}
            <div>
              <h3 className="font-bold text-xl text-orange-600 mb-2 group-hover:underline">{proj.name}</h3>
              <div className="text-gray-700 mb-1 text-sm min-h-[64px]">{proj.description}</div>
              <div className="flex flex-wrap gap-1 my-2">
                {proj.tools.map((t) => (
                  <span key={t} className="rounded px-2 py-1 text-xs mr-1 font-semibold" style={{
                    background: toolColors[t] || '#f3f3f3',
                    color: '#222',
                  }}>{t}</span>
                ))}
              </div>
              <div className="text-xs text-gray-500 italic mb-2">Type: {proj.type}</div>
              <div className="text-sm text-lime-800">
                <b>Impact:</b> {proj.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AutomationProjects, "automation");
