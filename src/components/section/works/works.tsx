import * as vanilla from "./works.css";
import React from "react";
import { useRef } from "react";

const Works = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>WORKS</div>
    </section>
  );
});

export default Works;
