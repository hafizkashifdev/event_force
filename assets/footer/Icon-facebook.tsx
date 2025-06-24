import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconFacebook(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.3691 12.5607C22.3691 7.004 17.8925 2.5 12.3691 2.5C6.84581 2.5 2.36914 7.004 2.36914 12.5607C2.36914 17.5833 6.02514 21.7453 10.8065 22.5V15.4693H8.26781V12.56H10.8065V10.344C10.8065 7.82267 12.2991 6.42933 14.5838 6.42933C15.6771 6.42933 16.8225 6.626 16.8225 6.626V9.102H15.5605C14.3185 9.102 13.9318 9.878 13.9318 10.674V12.5607H16.7051L16.2618 15.4687H13.9318V22.5C18.7131 21.7453 22.3691 17.5833 22.3691 12.5607Z"
          fill="#3E3E3E"
        />
      </svg>
    </SvgIcon>
  );
}

export default IconFacebook;
