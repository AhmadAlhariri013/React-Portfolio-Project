import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import { myProjects } from "./myProjects";


interface Project {
  imgPath: string;
  projectTitle: string;
  category: string[];
}





const Main: React.FC = () => {

  const [currentActive, setcurrentActive] = useState<string>("all");
  const [arr, setArr] = useState<Project[]>(myProjects);

  const handleClick = (buttonCategory: string) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );

    setArr(newArr);
  };

  return (
    <main id="projects" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : undefined}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : undefined}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : undefined}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : undefined}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : undefined}
        >
          Node & Express
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
