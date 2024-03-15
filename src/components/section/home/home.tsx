import Layout from "../layout";
import * as vanilla from "./top.css";
import React from "react";
import { useRef } from "react";

const Home = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Home> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>HOME</Layout>;
});

export default Home;
