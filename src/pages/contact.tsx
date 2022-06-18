import * as React from "react";
import * as vanilla from "../styles/contact.css";
import Layout from "../components/layout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";
import { graphql, PageProps } from "gatsby";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

interface Props {
  value: number;
}

const MailLinkBox = (props: Props) => {
  const sns = {
    name: "Email",
    description: "お気軽にご連絡ください！",
    description_Eng: "Feel free to contact me!",
    link: "mailto:kashiwade@outlook.com",
    backgroundColor: "#0073d1",
    icon: FaEnvelope,
    isReactIcons: true,
    size: 45,
  };
  return (
    <a
      href={sns.link}
      className={vanilla.LinkBoxFlexContainer}
      style={{ color: "#000", textDecoration: "none", width: "100%" }}
    >
      <div className={vanilla.LinkBox}>
        <div
          className={vanilla.SNSIcon}
          style={{ backgroundColor: sns.backgroundColor }}
        >
          {sns.isReactIcons && <sns.icon size={sns.size} color={"white"} />}
          {!sns.isReactIcons && <sns.icon style={{ width: sns.size }} />}
        </div>
        <div className={vanilla.SNSNameDescription}>
          <div className={vanilla.SNSName}>{sns.name}</div>
          <div className={vanilla.SNSDescription}>
            {props.value == 0 ? sns.description : sns.description_Eng}
          </div>
        </div>
      </div>
    </a>
  );
};

const ContactPage = ({
  data,
}: PageProps<Queries.GetJpnEngContactHTMLQuery>) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout
      pageUrl={"/contact"}
      pageTitle={"Contact"}
      pageDescription={"お仕事の依頼・感想等をお待ちしております！"}
      currentPage={"contact"}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Japanese" />
        <Tab label="English" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div
          className={vanilla.MdContentsParent}
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html as string,
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          className={vanilla.MdContentsParent}
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[1].node.html as string,
          }}
        />
      </TabPanel>
      <MailLinkBox value={value} />
    </Layout>
  );
};
export default ContactPage;
export const query = graphql`
  query GetJpnEngContactHTML {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/resources/contact/**" } }
      sort: { fields: frontmatter___index }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            index
          }
        }
      }
    }
  }
`;
