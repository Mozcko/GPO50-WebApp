import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../styles";

function Map() {
  const center = useMemo(() => ({ lat: 19.575931, lng: -99.2278939 }), []);

  return (
    <GoogleMap
      zoom={19}
      center={center}
      mapContainerClassName="w-full h-[500px]"
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export function Encuentranos() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBHllpIeSURNYwaR429WXnp65pVpw2Fd3U",
  });

  if (!isLoaded) {
    return <div>Loading ...</div>;
  }

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto relative z-0"
      id="encuentranos"
    >
      <motion.div variants={textVariant()} className="mx-10 overflow-hidden">
        <p className={styles.sectionHeadText}>¿Donde puedes encontrarnos?</p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="max-w-4xl mx-auto overflow-hidden"
      >
        <Map />
      </motion.div>
    </motion.section>
  );
}
