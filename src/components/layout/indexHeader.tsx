import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as vanilla from "./indexHeader.css";

const IndexHeader = () => {
  return (
    <header>
      <div className={vanilla.Header}>
        <div className={vanilla.Campus}>
          <div className={vanilla.HeaderImage1}>
            <StaticImage
              src="../../images/kashiwade_sironora_normal_closeMouth_alphaChannel_trimmed.png"
              layout="fixed"
              placeholder="none"
              quality={100}
              alt=""
            />
          </div>
          <div className={vanilla.HeaderImage2}>
            <StaticImage
              src="../../images/kashiwade_sironora_smile_closeMouth_alphaChannel_trimmed.png"
              layout="fixed"
              className={vanilla.HeaderImage2IMG}
              placeholder="none"
              quality={100}
              alt=""
            />
          </div>
          <div className={vanilla.TopMessageBox}>
            <div className={vanilla.PassingBar1}>
              <div className={vanilla.PassingBar2}>
                <div className={vanilla.PassingBar3}>
                  <div className={vanilla.PassingTxt}>Kashiwade.work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={vanilla.HeaderDescriptionColumn}>
        <div className={vanilla.HeaderDescription}>ようこそ！</div>
      </div>
    </header>
  );
};
export default IndexHeader;
