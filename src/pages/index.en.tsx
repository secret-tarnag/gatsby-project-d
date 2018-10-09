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
      lang: 'en' | 'hu';
      isIndependent: boolean;
      slug: string;
    };
  };
}

export interface AllOutletsQueryType {
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

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    {' '}
    <Navbar isHomePage={true} lng="en" urlSlug="" />
    <header id="heading" role="banner">
      <h1>Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} lang={'en'} />
    <div id="main-content" role="main">
      <LinkList links={links} />
    </div>
    <Footer />
  </Layout>
);

export const pageQuery = graphql`
  query HomePageQuery {
    outlets: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/outlets/*" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
            isIndependent
            slug
          }
        }
      }
    }
  }
`;
