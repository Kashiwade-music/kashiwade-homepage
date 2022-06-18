import * as React from "react";
import Layout from "../components/layout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html as string,
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[1].node.html as string,
          }}
        />
      </TabPanel>
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
