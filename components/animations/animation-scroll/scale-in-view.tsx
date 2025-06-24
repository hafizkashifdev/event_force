"use client";

import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";
import { motion } from "framer-motion";

const ScaleInView = (props: any) => {
  const {
    children,
    initialOpacity = 0,
    initialScale = 0,
    duration = ANIMATIONS_BASE_DURATION?.SCALE,
  } = props;
  return (
    <motion.div
      initial={{ opacity: initialOpacity, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInView;
