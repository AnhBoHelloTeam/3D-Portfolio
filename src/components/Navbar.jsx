import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
// ĐÃ XOÁ HOÀN TOÀN fullstack.pdf

const CV_FILENAME = "NguyenThanhNhan_Fullstack_3DPortfolio.pdf";
const CV_PATH = "/" + CV_FILENAME;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCvDownload = () => {
    setActive("Download CV");
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = CV_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCv = () => {
    setActive("View CV Online");
    navigate("/cv");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            NhanNG &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => {
            if (nav.dropdown) {
              return (
                <li
                  key={nav.id}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div
                    className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-1`}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {dropdownOpen && (
                    <div 
                      className="absolute top-full left-0 pt-1 w-48 z-30"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="bg-[#1a1a2e] rounded-xl shadow-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden">
                        {nav.dropdown.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block px-4 py-3 text-secondary hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors text-[16px]"
                            onClick={() => {
                              setActive(item.title);
                              setDropdownOpen(false);
                            }}
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            }
            return (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={nav.url || `#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
          <li
            className={`${active === "View CV Online" ? "text-yellow-300" : "text-secondary"} hover:text-yellow-400 text-[18px] font-bold cursor-pointer transition`}
            style={{border: '1px solid #fcd34d', borderRadius: 6, padding: "0 12px", margin: '0 4px'}}
            onClick={handleViewCv}
          >
            View CV Online
          </li>
          <li
            className={`${active === "Download CV" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={handleCvDownload}
          >
            Download CV
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => {
                if (nav.dropdown) {
                  return (
                    <li key={nav.id} className="w-full">
                      <div className={`font-poppins font-medium text-[16px] ${active === nav.title ? "text-white" : "text-secondary"} mb-2`}>
                        {nav.title}
                      </div>
                      <ul className="ml-4 flex flex-col gap-2">
                        {nav.dropdown.map((item) => (
                          <li
                            key={item.id}
                            className={`font-poppins font-medium cursor-pointer text-[14px] ${active === item.title ? "text-white" : "text-secondary"}`}
                            onClick={() => {
                              setToggle(!toggle);
                              setActive(item.title);
                            }}
                          >
                            <a href={`#${item.id}`}>• {item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={nav.url || `#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "View CV Online" ? "text-yellow-300" : "text-secondary"}`}
                style={{border: '1px solid #fcd34d', borderRadius: 6, padding: "0 12px", margin: '0 4px'}}
                onClick={() => {
                  setToggle(false);
                  handleViewCv();
                }}
              >
                View CV Online
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Download CV" ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setToggle(false);
                  handleCvDownload();
                }}
              >
                Download CV
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;