import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { clientWebProjects, clientQRProjects } from "../../constants";

const ClientProjects = () => {
  const [activeTab, setActiveTab] = useState("webapp");
  const [visibleMockups, setVisibleMockups] = useState([]);

  useEffect(() => {
    // Scroll reveal animation for mockups
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-project");
            if (!visibleMockups.includes(projectId)) {
              setVisibleMockups((prev) => [...prev, projectId]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".fanned-mockup").forEach((mockup) => {
      observer.observe(mockup);
    });

    return () => observer.disconnect();
  }, [activeTab, visibleMockups]);

  // Debug: Log when tab changes
  useEffect(() => {
    console.log("Active tab:", activeTab);
    console.log("QR Projects count:", clientQRProjects?.length);
  }, [activeTab]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Web Services</p>
        <h2 className={styles.sectionHeadText}>Commercial Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify break-all"
      >
        Websites, apps and solutions that have helped customers succeed. See who we've partnered with and what we've done.
      </motion.p>

      {/* Tabs Navigation */}
      <div className="flex justify-center gap-4 my-12 flex-wrap">
        <button
          onClick={() => setActiveTab("webapp")}
          className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            activeTab === "webapp"
              ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg"
              : "bg-[rgba(255,255,255,0.1)] text-secondary border-2 border-[rgba(255,255,255,0.2)]"
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="text-xl">🌐</span>
            <span>Web & App</span>
          </span>
        </button>
        <button
          onClick={() => setActiveTab("qr")}
          className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            activeTab === "qr"
              ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg"
              : "bg-[rgba(255,255,255,0.1)] text-secondary border-2 border-[rgba(255,255,255,0.2)]"
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="text-xl">📲</span>
            <span>QR Landing</span>
          </span>
        </button>
      </div>

      {/* Web & App Content */}
      {activeTab === "webapp" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {/* Header with count */}
          <div className="text-center mb-12">
            <div className="flex items-baseline justify-center gap-3 flex-wrap">
              <div className="text-[96px] font-black bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#667eea] bg-clip-text text-transparent leading-none">
                4+
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white mb-1">
                  Plus WEBSITE DESIGN PROJECTS
                </div>
                <div className="text-lg text-[#e2e8f0]">
                  ACROSS ALL INDUSTRIES OF VLUX
                </div>
              </div>
            </div>
          </div>

          {/* Fanned Mockups Container */}
          <div className="relative py-10 overflow-hidden w-screen -ml-[calc(50vw-50%)]">
            <div className="flex justify-center items-center gap-4 px-4 md:px-12 flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none">
              {clientWebProjects.map((project, index) => {
                const width = project.id === "soho-nails" || project.id === "restaurant-booking" ? "380px" : "350px";
                return (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-project={project.id}
                  className={`fanned-mockup relative flex-shrink-0 transition-all duration-800 snap-center ${
                    visibleMockups.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                  style={{ zIndex: project.zIndex || 1, width }}
                >
                  <div
                    className="bg-[#1a1a1a] rounded-2xl p-3 transition-all duration-300 hover:shadow-2xl"
                    style={{
                      boxShadow: project.shadow,
                      transform: project.transform,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 50px 120px rgba(79, 172, 254, 0.6), 0 0 60px rgba(102, 126, 234, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = project.shadow;
                    }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden">
                      {/* Browser Bar */}
                      <div className="bg-[#f1f5f9] px-3.5 py-2.5 flex items-center gap-1.5 border-b border-[#e2e8f0]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-2.5 py-1 mx-2.5 text-[11px] text-[#64748b] text-center border border-[#e2e8f0]">
                          {project.domain}
                        </div>
                      </div>
                      {/* Screenshot */}
                      <div
                        className="relative overflow-hidden bg-white screenshot-container"
                        style={{ height: `${project.height}px` }}
                      >
                        <img
                          src={project.image}
                          alt={`${project.name} Website`}
                          className="w-full h-auto object-cover website-screenshot"
                          style={{ transform: "translateY(0)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.animation = "scrollUp 10s ease-in-out forwards";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.animation = "none";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* QR Landing Content */}
      {activeTab === "qr" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 w-full relative"
          style={{ zIndex: 1 }}
        >
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-[#4facfe] mb-3 uppercase tracking-wider">
              QR LANDING SERVICE
            </div>
            <h3 className="text-5xl font-extrabold mb-5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Professional QR Landing
            </h3>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              QR landing solutions for doctors, salons and businesses. Scan QR to display information, book appointments, get directions. Mobile-first optimized.
            </p>
          </div>

          <div className="space-y-10 w-full max-w-7xl mx-auto px-4">
            {clientQRProjects && clientQRProjects.length > 0 ? (
              clientQRProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                initial="hidden"
                animate="show"
                className="block bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(79,172,254,0.35)] border-2 border-blue-400 w-full"
                style={{ 
                  minHeight: "300px",
                  display: "block",
                  opacity: 1,
                  visibility: "visible",
                  position: "relative",
                  zIndex: 10
                }}
              >
                  <div className={`grid ${project.layout === "single" ? "grid-cols-1 md:grid-cols-[1fr_1.3fr]" : project.layout === "double" ? "grid-cols-1 md:grid-cols-[1fr_1.5fr]" : "grid-cols-1 md:grid-cols-2"} gap-0 items-center`}>
                  {/* Content Side */}
                  <div className="p-12">
                    <div className="text-xs font-bold text-[#4facfe] mb-4 uppercase tracking-wider">
                      QR Landing
                    </div>
                    <h4 className="text-4xl font-extrabold mb-6 text-[#0f172a]">
                      {project.name}
                    </h4>
                    <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all hover:shadow-xl">
                      View QR Landing →
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="p-10 bg-gradient-to-br from-[rgba(79,172,254,0.05)] to-[rgba(0,242,254,0.05)]">
                    {project.layout === "single" ? (
                      <div className="w-full max-w-[500px] mx-auto bg-white rounded-2xl p-8 shadow-xl">
                        <img
                          src={project.images[0]}
                          alt={`${project.name} QR Card`}
                          className="w-full rounded-2xl"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-[0.6fr_1fr] gap-6">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl">
                            <img
                              src={img}
                              alt={`${project.name} QR Card ${idx + 1}`}
                              className="w-full rounded-2xl"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.a>
              ))
            ) : (
              <div className="text-center py-20 text-secondary">
                <p>No QR Landing projects available.</p>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span>Order QR Landing</span>
              <span className="text-xl transition-transform hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      )}

      <style>{`
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% + 600px));
          }
        }
        .website-screenshot {
          will-change: transform;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .fanned-mockup {
            min-width: 90vw !important;
            width: 90vw !important;
          }
          .fanned-mockup > div {
            transform: perspective(1200px) rotateY(0deg) translateZ(0) !important;
          }
          .fanned-mockup .screenshot-container {
            max-height: 400px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(ClientProjects, "client-projects");

