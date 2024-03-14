import * as vanilla from "./top.css";
import React from "react";
import { useRef } from "react";

const Top = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>TOP PAGE</div>
    </section>
  );
});

export default Top;
