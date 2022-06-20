import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as vanilla from "./indexHeaderSmartPhone.css";

const IndexHeaderSmartPhone = () => {
  return (
    <header>
      <div className={vanilla.Header}>
        <div className={vanilla.Campus}>
          <div className={vanilla.HeaderImage1}>
            <StaticImage
              src="../../images/kashiwade_sironora_normal_closeMouth_alphaChannel_sp.png"
              layout="fixed"
              placeholder="none"
              quality={100}
              alt=""
              width={550}
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
export default IndexHeaderSmartPhone;
