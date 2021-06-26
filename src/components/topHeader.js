import * as React from "react";
import MediaQuery from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import {
  headWrap,
  header,
  headerSmartphone,
  headerImage1,
  headerImage1Smartphone,
  headerImage2,
  headerImage2IMG,
  topMessageBox,
  topMessageBoxMini,
  topMessageBoxSmartphone,
  passingBar1,
  passingBar2,
  passingBar3,
  passingTxt,
  campus,
  headerDescriptionColumn,
  headerDescription,
} from "./topHeader.module.css";

const TopHeader = () => {
  return (
    <header className={headWrap}>
      <MediaQuery maxWidth={600}>
        <div className={headerSmartphone}>
          <div className={campus}>
            <div className={headerImage1Smartphone}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_closeMouth_alphaChannel_sp.png"
                layout="fixed"
                placeholder="none"
                quality={100}
                alt=""
                width={550}
              />
            </div>
            <div></div>
            <div className={topMessageBoxSmartphone}>
              <div className={passingBar1}>
                <div className={passingBar2}>
                  <div className={passingBar3}>
                    <div className={passingTxt}>Kashiwade.work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>ようこそ！</div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={601} maxWidth={850}>
        <div className={header}>
          <div className={campus}>
            <div className={headerImage1}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                placeholder="none"
                quality={100}
                alt=""
              />
            </div>
            <div className={headerImage2}>
              <StaticImage
                src="../images/kashiwade_sironora_smile_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                className={headerImage2IMG}
                placeholder="none"
                quality={100}
                alt=""
              />
            </div>
            <div className={topMessageBoxMini}>
              <div className={passingBar1}>
                <div className={passingBar2}>
                  <div className={passingBar3}>
                    <div className={passingTxt}>Kashiwade.work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>ようこそ！</div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={851}>
        <div className={header}>
          <div className={campus}>
            <div className={headerImage1}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                placeholder="none"
                quality={100}
                alt=""
              />
            </div>
            <div className={headerImage2}>
              <StaticImage
                src="../images/kashiwade_sironora_smile_closeMouth_alphaChannel_trimmed.png"
                layout="fixed"
                className={headerImage2IMG}
                placeholder="none"
                quality={100}
                alt=""
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
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>ようこそ！</div>
        </div>
      </MediaQuery>
    </header>
  );
};
export default TopHeader;
