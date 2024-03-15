import * as vanilla from "./foreground.css";
import FrameLeftBottom from "./frameLeftBottom";
import FrameLeftTop from "./frameLeftUp";
import FrameRightBottom from "./frameRightBottom";
import FrameRightTop from "./frameRightTop";
import * as React from "react";

const Foreground = React.memo(() => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Foreground> Rendered\u001b[0m`);
  }, []);

  return (
    <>
      <div className={vanilla.FrameLeftTopPositioner}>
        <FrameLeftTop />
      </div>
      <div className={vanilla.FrameRightBottomPositioner}>
        <FrameRightBottom />
      </div>
      <div className={vanilla.FrameLeftBottomPositioner}>
        <FrameLeftBottom />
      </div>
      <div className={vanilla.FrameRightTopPositioner}>
        <FrameRightTop />
      </div>
    </>
  );
});

export default Foreground;
