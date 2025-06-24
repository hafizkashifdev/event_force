import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface AutoCounterProps {
  start: number;
  end: number;
  speed?: number; // in ms (optional)
}

export const AutoCounter = (props: AutoCounterProps) => {
  const { start, end, speed = 100 } = props;
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count >= end) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [count, end, speed]);

  return <Box component="span">{count}</Box>;
};
