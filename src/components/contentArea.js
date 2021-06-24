import * as React from "react";
import { contentAreaCSS, outer } from "./contentArea.module.css";
const ContentArea = ({ children }) => {
  return (
    <div className={outer}>
      <div className={contentAreaCSS}>{children}</div>
    </div>
  );
};

export default ContentArea;
