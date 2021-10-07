import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import defOgpImage from "../images/ogpImage.png";

// ページの URL, title, description, type, og:image を渡せるように作成
const HeadMeta = ({ pageUrl, pageTitle, pageDescription, pageHero }) => {
  const data = useStaticQuery(graphql`
    query metaDataQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  return (
    <Helmet
      title={
        pageTitle
          ? `${pageTitle} | ${siteMetadata.title}`
          : `${siteMetadata.title}`
      }
      meta={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: pageDescription || siteMetadata.description,
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: pageTitle
            ? `${pageTitle} | ${siteMetadata.title}`
            : `${siteMetadata.title}`,
        },
        {
          name: "twitter:description",
          content: pageDescription || siteMetadata.description,
        },
        {
          name: "twitter:image",
          content: pageHero
            ? `${siteMetadata.siteUrl}${pageHero}`
            : `${siteMetadata.siteUrl}${defOgpImage}`,
        },
        { name: "twitter:site", content: "@Kashiwade_music" },

        { property: "og:site_name", content: siteMetadata.title },
        {
          property: "og:type",
          content: `website`,
        },
        { property: "og:title", content: pageTitle },

        {
          property: "og:description",
          content: pageDescription || siteMetadata.description,
        },
        {
          property: "og:url",
          content: pageUrl
            ? `${siteMetadata.siteUrl}${pageUrl}`
            : `${siteMetadata.siteUrl}`,
        },
        {
          property: "og:image",
          content: pageHero
            ? `${siteMetadata.siteUrl}${pageHero}`
            : `${siteMetadata.siteUrl}${defOgpImage}`,
        },
      ]}
    />
  );
};
export default HeadMeta;
