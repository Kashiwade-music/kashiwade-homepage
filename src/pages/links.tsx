import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { useMediaQuery } from "react-responsive";
import * as vanilla from "../styles/links.css";
import {
  FaSoundcloud,
  FaYoutube,
  FaBandcamp,
  FaSpotify,
  FaApple,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { IconType } from "react-icons";
import PixivBoothIcon from "../tools/PixivBoothIcon";
import PixivIcon from "../tools/PixivIcon";

type Props = {
  name: string;
  description: string;
  link: string;
  backgroundColor: string;
  icon: IconType;
  isReactIcons: boolean;
  size: number;
};

const SNSSpec: Props[] = [
  {
    name: "SoundCloud",
    description: "自分の作った曲が置いてあります。",
    link: "https://soundcloud.com/kashiwade",
    backgroundColor: "#F26F23",
    icon: FaSoundcloud,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "YouTube",
    description: "自分の作った曲が昔のものも含めて置いてあります。",
    link: "https://www.youtube.com/c/Kashiwade",
    backgroundColor: "#db0000",
    icon: FaYoutube,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "pixivBOOTH",
    description: "アルバムのデジタル版を販売しています。",
    link: "https://kashiwade.booth.pm/",
    backgroundColor: "#fc4d50",
    icon: PixivBoothIcon,
    isReactIcons: false,
    size: 43,
  },
  {
    name: "Bandcamp",
    description: "アルバムのデジタル版を販売しています。",
    link: "https://kashiwade.bandcamp.com/",
    backgroundColor: "#629aa9",
    icon: FaBandcamp,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "Spotify",
    description: "アルバムのストリーミング配信をしています。",
    link: "https://open.spotify.com/artist/1VUQDZmcLPRaphdHFdarnk",
    backgroundColor: "#1db954",
    icon: FaSpotify,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "Apple Music",
    description: "アルバムのストリーミング配信をしています。",
    link: "https://music.apple.com/jp/artist/kashiwade/1610304911?l=en",
    backgroundColor: "#000",
    icon: FaApple,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "Twitter",
    description: "雑多なことをつぶやいてます。",
    link: "https://twitter.com/Kashiwade_music",
    backgroundColor: "#1da1f2",
    icon: FaTwitter,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "pixivFANBOX",
    description: "支援サイトです。ちょくちょく記事を書いています。",
    link: "https://kashiwade.fanbox.cc/",
    backgroundColor: "#0096fa",
    icon: PixivIcon,
    isReactIcons: false,
    size: 45,
  },
  {
    name: "GitHub",
    description: "謎の設計図共有サイト",
    link: "https://github.com/Kashiwade-music",
    backgroundColor: "#171515",
    icon: FaGithub,
    isReactIcons: true,
    size: 45,
  },
  {
    name: "Email / Contact",
    description: "お仕事の依頼や相談等はこちら。",
    link: "/contact",
    backgroundColor: "#0073d1",
    icon: FaEnvelope,
    isReactIcons: true,
    size: 45,
  },
];

const SNSLinkBox = (sns: Props, isMobile: boolean) => {
  if (sns.link == "/contact") {
    return (
      <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
        <div className={vanilla.LinkBox}>
          <div
            className={vanilla.SNSIcon}
            style={{ backgroundColor: sns.backgroundColor }}
          >
            {sns.isReactIcons && <sns.icon size={sns.size} color={"white"} />}
            {!sns.isReactIcons && <sns.icon style={{ width: sns.size }} />}
          </div>
          <div className={vanilla.SNSNameDescription}>
            <div className={isMobile ? vanilla.SNSNameMobile : vanilla.SNSName}>
              {sns.name}
            </div>
            <div className={vanilla.SNSDescription}>{sns.description}</div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <a
        href={sns.link}
        className=""
        target="_blank"
        rel="noreferrer"
        style={{ color: "#000", textDecoration: "none" }}
      >
        <div className={vanilla.LinkBox}>
          <div
            className={vanilla.SNSIcon}
            style={{ backgroundColor: sns.backgroundColor }}
          >
            {sns.isReactIcons && <sns.icon size={sns.size} color={"white"} />}
            {!sns.isReactIcons && <sns.icon style={{ width: sns.size }} />}
          </div>
          <div className={vanilla.SNSNameDescription}>
            <div className={isMobile ? vanilla.SNSNameMobile : vanilla.SNSName}>
              {sns.name}
            </div>
            <div className={vanilla.SNSDescription}>{sns.description}</div>
          </div>
        </div>
      </a>
    );
  }
};

const LinksPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Layout
      pageUrl={"/links"}
      pageTitle={"Links"}
      pageDescription={"各種リンクと連絡先などです"}
      currentPage={"links"}
    >
      <div
        className={
          isMobile ? vanilla.LinkBoxesAriaMobile : vanilla.LinkBoxesAria
        }
      >
        {SNSSpec.map((data) => SNSLinkBox(data, isMobile))}
      </div>
    </Layout>
  );
};

export default LinksPage;
