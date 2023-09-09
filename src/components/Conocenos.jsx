import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Carrousel } from "./carrousel";
import { Carousel } from 'flowbite-react'

export function Conocenos() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto relative z-0"
    >
      <motion.div variants={textVariant()} className="mx-10">
        <p className={styles.sectionHeadText}>¿Quienes somos?</p>
      </motion.div>

      <div>
        <motion.div variants={slideIn("up", "tween", 0, 0.5)} className="">
          <p className={styles.sectionSubText}>
            Somos un grupo Scout fundado en 2001...
          </p>
        </motion.div>

        <motion.div variants={slideIn("up", "tween", 0, 0.5)} className="">
          <Carrousel />
        </motion.div>
      </div>
    </motion.section>
  );
}
