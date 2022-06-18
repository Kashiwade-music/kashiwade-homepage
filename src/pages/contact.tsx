import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout
      pageUrl={"/contact"}
      pageTitle={"Contact"}
      pageDescription={"お仕事の依頼・感想等をお待ちしております！"}
      currentPage={"contact"}
    >
      <h1>カシワデ / Kashiwade</h1>
    </Layout>
  );
};
export default ContactPage;
