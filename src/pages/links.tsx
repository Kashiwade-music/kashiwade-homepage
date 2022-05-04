import * as React from "react";
import * as vanilla from "../styles/profile.css";
import Layout from "../components/layout";

const LinksPage = () => {
  return (
    <Layout
      pageUrl={"/links"}
      pageTitle={"Links"}
      pageDescription={"各種リンクと連絡先などです"}
      currentPage={"links"}
    >
      hoge
    </Layout>
  );
};

export default LinksPage;
