// Step 1: Import React
import * as React from "react";
import HeadMeta from "../components/headMeta";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentArea from "../components/contentArea";
import MediaQuery from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import {
  centerH1,
  profileContainer,
  profileContainerMini,
  detailsContainer,
  details,
  itemName,
  itemSpec,
  ulContent,
} from "../styles/profile.module.css";
import { Slide } from "react-slideshow-image";
// Step 2: Define your component
const IndexPage = () => {
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
            原神・ウマ娘
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
            <ul className={ulContent}>
              <li>EASTWEST Hollywood Orchestra Diamond</li>
              <li>Heavyocity Gravity</li>
              <li>Liquidsonics Cinematic Rooms Professional</li>
              <li>Cableguys ShaperBox 2</li>
            </ul>
          </span>
        ),
      },
      {
        name: "This Web page",
        spec: (
          <span>
            ReactベースのStatic Site
            Generator、GatsbyJSを使って無地から作ってみました。ドキュメントがしっかりしてるので作りやすかったです。
          </span>
        ),
      },
    ],
  };
  return (
    <>
      <HeadMeta
        pageUrl={"/profile"}
        pageTitle={"Profile"}
        pageDescription={"自己紹介です。"}
      />
      <NavBar currentPage="profile" />
      <Header pageTitle="Profile">自己紹介です。</Header>
      <ContentArea>
        <h1 className={centerH1}>カシワデ / Kashiwade</h1>
        <div>
          <MediaQuery query="(min-width: 1050px)">
            <div className={profileContainer}>
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

              <div className={detailsContainer}>
                <div className={details}>
                  <div className={itemName}>{prof.firstPosition[0].name}</div>
                  <div className={itemSpec}>{prof.firstPosition[0].spec}</div>
                </div>
                <div className={details}>
                  <div className={itemName}>{prof.firstPosition[1].name}</div>
                  <div className={itemSpec}>{prof.firstPosition[1].spec}</div>
                </div>
                <div className={details}>
                  <div className={itemName}>{prof.firstPosition[2].name}</div>
                  <div className={itemSpec}>{prof.firstPosition[2].spec}</div>
                </div>
                <div className={details}>
                  <div className={itemName}>{prof.secondPosition[0].name}</div>
                  <div className={itemSpec}>{prof.secondPosition[0].spec}</div>
                </div>
                <div className={details}>
                  <div className={itemName}>{prof.secondPosition[1].name}</div>
                  <div className={itemSpec}>{prof.secondPosition[1].spec}</div>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1051px)">
            <div className={profileContainerMini}>
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

              <div className={details}>
                <div className={itemName}>{prof.firstPosition[0].name}</div>
                <div className={itemSpec}>{prof.firstPosition[0].spec}</div>
                <div className={itemName}>{prof.firstPosition[1].name}</div>
                <div className={itemSpec}>{prof.firstPosition[1].spec}</div>
                <div className={itemName}>{prof.firstPosition[2].name}</div>
                <div className={itemSpec}>{prof.firstPosition[2].spec}</div>
              </div>
            </div>
            <div className={itemName}>{prof.secondPosition[0].name}</div>
            <div className={itemSpec}>{prof.secondPosition[0].spec}</div>

            <div className={itemName}>{prof.secondPosition[1].name}</div>
            <div className={itemSpec}>{prof.secondPosition[1].spec}</div>
          </MediaQuery>
        </div>
      </ContentArea>
      <Footer />
    </>
  );
};
// Step 3: Export your component
export default IndexPage;
