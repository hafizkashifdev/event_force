"use client";

import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideUpInView = (props: any) => {
  const {
    children,
    initialOpacity = 0,
    initialY = 50,
    duration = ANIMATIONS_BASE_DURATION?.UP_DOWN,
    height = "auto",
  } = props;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      style={{ position: "relative", height }}
      variants={{
        hidden: { opacity: initialOpacity, y: initialY },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpInView;
