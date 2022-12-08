import * as React from "react";
import * as vanilla from "../styles/profile.css";
import Layout from "../components/layout";
import MediaQuery from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import { Slide } from "react-slideshow-image";

const ProfilePage = () => {
  return (
    <Layout
      pageUrl={"/special"}
      pageTitle={"Special"}
      pageDescription={"特設サイト等のまとめです"}
      currentPage={"special"}
    >
      hoge
    </Layout>
  );
};

export default ProfilePage;
