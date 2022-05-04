import * as React from "react";
import * as vanilla from "../styles/profile.css";
import Layout from "../components/layout";
import MediaQuery from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import { Slide } from "react-slideshow-image";

const ProfilePage = () => {
  const prof = {
    firstPosition: [
      {
        name: "Description",
        spec: (
          <span>
            主にオーケストラ(サウンドトラック・Epic)の曲を作っている人です。
            <br />
            壮大さを売りとしてコツコツ曲を作っています。
          </span>
        ),
      },
      {
        name: "Hobby",
        spec: (
          <span>
            耳コピ・ピアノ
            <br />
            原神・ブルーアーカイブ
          </span>
        ),
      },
      {
        name: "About Icon",
        spec: (
          <span>
            アイコンは
            <a href="https://twitter.com/_sironora_">sironoraさん</a>
            に描いて頂いたものです！すんごいかわいい。
            <br />
            ロゴっぽい方は昔自分で作ったものです。リニューアルしたいな～。
          </span>
        ),
      },
    ],
    secondPosition: [
      {
        name: "Favorite Plugins",
        spec: (
          <span>
            <ul className={vanilla.UlContent}>
              <li>Spitfire Chamber Strings</li>
              <li>Heavyocity Damage 2</li>
              <li>Heavyocity Gravity</li>
              <li>Liquidsonics Cinematic Rooms Professional</li>
            </ul>
          </span>
        ),
      },
      {
        name: "This Web page",
        spec: <span>GatsbyJS(React / Typescript)・Vanilla-Extract</span>,
      },
    ],
  };
  return (
    <Layout
      pageUrl={"/profile"}
      pageTitle={"Profile"}
      pageDescription={"自己紹介です"}
      currentPage={"profile"}
    >
      <h1 className={vanilla.CenterH1}>カシワデ / Kashiwade</h1>
      <div>
        <MediaQuery query="(min-width: 1050px)">
          <div className={vanilla.ProfileContainer}>
            <Slide easing="ease">
              <div className="each-slide">
                <StaticImage
                  src="../images/kashiwade_sironora_normal_trim8-9.png"
                  height={400}
                  quality={100}
                  layout="fullWidth"
                  alt=""
                />
              </div>
              <div className="each-slide">
                <StaticImage
                  src="../images/kashiwade_logo.png"
                  quality={100}
                  height={400}
                  layout="fullWidth"
                  alt=""
                />
              </div>
            </Slide>

            <div className={vanilla.DetailsContainer}>
              <div>
                <div className={vanilla.ItemName}>
                  {prof.firstPosition[0].name}
                </div>
                <div className={vanilla.ItemSpec}>
                  {prof.firstPosition[0].spec}
                </div>
              </div>
              <div>
                <div className={vanilla.ItemName}>
                  {prof.firstPosition[1].name}
                </div>
                <div className={vanilla.ItemSpec}>
                  {prof.firstPosition[1].spec}
                </div>
              </div>
              <div>
                <div className={vanilla.ItemName}>
                  {prof.firstPosition[2].name}
                </div>
                <div className={vanilla.ItemSpec}>
                  {prof.firstPosition[2].spec}
                </div>
              </div>
              <div>
                <div className={vanilla.ItemName}>
                  {prof.secondPosition[0].name}
                </div>
                <div className={vanilla.ItemSpec}>
                  {prof.secondPosition[0].spec}
                </div>
              </div>
              <div>
                <div className={vanilla.ItemName}>
                  {prof.secondPosition[1].name}
                </div>
                <div className={vanilla.ItemSpec}>
                  {prof.secondPosition[1].spec}
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1051px)">
          <div className={vanilla.ProfileContainerMini}>
            <Slide easing="ease">
              <div className="each-slide">
                <StaticImage
                  src="../images/kashiwade_sironora_normal_trim8-9.png"
                  height={400}
                  quality={100}
                  layout="fullWidth"
                  alt=""
                />
              </div>
              <div className="each-slide">
                <StaticImage
                  src="../images/kashiwade_logo.png"
                  quality={100}
                  height={400}
                  layout="fullWidth"
                  alt=""
                />
              </div>
            </Slide>

            <div>
              <div className={vanilla.ItemName}>
                {prof.firstPosition[0].name}
              </div>
              <div className={vanilla.ItemSpec}>
                {prof.firstPosition[0].spec}
              </div>
              <div className={vanilla.ItemName}>
                {prof.firstPosition[1].name}
              </div>
              <div className={vanilla.ItemSpec}>
                {prof.firstPosition[1].spec}
              </div>
              <div className={vanilla.ItemName}>
                {prof.firstPosition[2].name}
              </div>
              <div className={vanilla.ItemSpec}>
                {prof.firstPosition[2].spec}
              </div>
            </div>
          </div>
          <div className={vanilla.ItemName}>{prof.secondPosition[0].name}</div>
          <div className={vanilla.ItemSpec}>{prof.secondPosition[0].spec}</div>

          <div className={vanilla.ItemName}>{prof.secondPosition[1].name}</div>
          <div className={vanilla.ItemSpec}>{prof.secondPosition[1].spec}</div>
        </MediaQuery>
      </div>
    </Layout>
  );
};

export default ProfilePage;
