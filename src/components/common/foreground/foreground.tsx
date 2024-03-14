import * as vanilla from "./foreground.css";
import FrameLeftBottom from "./frameLeftBottom";
import FrameLeftTop from "./frameLeftUp";
import FrameRightBottom from "./frameRightBottom";
import FrameRightTop from "./frameRightTop";
import * as React from "react";

const Foreground: React.FC = () => {
  return (
    <div className={vanilla.ForegroundWrapper}>
      <div className={vanilla.FrameLeftTopPositioner}>
        <div className={vanilla.FrameLeftTopPositionerInner}>
          <FrameLeftTop />
        </div>
      </div>
      <div className={vanilla.FrameRightBottomPositioner}>
        <div className={vanilla.FrameRightBottomPositionerInner}>
          <FrameRightBottom />
        </div>
      </div>
      <div className={vanilla.FrameLeftBottomPositioner}>
        <div className={vanilla.FrameLeftBottomPositionerInner}>
          <FrameLeftBottom />
        </div>
      </div>
      <div className={vanilla.FrameRightTopPositioner}>
        <div className={vanilla.FrameRightTopPositionerInner}>
          <FrameRightTop />
        </div>
      </div>
    </div>
  );
};

export default Foreground;
