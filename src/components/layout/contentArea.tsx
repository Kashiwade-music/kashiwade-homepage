import * as React from "react";
import * as vanilla from "./contentArea.css";

type Props = {
  children: React.ReactNode;
};
const ContentArea: React.FC<Props> = ({ children }) => {
  return (
    <div className={vanilla.Outer}>
      <div className={vanilla.ContentAreaCSS}>{children}</div>
    </div>
  );
};

export default ContentArea;
