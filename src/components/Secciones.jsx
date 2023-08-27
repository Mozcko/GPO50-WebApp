import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { secciones } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Card = ({ index, title, logo, page }) => {
  return (
    <Tilt>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        test
      </motion.div>
    </Tilt>
  );
};

export function Secciones() {
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-10">
        {secciones.map((seccion, index) => (
          <Card key={seccion.title} index={index} {...seccion} />
        ))}
      </div>
    </>
  );
}


export default SectionWrapper(Secciones, "")