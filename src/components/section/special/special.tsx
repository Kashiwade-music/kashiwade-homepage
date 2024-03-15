import Layout from "../layout";
import * as vanilla from "./special.css";
import React from "react";
import { useRef } from "react";

const Special = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Special> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>Special</Layout>;
});

export default Special;
