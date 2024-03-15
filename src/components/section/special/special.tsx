import Layout from "../layout";
import * as vanilla from "./special.css";
import React from "react";
import { useRef } from "react";

const Special = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>Special</Layout>;
});

export default Special;
