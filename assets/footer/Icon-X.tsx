import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconX(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width={22}
        height={21}
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2270_6952)">
          <path
            d="M10.8691 0C5.07035 0 0.369141 4.70121 0.369141 10.5C0.369141 16.2988 5.07035 21 10.8691 21C16.6679 21 21.3691 16.2988 21.3691 10.5C21.3691 4.70121 16.6679 0 10.8691 0Z"
            fill="#3E3E3E"
          />
          <path
            d="M12.0179 9.5492L16.5128 4.32422H15.4476L11.5447 8.86101L8.42743 4.32422H4.83203L9.54594 11.1846L4.83203 16.6638H5.89725L10.0189 11.8728L13.3109 16.6638H16.9063L12.0176 9.5492H12.0179ZM6.28105 5.1261H7.91715L15.4481 15.8984H13.812L6.28105 5.1261Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2270_6952">
            <rect
              width={21}
              height={21}
              fill="white"
              transform="translate(0.369141)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default IconX;
