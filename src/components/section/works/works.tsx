import Layout from "../layout";
import * as vanilla from "./works.css";
import React from "react";

const Works = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Works> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>works</Layout>;
});

export default Works;
