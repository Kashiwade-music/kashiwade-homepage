import * as React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Meta from "./layout/meta";
import Navbar from "./layout/navbar";
import NavbarSmartPhone from "./layout/navbarSmartPhone";
import Header from "./layout/header";
import IndexHeader from "./layout/indexHeader";
import IndexHeaderSmartPhone from "./layout/indexHeaderSmartPhone";
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
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 601px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isIndex) {
    return (
      <>
        {mounted && (
          <>
            <Meta />
            {isDesktop ? (
              <Navbar currentPage={currentPage} />
            ) : (
              <NavbarSmartPhone currentPage={currentPage} />
            )}
            {isDesktop ? <IndexHeader /> : <IndexHeaderSmartPhone />}
            <ContentArea>{children}</ContentArea>
            <Footer />
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {mounted && (
          <>
            <Meta
              pageUrl={pageUrl}
              pageTitle={pageTitle ?? ""}
              pageDescription={pageDescription}
              pageHero={pageHero}
            />
            <Navbar currentPage={currentPage} />
            <Header pageTitle={pageTitle ?? ""}>{pageDescription}</Header>
            <ContentArea>{children}</ContentArea>
            <Footer />
          </>
        )}
      </>
    );
  }
};

export default Layout;
