// Step 1: Import React
import * as React from "react";
import NavBar from "../components/navBar";
import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import ContentArea from "../components/contentArea";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <NavBar currentPage="index" />
      <TopHeader>
        <h1>曲をつくっています</h1>
      </TopHeader>
      <ContentArea>hoge</ContentArea>
      <Footer />
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
