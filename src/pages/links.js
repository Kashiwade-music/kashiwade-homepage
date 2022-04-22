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
  snsIconAreaEmail,
  snsIconAreaPixivBooth,
  snsIconAreaPixiv,
  snsIconAreaSpotify,
  snsIconAreaApple,
} from "../styles/links.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faTwitter,
  faYoutube,
  faBandcamp,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import pixivLogo from "../images/pixivLogo.svg";
import pixivBoothLogo from "../images/pixivBoothLogo.svg"

const snsMusic = [
  {
    name: "Soundcloud",
    description: "自分の作った曲が置いてあります。",
    link: "https://soundcloud.com/kashiwade",
    iconClassName: snsIconAreaSoundcloud,
    fontAwesomeIcon: faSoundcloud,
  },
  {
    name: "Youtube",
    description: "自分の作った曲が昔のものも含めて置いてあります。",
    link: "https://www.youtube.com/c/Kashiwade",
    iconClassName: snsIconAreaYoutube,
    fontAwesomeIcon: faYoutube,
  },
]
const snsStore = [
  {
    name: "Bandcamp",
    description: "アルバムのデジタル版を販売しています。",
    link: "https://kashiwade.bandcamp.com",
    iconClassName: snsIconAreaBandcamp,
    fontAwesomeIcon: faBandcamp,
  },
  {
    name: "Spotify",
    description: "アルバムのストリーミング配信をしています。",
    link: "https://open.spotify.com/artist/1VUQDZmcLPRaphdHFdarnk",
    iconClassName: snsIconAreaSpotify,
    fontAwesomeIcon: faSpotify,
  },
  {
    name: "Apple Music",
    description: "アルバムのストリーミング配信をしています。",
    link: "https://music.apple.com/jp/artist/kashiwade/1610304911?l=en",
    iconClassName: snsIconAreaApple,
    fontAwesomeIcon: faApple,
  },
]
const snsText = [
  {
    name: "Twitter",
    description: "雑多なことをつぶやいてます。",
    link: "https://twitter.com/Kashiwade_music",
    iconClassName: snsIconAreaTwitter,
    fontAwesomeIcon: faTwitter,
  },
]

const snsContact = [
  {
    name: "Email",
    description: "お仕事の依頼や相談等はこちら。",
    link: "mailto:kashiwade@outlook.com",
    iconClassName: snsIconAreaEmail,
    fontAwesomeIcon: faEnvelope,
  }
]
const SnsLinkBox = ({ sns }) => {
  return (
    <a href={sns.link} className={linkTextDecoration} target={"_blank"} rel={"noreferrer"}>
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
const returnSNSBoxes = (isSmartPhone = false) => {
  return (
    <>
      {snsMusic.map((sns) => {
        return <SnsLinkBox sns={sns} />
      })}

      <a
        href={"https://kashiwade.booth.pm"}
        className={linkTextDecoration}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div className={snsLinkBox}>
          <div className={snsIconAreaPixivBooth}>
            <img src={pixivBoothLogo} className={snsIcon} height={40} />
          </div>
          <div className={isSmartPhone ? snsNameSmartphone : snsName}>pixivBOOTH</div>
          <div className={isSmartPhone ? snsDescriptionSmartphone : snsDescription}>
            アルバムのデジタル版を販売しています。
          </div>
        </div>
      </a>
      {snsStore.map((sns) => {
        return <SnsLinkBox sns={sns} />
      })}


      {snsText.map((sns) => {
        return <SnsLinkBox sns={sns} />
      })}
      <a
        href={"https://kashiwade.fanbox.cc"}
        className={linkTextDecoration}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div className={snsLinkBox}>
          <div className={snsIconAreaPixiv}>
            <img src={pixivLogo} className={snsIcon} height={40} />
          </div>
          <div className={isSmartPhone ? snsNameSmartphone : snsName}>pixivFANBOX</div>
          <div className={isSmartPhone ? snsDescriptionSmartphone : snsDescription}>
            支援サイトです。ちょくちょく記事を書いています。
          </div>
        </div>
      </a>

      {snsContact.map((sns) => {
        return <SnsLinkBox sns={sns} />
      })}

    </>
  )
}

// Step 2: Define your component
const IndexPage = () => {
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
            {returnSNSBoxes(true)}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={471}>
          <div className={boxArea}>
            {returnSNSBoxes()}
          </div>
        </MediaQuery>
      </ContentArea>
      <Footer />
    </>
  );
};
// Step 3: Export your component
export default IndexPage;


