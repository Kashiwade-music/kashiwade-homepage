import * as React from "react";
import * as vanilla from "./footer.css";
import { FaSoundcloud } from "@react-icons/all-files/fa/FaSoundcloud";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const Footer = () => {
  return (
    <footer className={vanilla.Footer}>
      <div className={vanilla.IconFlexContainer}>
        <a
          href="https://soundcloud.com/kashiwade"
          className={vanilla.IconFlexChild}
          aria-label="Soundcloud"
        >
          <FaSoundcloud className={vanilla.SnsSoundcloud} size={47} />
        </a>

        <a
          href="https://twitter.com/Kashiwade_music"
          className={vanilla.IconFlexChild}
          aria-label="Twitter"
        >
          <FaTwitter className={vanilla.SnsTwitter} size={40} />
        </a>
        <a
          href="https://www.youtube.com/c/kashiwade"
          className={vanilla.IconFlexChild}
          aria-label="Youtube"
        >
          <FaYoutube className={vanilla.SnsYoutube} size={45} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
