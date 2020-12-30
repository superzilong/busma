import React from "react";
import "./avatar.css";
// import avatarPic from "./avatar.jpg"

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <div
    className="avatar"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <img
      src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg"
      alt="avatar"
      style={{ objectFit: "cover", cursor: "pointer" }}
      className="rounded-circle"
    />
  </div>
));

export default CustomToggle;
