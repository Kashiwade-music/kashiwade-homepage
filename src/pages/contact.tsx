import * as React from "react";
import * as vanilla from "../styles/contact.css";
import Layout from "../components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { RiSendPlaneFill } from "react-icons/ri";
import { graphql, PageProps } from "gatsby";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#329b51",
      light: "#94e39c",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#94e39c",
          height: "3px",
        },
      },
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "Kanit",
          textTransform: "none",
          fontSize: "21px",
          fontWeight: 200,
        },
      },
    },
  },
});

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
    name: "Send an Email",
    description: "お気軽にご連絡ください！",
    description_Eng: "Feel free to contact me!",
    link: "mailto:kashiwade@outlook.com",
    backgroundColor: "#0073d1",
    icon: RiSendPlaneFill,
    isReactIcons: true,
    size: 47,
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
          <sns.icon size={sns.size} color={"white"} />
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
      <ThemeProvider theme={theme}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Japanese" />
          <Tab label="English" />
        </Tabs>
      </ThemeProvider>
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
      sort: { frontmatter: { index: ASC } }
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
