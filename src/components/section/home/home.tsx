import Layout from "../layout";
import * as vanilla from "./top.css";
import React from "react";
import { useRef } from "react";

const Home = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>HOME</Layout>;
});

export default Home;
