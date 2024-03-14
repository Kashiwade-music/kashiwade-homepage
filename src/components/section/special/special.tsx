import * as vanilla from "./special.css";
import React from "react";
import { useRef } from "react";

const Special = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>SPECIAL</div>
    </section>
  );
});

export default Special;
