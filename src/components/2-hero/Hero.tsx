import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { motion } from "framer-motion";
import devAnimation from "../../animation/dev.json";
import "./hero.css";

const Hero: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>();

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me2.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer , and Full Stack Developer
        </motion.h1>

        <p className="sub-title">
          I’m Ahmad Alhariri, a software engineer interested in Web Development and Game Development
        </p>

        <div className="all-icons flex">
          <a className="icon icon-github" href="https://github.com/AhmadAlhariri013" target="_blank"/>
          <a className="icon icon-linkedin"  href="https://linkedin.com/in/ahmad-alhariri-593193291" target="_blank"/>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5);
            }
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
