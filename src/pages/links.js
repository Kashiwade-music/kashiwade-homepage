// Step 1: Import React
import * as React from "react";
import MediaQuery from "react-responsive";
import HeadMeta from "../components/headMeta";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentArea from "../components/contentArea";
import {
  linkTextDecoration,
  boxArea,
  boxAreaSmartphone,
  snsLinkBox,
  snsName,
  snsNameSmartphone,
  snsDescription,
  snsDescriptionSmartphone,
  snsIcon,
  snsIconAreaSoundcloud,
  snsIconAreaTwitter,
  snsIconAreaYoutube,
  snsIconAreaBandcamp,
  snsIconAreaPixiv,
} from "../styles/links.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faTwitter,
  faYoutube,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";
import pixivLogo from "../images/pixivLogo.svg";
// Step 2: Define your component
const IndexPage = () => {
  const snss = [
    {
      name: "Soundcloud",
      description: "自分の作った曲が置いてあります。YouTubeよりは新しめ。",
      link: "https://soundcloud.com/kashiwade",
      iconClassName: snsIconAreaSoundcloud,
      fontAwesomeIcon: faSoundcloud,
    },
    {
      name: "Youtube",
      description: "自分の作った曲が昔のもの含めて置いてあります。",
      link: "https://www.youtube.com/c/Kashiwade",
      iconClassName: snsIconAreaYoutube,
      fontAwesomeIcon: faYoutube,
    },
    {
      name: "Bandcamp",
      description: "工事中です。Under construction.",
      link: "https://kashiwade.bandcamp.com",
      iconClassName: snsIconAreaBandcamp,
      fontAwesomeIcon: faBandcamp,
    },
    {
      name: "Twitter",
      description: "雑多なことをつぶやいてます。",
      link: "https://twitter.com/Kashiwade_music",
      iconClassName: snsIconAreaTwitter,
      fontAwesomeIcon: faTwitter,
    },
  ];
  return (
    <>
      <HeadMeta
        pageUrl={"/links"}
        pageTitle={"Links"}
        pageDescription={"SNS等のリンク集です。"}
      />
      <NavBar currentPage="links" />
      <Header pageTitle="Links">SNS等のリンク集です。</Header>
      <ContentArea>
        <MediaQuery maxWidth={470}>
          <div className={boxAreaSmartphone}>
            {snss.map((sns) => (
              <SnsLinkBox sns={sns} />
            ))}
            <a
              href={"https://kashiwade.fanbox.cc"}
              className={linkTextDecoration}
            >
              <div className={snsLinkBox}>
                <div className={snsIconAreaPixiv}>
                  <img src={pixivLogo} className={snsIcon} height={40} />
                </div>
                <div className={snsNameSmartphone}>pixivFANBOX</div>
                <div className={snsDescriptionSmartphone}>
                  支援サイトです。ちょくちょく記事を書いています。
                </div>
              </div>
            </a>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={471}>
          <div className={boxArea}>
            {snss.map((sns) => (
              <SnsLinkBox sns={sns} />
            ))}
            <a
              href={"https://kashiwade.fanbox.cc"}
              className={linkTextDecoration}
            >
              <div className={snsLinkBox}>
                <div className={snsIconAreaPixiv}>
                  <img src={pixivLogo} className={snsIcon} height={40} />
                </div>
                <div className={snsName}>pixivFANBOX</div>
                <div className={snsDescription}>
                  支援サイトです。ちょくちょく記事を書いています。
                </div>
              </div>
            </a>
          </div>
        </MediaQuery>
      </ContentArea>
      <Footer />
    </>
  );
};
// Step 3: Export your component
export default IndexPage;

const SnsLinkBox = ({ sns }) => {
  return (
    <a href={sns.link} className={linkTextDecoration}>
      <div className={snsLinkBox}>
        <div className={sns.iconClassName}>
          <FontAwesomeIcon
            icon={sns.fontAwesomeIcon}
            className={snsIcon}
            size="6x"
          />
        </div>
        <MediaQuery maxWidth={470}>
          <div className={snsNameSmartphone}>{sns.name}</div>
          <div className={snsDescriptionSmartphone}>{sns.description}</div>
        </MediaQuery>
        <MediaQuery minWidth={471}>
          <div className={snsName}>{sns.name}</div>
          <div className={snsDescription}>{sns.description}</div>
        </MediaQuery>
      </div>
    </a>
  );
};
