// Step 1: Import React
import * as React from "react";
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
} from "../styles/profile.module.css";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <NavBar currentPage="profile" />
      <Header pageTitle="Profile">自己紹介です。</Header>
      <ContentArea>
        <h1 className={centerH1}>カシワデ / Kashiwade</h1>
        <div>
          <MediaQuery query="(min-width: 1050px)">
            <div className={profileContainer}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_trim8-9.png"
                height={400}
                quality={100}
                layout="fullWidth"
              />
              <div className={detailsContainer}>
                <div className={details}>
                  <div className={itemName}>Description</div>
                  <div className={itemSpec}>
                    主にオーケストラ(サウンドトラック・Epic)の曲を作っている人です。
                    <br />
                    壮大さを売りとしてコツコツ曲を作っています。
                  </div>
                </div>
                <div className={details}>
                  <div className={itemName}>Hobby</div>
                  <div className={itemSpec}>
                    耳コピ・ピアノ
                    <br />
                    原神・ウマ娘
                  </div>
                </div>
                <div className={details}>
                  <div className={itemName}>About Icon</div>
                  <div className={itemSpec}>
                    アイコンは
                    <a href="https://twitter.com/_sironora_">sironoraさん</a>
                    に描いて頂いたものです！すんごいかわいい。
                  </div>
                </div>
                <div className={details}>
                  <div className={itemName}>Favorite Plugins</div>
                  <div className={itemSpec}>
                    EASTWEST Hollywood Orchestra Diamond、
                    <br />
                    Heavyocity Gravity、
                    <br />
                    Liquidsonics Cinematic Rooms Professional
                  </div>
                </div>
                <div className={details}>
                  <div className={itemName}>This Web page</div>
                  <div className={itemSpec}>
                    ReactベースのStatic Site
                    Generator、GatsbyJSを使って無地から作ってみました。ドキュメントがしっかりしてるので作りやすかったです。
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1050px)">
            <div className={profileContainerMini}>
              <StaticImage
                src="../images/kashiwade_sironora_normal_trim8-9.png"
                height={400}
                quality={100}
                layout="fullWidth"
              />

              <div className={details}>
                <div className={itemName}>Description</div>
                <div className={itemSpec}>
                  主にオーケストラ(サウンドトラック・Epic)の曲を作っている人です。
                  <br />
                  壮大さを売りとしてコツコツ曲を作っています。
                </div>
                <div className={itemName}>Hobby</div>
                <div className={itemSpec}>
                  耳コピ・ピアノ
                  <br />
                  原神・ウマ娘
                </div>
                <div className={itemName}>About Icon</div>
                <div className={itemSpec}>
                  アイコンは
                  <a href="https://twitter.com/_sironora_">sironoraさん</a>
                  に描いて頂いたものです！すんごいかわいい。
                </div>
              </div>
            </div>
            <div className={itemName}>Favorite Plugins</div>
            <div className={itemSpec}>
              EASTWEST Hollywood Orchestra Diamond、
              <br />
              Heavyocity Gravity、
              <br />
              Liquidsonics Cinematic Rooms Professional
            </div>
            <div className={itemName}>This Web page</div>
            <div className={itemSpec}>
              ReactベースのStatic Site
              Generator、GatsbyJSを無地から作ってみました。ドキュメントがしっかりしてるので作りやすかったです。
            </div>
          </MediaQuery>
        </div>
      </ContentArea>
      <Footer />
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
