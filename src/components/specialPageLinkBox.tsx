import React from "react";
import * as vanilla from "./specialPageLinkBox.css";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Link } from "gatsby";

interface Props {
  slug: string;
  description_array: string[];
  ogp: IGatsbyImageData;
  logo_image: IGatsbyImageData;
  descriptionBackgroundImage: IGatsbyImageData;
  textColor: string;
  overlayColor: string;
  overlayOpacity: number;
  imageFilter: string;
  title: string;
}

export const SpecialPageLinkBox: React.FC<Props> = ({
  slug,
  description_array,
  ogp,
  logo_image,
  descriptionBackgroundImage,
  textColor,
  overlayColor,
  overlayOpacity,
  imageFilter,
  title,
}) => {
  const ogpImage = getImage(ogp);
  const descriptionBackgroundImageImage = getImage(descriptionBackgroundImage);
  const logoImage = getImage(logo_image);
  const imageHeight = 630;
  const imageWidth = 1200;

  const [ImageFilter, setImageFilter] = React.useState<string>("");
  const [OverlayOpacity, setOverlayOpacity] = React.useState<number>(1);
  const [OverlayColor, setOverlayColor] =
    React.useState<string>("rgba(0,0,0,0)");
  return (
    <Link to={slug} title={""} style={{ textDecoration: "none" }}>
      <div
        className={vanilla.SpecialPageLinkBoxParent}
        onMouseEnter={() => {
          setImageFilter(imageFilter);
          setOverlayColor(overlayColor);
          setOverlayOpacity(overlayOpacity);
        }}
        onMouseLeave={() => {
          setImageFilter("");
          setOverlayColor("rgba(0,0,0,0)");
          setOverlayOpacity(1);
        }}
      >
        <div
          className={vanilla.TextParent}
          style={assignInlineVars({
            [vanilla.TextColor]: textColor,
          })}
        >
          <div className={vanilla.TextTitle}>{title}</div>
          <div className={vanilla.TextDescription}>
            {description_array.map((value, index) => (
              <>
                {value}
                {index !== description_array.length - 1 && <br />}
              </>
            ))}
          </div>
        </div>
        <div
          className={vanilla.BackgroundOverLay}
          style={assignInlineVars({
            [vanilla.OverlayColor]: OverlayColor,
            [vanilla.OverlayOpacity]: OverlayOpacity as unknown as string,
          })}
        />
        <div
          className={vanilla.BackgroundWrapper}
          style={assignInlineVars({
            [vanilla.ImageFilter]: ImageFilter,
          })}
        >
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
