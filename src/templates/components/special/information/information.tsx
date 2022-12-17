import { H1 } from "../h1/h1";
import * as vanilla from "./information.css";
import * as vanillaSP from "./informationSP.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { useMediaQuery } from "react-responsive";

interface ShopAccordionMenuProps {
  i: number;
  expanded: number | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  titleText: string;
  textArray: Array<string>;
  linkArray: Array<string>;
  data: Queries.SpecialPageQuery;
}

const ShopAccordionMenu: React.FC<ShopAccordionMenuProps> = ({
  i,
  expanded,
  setExpanded,
  titleText,
  textArray,
  linkArray,
  data,
}) => {
  const isOpen = i === expanded;

  return (
    <div className={vanilla.Accordion}>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div
          className={vanilla.AccordionHeaderStyle}
          style={assignInlineVars({
            [vanilla.AccordionHeaderBGColor]: data.markdownRemark?.frontmatter
              ?.theme?.main as string,
            [vanilla.AccordionHeaderHoverColor]: data.markdownRemark
              ?.frontmatter?.theme?.mainSub1 as string,
            [vanilla.AccordionHeaderTextColor]: data.markdownRemark?.frontmatter
              ?.theme?.baseSub1 as string,
          })}
        >
          {titleText}
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={vanilla.AccordionItemFlexBox}>
              {textArray.map((_, index) => (
                <div
                  className={
                    ((index / 3) | 0) == 0
                      ? vanilla.AccordionItemFirst
                      : vanilla.AccordionItem
                  }
                  style={assignInlineVars({
                    [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                      ?.theme?.mainSub2 as string,
                  })}
                  key={index}
                >
                  <a
                    href={linkArray[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={vanilla.AccordionItemA}
                    style={assignInlineVars({
                      [vanilla.InfoFieldValueColor]: data.markdownRemark
                        ?.frontmatter?.theme?.main as string,
                    })}
                  >
                    {textArray[index]}
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ShopProps {
  data: Queries.SpecialPageQuery;
}

const Shop: React.FC<ShopProps> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<false | number>(9);

  return (
    <>
      {data.markdownRemark?.frontmatter?.shop?.download && (
        <ShopAccordionMenu
          i={0}
          expanded={expanded}
          setExpanded={setExpanded}
          titleText={"Buy Digital Album"}
          textArray={data.markdownRemark.frontmatter.shop.download
            .filter((_, i) => i % 2 === 0)
            .map((x) => (x as string).toString())}
          linkArray={data.markdownRemark.frontmatter.shop.download
            .filter((_, i) => i % 2 === 1)
            .map((x) => (x as string).toString())}
          data={data}
        />
      )}
      {data.markdownRemark?.frontmatter?.shop?.cd && (
        <ShopAccordionMenu
          i={1}
          expanded={expanded}
          setExpanded={setExpanded}
          titleText={"Buy CD Album"}
          textArray={data.markdownRemark.frontmatter.shop.cd
            .filter((_, i) => i % 2 === 0)
            .map((x) => (x as string).toString())}
          linkArray={data.markdownRemark.frontmatter.shop.cd
            .filter((_, i) => i % 2 === 1)
            .map((x) => (x as string).toString())}
          data={data}
        />
      )}
      {data.markdownRemark?.frontmatter?.shop?.streaming && (
        <ShopAccordionMenu
          i={2}
          expanded={expanded}
          setExpanded={setExpanded}
          titleText={"Listen via Streaming"}
          textArray={data.markdownRemark.frontmatter.shop.streaming
            .filter((_, i) => i % 2 === 0)
            .map((x) => (x as string).toString())}
          linkArray={data.markdownRemark.frontmatter.shop.streaming
            .filter((_, i) => i % 2 === 1)
            .map((x) => (x as string).toString())}
          data={data}
        />
      )}
    </>
  );
};

interface ShopSPProps {
  textArray: Array<string>;
  linkArray: Array<string>;
  data: Queries.SpecialPageQuery;
}

const ShopSP: React.FC<ShopSPProps> = ({ textArray, linkArray, data }) => {
  return (
    <div className={vanillaSP.AccordionItemFlexBox}>
      {textArray.map((_, index) => (
        <div className={vanillaSP.AccordionItem} key={index}>
          <a
            href={linkArray[index]}
            target="_blank"
            rel="noopener noreferrer"
            className={vanillaSP.AccordionItemA}
            style={assignInlineVars({
              [vanillaSP.InfoFieldValueColor]: data.markdownRemark?.frontmatter
                ?.theme?.main as string,
            })}
          >
            {textArray[index]}
          </a>
        </div>
      ))}
    </div>
  );
};

interface InformationProps {
  data: Queries.SpecialPageQuery;
}

export const Information: React.FC<InformationProps> = ({ data }) => {
  const jacket = getImage(
    data.markdownRemark?.frontmatter?.jacketImage as unknown as IGatsbyImageData
  );

  const isWidthWiderThan720 = useMediaQuery({ minWidth: 720 });
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3 }}
    >
      <H1 data={data}>Information</H1>
      {mounted && isWidthWiderThan720 && (
        <>
          <div className={vanilla.Parent}>
            <div className={vanilla.Jacket}>
              <GatsbyImage image={jacket as IGatsbyImageData} alt="jacket" />
            </div>
            <div className={vanilla.Info}>
              <div className={vanilla.InfoFieldWrapper}>
                <div>
                  <div className={vanilla.InfoFieldFirst}>
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Title
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {data.markdownRemark?.frontmatter?.infomation?.title}
                    </div>
                  </div>
                  <div
                    className={vanilla.InfoField}
                    style={assignInlineVars({
                      [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                        ?.theme?.mainSub2 as string,
                    })}
                  >
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Circle
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {data.markdownRemark?.frontmatter?.infomation?.circle}
                    </div>
                  </div>
                  <div
                    className={vanilla.InfoField}
                    style={assignInlineVars({
                      [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                        ?.theme?.mainSub2 as string,
                    })}
                  >
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Specification
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {
                        data.markdownRemark?.frontmatter?.infomation
                          ?.specification
                      }
                    </div>
                  </div>
                  <div
                    className={vanilla.InfoField}
                    style={assignInlineVars({
                      [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                        ?.theme?.mainSub2 as string,
                    })}
                  >
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Release Date
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {
                        data.markdownRemark?.frontmatter?.infomation
                          ?.releaseDate
                      }
                    </div>
                  </div>
                  <div
                    className={vanilla.InfoField}
                    style={assignInlineVars({
                      [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                        ?.theme?.mainSub2 as string,
                    })}
                  >
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Booth
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {data.markdownRemark?.frontmatter?.infomation?.booth}
                    </div>
                  </div>
                  <div
                    className={vanilla.InfoField}
                    style={assignInlineVars({
                      [vanilla.BorderColor]: data.markdownRemark?.frontmatter
                        ?.theme?.mainSub2 as string,
                    })}
                  >
                    <div
                      className={vanilla.InfoFieldKey}
                      style={assignInlineVars({
                        [vanilla.InfoFieldKeyColor]: data.markdownRemark
                          ?.frontmatter?.theme?.accent as string,
                      })}
                    >
                      Price
                    </div>
                    <div className={vanilla.InfoFieldValue}>
                      {data.markdownRemark?.frontmatter?.infomation?.price}
                    </div>
                  </div>
                </div>
                <div>
                  <Shop data={data} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {mounted && !isWidthWiderThan720 && (
        <>
          <div className={vanillaSP.JacketWrapper}>
            <div className={vanillaSP.Jacket}>
              <GatsbyImage image={jacket as IGatsbyImageData} alt="jacket" />
            </div>
          </div>
          <div className={vanillaSP.InfoFieldWrapper}>
            <div className={vanillaSP.InfoFieldWrapFirst}>
              <div className={vanillaSP.InfoFieldFirst}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Title
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.title}
                </div>
              </div>
            </div>
            <div
              className={vanillaSP.InfoFieldWrap}
              style={assignInlineVars({
                [vanillaSP.BorderColor]: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub2 as string,
              })}
            >
              <div className={vanillaSP.InfoField}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Circle
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.circle}
                </div>
              </div>
            </div>
            <div
              className={vanillaSP.InfoFieldWrap}
              style={assignInlineVars({
                [vanillaSP.BorderColor]: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub2 as string,
              })}
            >
              <div className={vanillaSP.InfoField}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Specification
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.specification}
                </div>
              </div>
            </div>
            <div
              className={vanillaSP.InfoFieldWrap}
              style={assignInlineVars({
                [vanillaSP.BorderColor]: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub2 as string,
              })}
            >
              <div className={vanillaSP.InfoField}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Release Date
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.releaseDate}
                </div>
              </div>
            </div>
            <div
              className={vanillaSP.InfoFieldWrap}
              style={assignInlineVars({
                [vanillaSP.BorderColor]: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub2 as string,
              })}
            >
              <div className={vanillaSP.InfoField}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Booth
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.booth}
                </div>
              </div>
            </div>
            <div
              className={vanillaSP.InfoFieldWrap}
              style={assignInlineVars({
                [vanillaSP.BorderColor]: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub2 as string,
              })}
            >
              <div className={vanillaSP.InfoField}>
                <div
                  className={vanillaSP.InfoFieldKey}
                  style={assignInlineVars({
                    [vanillaSP.InfoFieldKeyColor]: data.markdownRemark
                      ?.frontmatter?.theme?.accent as string,
                  })}
                >
                  Price
                </div>
                <div className={vanillaSP.InfoFieldValue}>
                  {data.markdownRemark?.frontmatter?.infomation?.price}
                </div>
              </div>
            </div>
          </div>
          <div>
            {data.markdownRemark?.frontmatter?.shop?.download && (
              <div className={vanillaSP.ShopItem}>
                <div
                  className={vanillaSP.ShopHeader}
                  style={assignInlineVars({
                    [vanillaSP.ShopHeaderBGColor]: data.markdownRemark
                      ?.frontmatter?.theme?.main as string,
                    [vanillaSP.ShopHeaderTextColor]: data.markdownRemark
                      ?.frontmatter?.theme?.base as string,
                  })}
                >
                  Buy Digital Album
                </div>

                <ShopSP
                  textArray={data.markdownRemark.frontmatter.shop.download
                    .filter((_, i) => i % 2 === 0)
                    .map((x) => (x as string).toString())}
                  linkArray={data.markdownRemark.frontmatter.shop.download
                    .filter((_, i) => i % 2 === 1)
                    .map((x) => (x as string).toString())}
                  data={data}
                />
              </div>
            )}
            {data.markdownRemark?.frontmatter?.shop?.cd && (
              <div className={vanillaSP.ShopItem}>
                <div
                  className={vanillaSP.ShopHeader}
                  style={assignInlineVars({
                    [vanillaSP.ShopHeaderBGColor]: data.markdownRemark
                      ?.frontmatter?.theme?.main as string,
                    [vanillaSP.ShopHeaderTextColor]: data.markdownRemark
                      ?.frontmatter?.theme?.base as string,
                  })}
                >
                  Buy CD Album
                </div>

                <ShopSP
                  textArray={data.markdownRemark.frontmatter.shop?.cd
                    .filter((_, i) => i % 2 === 0)
                    .map((x) => (x as string).toString())}
                  linkArray={data.markdownRemark.frontmatter.shop?.cd
                    .filter((_, i) => i % 2 === 1)
                    .map((x) => (x as string).toString())}
                  data={data}
                />
              </div>
            )}
            {data.markdownRemark?.frontmatter?.shop?.streaming && (
              <div className={vanillaSP.ShopItem}>
                <div
                  className={vanillaSP.ShopHeader}
                  style={assignInlineVars({
                    [vanillaSP.ShopHeaderBGColor]: data.markdownRemark
                      ?.frontmatter?.theme?.main as string,
                    [vanillaSP.ShopHeaderTextColor]: data.markdownRemark
                      ?.frontmatter?.theme?.base as string,
                  })}
                >
                  Listen via Streaming
                </div>

                <ShopSP
                  textArray={data.markdownRemark.frontmatter.shop?.streaming
                    .filter((_, i) => i % 2 === 0)
                    .map((x) => (x as string).toString())}
                  linkArray={data.markdownRemark.frontmatter.shop?.streaming
                    .filter((_, i) => i % 2 === 1)
                    .map((x) => (x as string).toString())}
                  data={data}
                />
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};
