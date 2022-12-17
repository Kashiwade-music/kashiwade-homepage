import * as vanilla from "./specialPageLinkBoxSP.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface Props {
  slug: string;
  logo_image: IGatsbyImageData;
  descriptionBackgroundImage: IGatsbyImageData;
}

export const SpecialPageLinkBoxSP: React.FC<Props> = ({
  slug,
  logo_image,
  descriptionBackgroundImage,
}) => {
  const descriptionBackgroundImageImage = getImage(descriptionBackgroundImage);
  const logoImage = getImage(logo_image);

  return (
    <Link to={slug} title={slug} style={{ textDecoration: "none" }}>
      <div className={vanilla.SpecialPageLinkBoxParent}>
        <div className={vanilla.BackgroundWrapper}>
          <div className={vanilla.LogoImagePositioner}>
            <GatsbyImage
              image={logoImage as IGatsbyImageData}
              alt=""
              className={vanilla.LogoImage}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <GatsbyImage
            image={descriptionBackgroundImageImage as IGatsbyImageData}
            alt=""
            className={vanilla.Background}
          />
        </div>
      </div>
    </Link>
  );
};
