"use client";

import RootLayoutMain from "@layouts/main";
import React, { useEffect } from "react";
import AOS from "aos";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "inter",
  },
});

function layout({ children }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <RootLayoutMain>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RootLayoutMain>
  );
}

export default layout;
