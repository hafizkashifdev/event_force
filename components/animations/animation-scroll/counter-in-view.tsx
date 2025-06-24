"use client";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";

export const CounterInView = (props: any) => {
  const { countEnd = 100, duration = ANIMATIONS_BASE_DURATION?.COUNTER } =
    props;
  const count = useMotionValue(0);
  const [latestCount, setLatestCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, countEnd, {
        duration,
        onUpdate: (latest) => setLatestCount(Math.round(latest)),
      });

      return () => controls.stop();
    }
  }, [isInView, countEnd, duration]);

  return <motion.span ref={ref}>{latestCount}</motion.span>;
};
