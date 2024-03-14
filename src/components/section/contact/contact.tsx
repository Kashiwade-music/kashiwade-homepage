import * as vanilla from "./contact.css";
import React from "react";
import { useRef } from "react";

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>CONTACT</div>
    </section>
  );
});

export default Contact;
