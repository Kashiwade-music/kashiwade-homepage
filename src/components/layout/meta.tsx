import DefOgpImage from "../../../resources/common/ogpImage.png";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";

// ページの URL, title, description, type, og:image を渡せるように作成
type Props = {
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageHero?: string;
};

export const Meta: React.FC<Props> = ({
  pageUrl = "", // 無いならsiteMetadata.siteUrlを使用
  pageTitle = "", // 無いならsiteMetadata.titleを使用
  pageDescription = "", // 無いならsiteMetadata.descriptionを使用
  pageHero = "", // 無いならDefOgpImageを使用
}) => {
  const data = useStaticQuery<Queries.metaDataQueryQuery>(graphql`
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

  const siteMetadata = data.site?.siteMetadata ?? {
    description: "",
    siteUrl: "",
    title: "",
  };
  return (
    <>
      <title>
        {pageTitle
          ? `${pageTitle} | ${siteMetadata.title}`
          : `${siteMetadata.title}`}
      </title>
      <meta
        name="description"
        content={`${pageDescription || siteMetadata.description}`}
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        property="og:title"
        content={
          pageTitle
            ? `${pageTitle} | ${siteMetadata.title}`
            : `${siteMetadata.title}`
        }
      />
      <meta property="og:type" content={`website`} />
      <meta
        property="og:url"
        content={
          pageUrl
            ? `${siteMetadata.siteUrl}${pageUrl}`
            : `${siteMetadata.siteUrl}`
        }
      />
      <meta
        property="og:description"
        content={`${pageDescription || siteMetadata.description}`}
      />
      <meta property="og:site_name" content={`${siteMetadata.title}`} />
      <meta property="og:locale:alternate" content="ja_JP" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale" content="ja_JP" />
      <meta
        property="og:image"
        content={
          pageHero
            ? `${siteMetadata.siteUrl}${pageHero}`
            : `${siteMetadata.siteUrl}${DefOgpImage}`
        }
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Kashiwade_music" />
      <meta name="twitter:creator" content="@Kashiwade_music" />
    </>
  );
};
