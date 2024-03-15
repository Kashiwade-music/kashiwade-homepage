import Layout from "../layout";
import * as vanilla from "./contact.css";
import React from "react";
import { useRef } from "react";

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>Contact</Layout>;
});

export default Contact;
