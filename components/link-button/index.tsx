"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionButton = motion(Button);


export const LinkButton = (props: any) => {
  const {
    link = "#",
    children,
    primary = true,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    customStyles,
    size = "medium",
    startIcon = undefined,
    endIcon = undefined,
    linkProps = {},
  } = props;

  return (
    <Link href={link} {...linkProps}>
      <MotionButton
        disableElevation
        className="small"
        sx={{
          padding: "1rem 1.5rem",
          borderRadius: 6,
          perspective: "1000px",
          ...customStyles,
        }}
        color={color}
        variant={variant}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </MotionButton>
    </Link>
  );
};
