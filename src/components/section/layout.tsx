import * as vanilla from "./layout.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = React.forwardRef<HTMLElement, LayoutProps>(
  (props: LayoutProps, ref) => {
    const [windowWidth, setWindowWidth] = React.useState(0);

    React.useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    let sectionLeftPosition = windowWidth * 0.15;
    if (sectionLeftPosition < 115) {
      sectionLeftPosition = 115;
    } else if (sectionLeftPosition > 300) {
      sectionLeftPosition = 300;
    }
    let sectionWrapWidth = windowWidth - sectionLeftPosition;

    return (
      <section
        className={vanilla.SectionWrapper}
        style={assignInlineVars({
          [vanilla.sectionLeftPosition]: `${sectionLeftPosition}px`,
          [vanilla.sectionWrapWidth]: `${sectionWrapWidth}px`,
        })}
        ref={ref}
      >
        <div className={vanilla.SectionMain}>{props.children}</div>
      </section>
    );
  }
);

export default Layout;
