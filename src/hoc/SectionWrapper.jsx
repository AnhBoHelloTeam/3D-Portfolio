import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Kiểm tra kích thước màn hình và cập nhật state
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      // Đặt giá trị ban đầu
      setIsMobile(mediaQuery.matches);

      // Xử lý khi kích thước màn hình thay đổi
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Dọn dẹp listener khi component unmount
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.1, // Giảm xuống 5% trên mobile, giữ 10% trên desktop
        }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;