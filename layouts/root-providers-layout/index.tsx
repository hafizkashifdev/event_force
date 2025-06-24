"use client";
import { Suspense } from "react";

export default function RootProvidersLayout(props: any) {
  const { children } = props;
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  );
}
