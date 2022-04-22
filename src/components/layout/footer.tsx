import * as React from "react";
import * as vanilla from "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className={vanilla.Footer}>
      <a href="https://soundcloud.com/kashiwade">
        <FontAwesomeIcon
          icon={faSoundcloud}
          className={vanilla.SnsSoundcloud}
          size="6x"
        />
      </a>

      <a href="https://twitter.com/Kashiwade_music">
        <FontAwesomeIcon
          icon={faTwitter}
          className={vanilla.SnsTwitter}
          size="6x"
        />
      </a>
      <a href="https://www.youtube.com/c/kashiwade">
        <FontAwesomeIcon
          icon={faYoutube}
          className={vanilla.SnsYoutube}
          size="6x"
        />
      </a>
    </footer>
  );
};
export default Footer;
