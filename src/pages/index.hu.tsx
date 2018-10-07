import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';

import './css/index.css';
import './css/search.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';

export interface NewsOutletNodes {
  node: {
    frontmatter: {
      title: string;
    };
  };
}

interface MainPageProps {
  data: {
    outlets: {
      edges: NewsOutletNodes[];
    };
  };
}

const links = [
  {
    text: 'Hogy miért is van ez az oldal? ...',
    to: '/cselekves#cause',
  },
];

export default ({ data }: MainPageProps) => (
  <Layout>
    {' '}
    <Navbar isHomePage={true} lng="hu" urlSlug="" />
    <header id="heading" role="banner">
      <h1>Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} />
    <div id="main-content" role="main">
      <LinkList links={links} />
    </div>
    <Footer />
  </Layout>
);

export const pageQuery = graphql`
  query HomePageQueryHu {
    outlets: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/outlets/*" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
