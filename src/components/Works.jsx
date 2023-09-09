import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, heroku } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  heroku_demo_link,
}) => {
  return (
    <motion.div
      // className="h-[500px]"
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(heroku_demo_link, "_blank")}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center mr-3 items-center cursor-pointer"
              >
                <img
                  src={heroku}
                  alt="heroku"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] ">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] text-left max-w-3xl leading-[30px]"
        >
          The following projects exemplify my skills and experience through
          real-world instances of my work. Each project is succinctly described,
          accompanied by links to corresponding code repositories and live
          demos. These endeavors underscore my adeptness in tackling intricate
          challenges, adeptly navigating diverse technologies, and efficiently
          managing projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
