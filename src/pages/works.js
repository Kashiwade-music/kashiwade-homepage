// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <NavBar currentPage="works" />
      <Header pageTitle="Works">
        制作した作品の一覧です。
        <br />
        大部分がYouTubeやSoundcloudに上がっています。
      </Header>
      <Footer />
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
