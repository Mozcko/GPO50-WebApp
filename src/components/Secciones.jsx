import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { secciones } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

const Card = ({ index, title, logo, color }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${color} max-w-sm rounded-lg shadow`}
      >
        <Link className="relative"
        to={`/${title}`}>
          <img
            src={logo}
            alt={title}
            className="p-1 w-full h-[400px]"
          />
        </Link>
      </Tilt>
    </motion.div>
  );
};

export function Secciones() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='mx-auto relative z-0'
    >
      <div className="mt-10 flex flex-wrap justify-center gap-5 sm:gap-32">
        {secciones.map((seccion, index) => (
          <Card key={seccion.title} index={index} {...seccion} />
        ))}
      </div>
    </motion.section>
  );
}
