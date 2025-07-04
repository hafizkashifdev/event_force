"use client";
import { Grid } from "@mui/material";
import { ItemGridLayoutPropsI } from "../layouts.interface";

export const ItemGridLayout = (props: ItemGridLayoutPropsI) => {
  const {
    xs = 12,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    customStyles,
    children,
  } = props;

  return (
    <Grid size={{ xs, sm, md, lg, xl }} sx={{ ...customStyles }}>
      {children}
    </Grid>
  );
};
