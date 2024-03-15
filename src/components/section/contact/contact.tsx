import Layout from "../layout";
import * as vanilla from "./contact.css";
import React from "react";
import { useRef } from "react";

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Contact> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>Contact</Layout>;
});

export default Contact;
