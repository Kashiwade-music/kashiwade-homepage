import * as React from "react";
import MediaQuery from "react-responsive";
import "react-modern-drawer/dist/index.css";
import { StaticImage } from "gatsby-plugin-image";
import {
  header,
  headerSmartphone,
  headerTitle,
  headerImage1,
  headerImage1IMG,
  headerImage2,
  headerImage2IMG,
  topMessageBox,
  passingBox,
  passingBar1,
  passingBar2,
  passingBar3,
  passingTxt,
  campus,
  headerTitleBottomLine,
  headerDescriptionColumn,
  headerDescription,
} from "./topHeader.module.css";

const TopHeader = () => {
  let headerTitleBottomLineSVG;

  return (
    <header>
      <MediaQuery query="(min-width: 850px)">
        <div className={header}>
          <div className={campus}>
            <div className={headerImage1}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                placeholder="none"
                quality={100}
              />
            </div>
            <div className={headerImage2}>
              <StaticImage
                src="../images/kashiwade_sironora_smile_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                className={headerImage2IMG}
                placeholder="none"
                quality={100}
              />
            </div>
            <div className={topMessageBox}>
              <div className={passingBar1}>
                <div className={passingBar2}>
                  <div className={passingBar3}>
                    <div className={passingTxt}>Kashiwade.work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={headerTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} />
          </div>
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>hoge</div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 850px)">
        <div className={header}>
          <div className={campus}>
            <div className={headerImage1}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                placeholder="none"
                quality={100}
              />
            </div>
            <div className={headerImage2}>
              <StaticImage
                src="../images/kashiwade_sironora_smile_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                className={headerImage2IMG}
                placeholder="none"
                quality={100}
              />
            </div>
            <div className={topMessageBox}>
              <div className={passingBar1}>
                <div className={passingBar2}>
                  <div className={passingBar3}>
                    <div className={passingTxt}>Kashiwade.work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={headerTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} />
          </div>
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>hoge</div>
        </div>
      </MediaQuery>
    </header>
  );
};
export default TopHeader;
