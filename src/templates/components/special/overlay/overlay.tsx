import * as React from "react";
import * as vanilla from "./overlay.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import KashiwadeLogoRight from "./KashiwadeLogoRight";
import KashiwadeLogoLeft from "./KashiwadeLogoLeft";
import KashiwadeLogoText from "./KashiwadeLogoText";
import * as mytypes from "../types";
import { style } from "@mui/system";

type Props = {
  colors: mytypes.Colors;
  subtitle: string;
};

const Overlay: React.FC<Props> = ({ colors, subtitle }) => {
  console.log(colors);

  const subtitleText = subtitle.split("").join(" ").replace("   ", "　");
  return (
    <div
      className={vanilla.Campus}
      style={assignInlineVars({
        [vanilla.overlay_background]: colors.overlay.background,
      })}
    >
      <div className={vanilla.FullOverlay1}>
        <div style={{ height: "100%" }}>
          <div
            className={vanilla.LeftObi}
            style={assignInlineVars({
              [vanilla.overlay_main]: colors.overlay.main,
            })}
          ></div>
        </div>
        <div className={vanilla.Container}>
          <div className={vanilla.KashiwadeLogo}>
            <div className={vanilla.SVGContainerRight}>
              <KashiwadeLogoRight
                fill={colors.overlay.main}
                style={{ height: "100%" }}
              />
            </div>
            <div className={vanilla.SVGContainerLeft}>
              <KashiwadeLogoLeft
                fill={colors.overlay.main}
                style={{ height: "100%" }}
              />
            </div>
            <div className={vanilla.SVGContainerText}>
              <div className={vanilla.SVGContainerTextInner}>
                <KashiwadeLogoText
                  fill={colors.overlay.main}
                  style={{ height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className={vanilla.SubTitle}>
            <div className={vanilla.SubTitleInner}>{subtitleText}</div>
          </div>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div
            className={vanilla.RightObi}
            style={assignInlineVars({
              [vanilla.overlay_main]: colors.overlay.main,
            })}
          ></div>
        </div>
      </div>
      <div className={vanilla.FullOverlay2}>
        <div
          className={vanilla.Rect1}
          style={assignInlineVars({
            [vanilla.overlay_transition_rect1]: colors.overlay.transition.rect1,
          })}
        ></div>
      </div>
      <div className={vanilla.FullOverlay3}>
        <div
          className={vanilla.Rect2}
          style={assignInlineVars({
            [vanilla.overlay_transition_rect2]: colors.overlay.transition.rect2,
          })}
        ></div>
      </div>
      <div className={vanilla.FullOverlay4}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div
            className={vanilla.TopObi}
            style={assignInlineVars({
              [vanilla.overlay_main]: colors.overlay.main,
            })}
          ></div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className={vanilla.BottomObi}
            style={assignInlineVars({
              [vanilla.overlay_main]: colors.overlay.main,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
