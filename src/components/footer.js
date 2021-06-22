import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  footer,
  snsSoundcloud,
  snsYoutube,
  snsTwitter,
} from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faTwitter,
  faYoutube,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className={footer}>
      <a href="https://soundcloud.com/kashiwade">
        <FontAwesomeIcon
          icon={faSoundcloud}
          className={snsSoundcloud}
          size="6x"
        />
      </a>

      <a href="https://twitter.com/Kashiwade_music">
        <FontAwesomeIcon icon={faTwitter} className={snsTwitter} size="6x" />
      </a>
      <a href="https://www.youtube.com/c/kashiwade">
        <FontAwesomeIcon icon={faYoutube} className={snsYoutube} size="6x" />
      </a>
    </footer>
  );
};
export default Footer;
