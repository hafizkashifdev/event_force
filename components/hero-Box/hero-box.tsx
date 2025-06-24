import React from "react";
import { Box } from "@mui/material";
function HeroBox(props: any) {
  const { children, customStyles, px } = props;
  return (
    <Box
      sx={{
        px: px ? px : {xs:0,lg:5},
        ...customStyles,
      }}
    >
      {children}
    </Box>
  );
}

export default HeroBox;
