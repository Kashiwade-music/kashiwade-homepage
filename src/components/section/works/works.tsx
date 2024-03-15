import Layout from "../layout";
import * as vanilla from "./works.css";
import React from "react";

const Works = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>works</Layout>;
});

export default Works;
