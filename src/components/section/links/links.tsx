import * as vanilla from "./links.css";
import React from "react";
import { useRef } from "react";

const Links = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>LINKS</div>
    </section>
  );
});

export default Links;
