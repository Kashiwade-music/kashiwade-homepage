import Layout from "../layout";
import * as vanilla from "./links.css";
import React from "react";
import { useRef } from "react";

const Links = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>Links</Layout>;
});

export default Links;
