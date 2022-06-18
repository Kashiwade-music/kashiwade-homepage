import * as React from "react";
import Meta from "./layout/meta";
import Navbar from "./layout/navbar";
import Header from "./layout/header";
import IndexHeader from "./layout/indexHeader";
import ContentArea from "./layout/contentArea";
import Footer from "./layout/footer";

type Props = {
  currentPage: string;
  pageTitle?: string | null;
  isIndex?: boolean;
  pageUrl?: string;
  pageDescription?: string;
  pageHero?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  currentPage,
  pageTitle = "",
  isIndex = false,
  pageUrl = "",
  pageDescription = "",
  pageHero = "",
  children,
}) => {
  if (isIndex) {
    return (
      <>
        <Meta />
        <Navbar currentPage={currentPage} />
        <IndexHeader />
        <ContentArea>{children}</ContentArea>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Meta
          pageUrl={pageUrl}
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          pageHero={pageHero}
        />
        <Navbar currentPage={currentPage} />
        <Header pageTitle={pageTitle}>{pageDescription}</Header>
        <ContentArea>{children}</ContentArea>
        <Footer />
      </>
    );
  }
};

export default Layout;
