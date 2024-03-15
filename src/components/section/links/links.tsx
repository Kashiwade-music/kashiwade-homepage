import Layout from "../layout";
import * as vanilla from "./links.css";
import React from "react";
import { useRef } from "react";

const Links = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Links> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>Links</Layout>;
});

export default Links;
