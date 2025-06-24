"use client";

import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";
import { motion } from "framer-motion";

const SlideSidewayInView = (props: any) => {
  const {
    children,
    initialOpacity = 0,
    initialX = -50,
    duration = ANIMATIONS_BASE_DURATION?.SIDE_WAYS,
  } = props;

  return (
    <motion.div
      initial={{ opacity: initialOpacity, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideSidewayInView;
