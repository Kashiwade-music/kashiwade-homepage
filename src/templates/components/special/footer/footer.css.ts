import { style, createVar } from "@vanilla-extract/css";

export const BorderColor = createVar();
export const SitemapBarParent = style({
  margin: "30px 0 0 0 ",
  position: "absolute",
  left: 0,
  right: 0,
  height: "40px",
  width: "100%",
  borderTop: `1px solid ${BorderColor}`,
  borderBottom: `1px solid ${BorderColor}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SitemapBarLayoutWrapper = style({
  width: "100%",
  height: "100%",
  maxWidth: "1000px",
});

export const SitemapBarLayout = style({
  padding: "0 10px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const HomeIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LinkTextColor = createVar();
export const Link = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: LinkTextColor,
});

export const LogoWrapper = style({
  height: "200px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  marginBottom: "25px",
});
